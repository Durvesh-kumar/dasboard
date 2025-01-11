"use client"
import Pagination from "@/app/layouts/Pagination";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import IndianCurrency from "@/helpers/Currency";
import { useEffect, useState } from "react";

type getDataType ={
    name: string,
    totalOrder:number;
    totalRevenu:number;
    totalRevenuAv:number;
    pripaid:number;
    pripaidAverage: number,
    performenceScore: number,
    RTOStatsLength: number,
    RTOStatsAverage : number,
}

export default function DataTable({getData}:{getData: getDataType[]}) {

    const [pages, setPages] = useState(1);
    const [filterData, setFilterData] = useState(getData);
    const [queary, setQueary] = useState("");

    const page = Number(pages);
    const limit = 10;
    const skip = (page - 1) * limit;

    const currentPage = page * limit;

    const currentPageOrders = filterData?.slice(skip, currentPage)

    useEffect(() => {
        searchQuery(queary)
    }, [queary]);

    const searchQuery = (queary: string) => {

        let filterData = getData;

        if (queary) {
            filterData = getData.filter((item) => (
                item.name.toLowerCase().includes(queary.toLowerCase())
            ));
            setFilterData(filterData);
        } else {
            setFilterData(getData);
        }
    }

    

  return (
    <div>
            {
                getData?.length === 0 ? (
                    <div className="text-xl font-bold">Order not fount</div>
                ) :
                    (
                        <div>
                            <Card>
                                <h1 className="text-center text-2xl font-bold my-5">PERFORMSNCE INDICATOR LAST 30 DAYS</h1>
                                <Input placeholder="Search product........" className="w-1/2 my-5 ml-5" value={queary} onChange={(e) => setQueary(e.target.value)} />
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead className="w-[50px]">SNo.</TableHead>
                                            <TableHead>POC</TableHead>
                                            <TableHead className="text-center">ORDERS</TableHead>
                                            <TableHead className="text-center">PRIPAID</TableHead>
                                            <TableHead className="text-center">RTO ORDERS</TableHead>
                                            <TableHead className="text-center">ORDER VALUE</TableHead>
                                            <TableHead className="text-center">AVG VALUE</TableHead>
                                            <TableHead className="text-center">PRIPAID AVG</TableHead>
                                            <TableHead className="text-center">RTO ORDERS AVG</TableHead>
                                            <TableHead className="text-center">PERFORMANCE SCORE</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {
                                            currentPageOrders?.map((order, index: number) => (
                                                <TableRow key={index}>
                                                    <TableCell className="font-medium">{index + 1}</TableCell>

                                                    <TableCell>{order.name}</TableCell>
                                                    <TableCell className="text-center">{order.totalOrder}</TableCell>
                                                    <TableCell className="text-center">{order.pripaid}</TableCell>
                                                    <TableCell className="text-center">{order.RTOStatsLength}</TableCell>
                                                    <TableCell className="text-center">{IndianCurrency(order.totalRevenu)}</TableCell>
                                                    <TableCell className="text-center">{IndianCurrency(order.totalRevenuAv)}</TableCell>
                                                    <TableCell className="text-center">{(order.pripaidAverage * 10).toString().slice(0,4)}</TableCell>
                                                    <TableCell className="text-center">{(order.RTOStatsAverage * 10).toString().slice(0,4)}</TableCell>
                                                    <TableCell className="text-center">{order.performenceScore.toString().slice(0,4)}</TableCell>
                                                </TableRow>
                                            ))
                                        }
                                    </TableBody>
                                </Table>
                            </Card>
                            <Pagination totalData={getData.length} page={page} setPage={setPages} limit={limit} />
                        </div>
                    )
            }

        </div>
  )
}
