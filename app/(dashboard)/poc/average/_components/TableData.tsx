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
    totalOrderM:number;
    totalOrderD:number;
}

export default function TableData({getData}:{getData: getDataType[]}) {

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
                                            <TableHead>LAST 7 DAYS AVERAGE</TableHead>
                                            <TableHead>LAST MONTHs AVERAGE</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {
                                            currentPageOrders?.map((order, index: number) => (
                                                <TableRow key={index}>
                                                    <TableCell className="font-medium">{index + 1}</TableCell>

                                                    <TableCell>{order.name}</TableCell>
                                                    <TableCell>{order.totalOrderD.toString().slice(0, 4)}</TableCell>
                                                    <TableCell>{order.totalOrderM.toString().slice(0,4)}</TableCell>
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
