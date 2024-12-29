'use client'
import React, { useEffect, useState } from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import Pagination from '@/app/layouts/Pagination';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

type POCDataType = {
    name: string;
    totalOrder:number;
    cncelled:number;
    exiting:number;
}

export default function CustomerHandles({POCData}:{POCData:POCDataType[]}) {

    const [pages, setPages] = useState(1);
    const [queary, setQueary] = useState("");
    const [orders, setOrders] = useState(POCData);

    const page = Number(pages);
    const limit = 10;

    const skip = (page - 1) * limit;

    const currentPage = page * limit;

    const currentPageOrders = orders?.slice(skip, currentPage);

    useEffect(() => {
        searchQuery(queary)
    }, [queary]);

    const searchQuery = (queary: string) => {

        let filterData = POCData;

        if (queary) {
            filterData = POCData.filter((item) => (
                item.name.toLowerCase().includes(queary.toLowerCase())
            ));
            setOrders(filterData);
        } else {
            setOrders(POCData);
        }
    }

  return (
    <div>
            {
                POCData.length === 0 ? (
                    <div className="text-xl font-bold">Order not fount</div>
                ) :
                    (
                        <div>
                            <Card>

                                <h1 className='text-center text-2xl my-5 font-bold'>CUSTOMER RETENTION</h1>
                                <Input placeholder="Search product........" className="w-1/2 my-5 ml-5" value={queary} onChange={(e) => setQueary(e.target.value)} />
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead className="w-[50px]">SNo.</TableHead>
                                            <TableHead>POC</TableHead>
                                            <TableHead className='text-center'>MTD CUSTOMERS</TableHead>
                                            <TableHead className='text-center'>EXISTING</TableHead>
                                            <TableHead className='text-center'>NEW</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {
                                            currentPageOrders?.map((order: POCDataType, index: number) => (
                                                <TableRow key={index}>
                                                    <TableCell className="font-medium">{index + 1}</TableCell>

                                                    <TableCell>{order.name}</TableCell>
                                                    <TableCell className='text-center'>{order.totalOrder}</TableCell>
                                                    <TableCell className='text-center'>{order.cncelled}</TableCell>
                                                    <TableCell className='text-center'>{order.exiting}</TableCell>
                                                </TableRow>
                                            ))
                                        }
                                    </TableBody>
                                </Table>
                            </Card>
                            <Pagination totalData={orders.length} page={page} setPage={setPages} limit={limit} />
                        </div>
                    )
            }

        </div>
  )
    }