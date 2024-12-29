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
import { useEffect, useState } from "react";

type getDataType ={
    poc: string,
    sevenDays:number;
    last30DaysAverage:number;
}

export default function TableData({getData}:{getData: getDataType[]}) {

    const [pages, setPages] = useState(1);
    const [queary, setQueary] = useState('');
    const [filterData, setFilterData] = useState(getData)

    const page = Number(pages);
    const limit = 10;

    const skip = (page - 1) * limit;

    const currentPage = page * limit;

    const currentPageOrders = filterData?.slice(skip, currentPage);

    useEffect(() => {
        searchQuery(queary)
    }, [queary]);

    const searchQuery = (queary: string) => {

        let filterData = getData;

        if (queary) {
            filterData = getData.filter((poc) => (
                poc.poc.toLowerCase().includes(queary.toLowerCase())
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
                                <h1 className="text-center text-2xl font-bold my-5">LAST 7 DAYS AVERAGE VS LAST MONTH AVERAGE</h1>
                                <Input placeholder="Search product........" className="w-1/2 my-5 ml-5" value={queary} onChange={(e) => setQueary(e.target.value)} />
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead className="w-[50px]">SNo.</TableHead>
                                            <TableHead>POC</TableHead>
                                            <TableHead className="text-center">LAST 7 DAYS AVERAGE</TableHead>
                                            <TableHead className="text-center">LAST MONTHs AVERAGE</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {
                                            currentPageOrders?.map((order, index: number) => (
                                                <TableRow key={index}>
                                                    <TableCell className="font-medium">{index + 1}</TableCell>

                                                    <TableCell>{order.poc}</TableCell>
                                                    <TableCell className="text-center">{order.sevenDays?.toString().slice(0,4)}</TableCell>
                                                    <TableCell className="text-center">{order.last30DaysAverage?.toString().slice(0,4)}</TableCell>
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
