"use client"
import Pagination from "@/app/layouts/Pagination";
import { Card } from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { useState } from "react";

type getDataType ={
    name: string,
    totalOrder:number;
    totaltRevenu:number;
    totaltRevenuAv:string;
    RTOStats:number;
    pripaid:String;
}

export default function DataTable({getData}:{getData: any}) {

    const [pages, setPages] = useState(1);

    const page = Number(pages);
    const limit = 10;

    const skip = (page - 1) * limit;

    const currentPage = page * limit;

    const currentPageOrders = getData?.slice(skip, currentPage)
    

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
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead className="w-[50px]">SNo.</TableHead>
                                            <TableHead>POC</TableHead>
                                            <TableHead>ORDERS</TableHead>
                                            <TableHead>PRIPAID</TableHead>
                                            <TableHead>RTO ORDERS</TableHead>
                                            <TableHead>ORDER VALUE</TableHead>
                                            <TableHead>AVG VALUE</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {
                                            currentPageOrders?.map((order:any, index: number) => (
                                                <TableRow key={index}>
                                                    <TableCell className="font-medium">{index + 1}</TableCell>

                                                    <TableCell>{order.name}</TableCell>
                                                    <TableCell>{order.totalOrder}</TableCell>
                                                    <TableCell>{order.pripaid}</TableCell>
                                                    <TableCell>{order.RTOStats}</TableCell>

                                                    <TableCell>{order.totaltRevenu}</TableCell>
                                                    <TableCell>{order.totaltRevenuAv.toString().slice(0,7)}</TableCell>
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
