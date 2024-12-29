"use client"

import { Input } from "@/components/ui/input";
import { format } from "date-fns";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import { useEffect, useState } from "react";
import { useAppContext } from "@/app/(dashboard)/layout";
import Pagination from "@/app/layouts/Pagination";
import IndianCurrency from "@/helpers/Currency";
import { Card } from "@/components/ui/card";

export default function DataTable() {
    const data = useAppContext()
    const [orders, setOrders] = useState<DashboardDataTypes[]>(data);
    const [queary, setQueary] = useState("");
    const [pages, setPages] = useState(1);

    const page = Number(pages);
    const limit = 10;

    const skip = (page - 1) * limit;

    const currentPage = page * limit;

    const currentPageOrders = orders.slice(skip, currentPage);

    useEffect(() => {
        searchQuery(queary)
    }, [queary]);

    const searchQuery = (queary: string) => {

        let filterData = data;

        if (queary) {
            filterData = data.filter((order: DashboardDataTypes) => (
                order.clientName.toLowerCase().includes(queary.toLowerCase()) ||
                order.state.toLowerCase().includes(queary.toLowerCase()) ||
                order.clientName.toLowerCase().includes(queary.toLowerCase()) ||
                order.cancelled.toLowerCase().includes(queary.toLowerCase()) ||
                order.poc.toLowerCase().includes(queary.toLowerCase())
            ));
            setOrders(filterData);
        } else {
            setOrders(data);
        }
    }

    return (
        <div>
            <div className="font-bold text-[30px]">Customer list</div>

            <hr className="py-0.5 bg-gray-900 my-8" />

            {
                data.length === 0 ? (
                    <div className="text-xl font-bold">Order not fount</div>
                ) :
                    (
                        <div>
                            <Card>
                                <Input placeholder="Search order........" className="w-1/2 my-5 ml-5" value={queary} onChange={(e) => setQueary(e.target.value)} />
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead className="w-[50px]">SNo.</TableHead>
                                            <TableHead>ID</TableHead>
                                            <TableHead>POC</TableHead>
                                            <TableHead>Client Name</TableHead>
                                            <TableHead>Mode of Payment</TableHead>
                                            <TableHead>State</TableHead>
                                            <TableHead>Amount</TableHead>
                                            <TableHead>Order Type</TableHead>
                                            <TableHead>Cancelled</TableHead>
                                            <TableHead>Create At</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {
                                            currentPageOrders?.map((order: DashboardDataTypes, index: number) => (
                                                <TableRow key={index}>
                                                    <TableCell className="font-medium">{index + 1}</TableCell>

                                                    <TableCell>{order.id}</TableCell>
                                                    <TableCell>{order.poc}</TableCell>
                                                    <TableCell>{order.clientName}</TableCell>
                                                    <TableCell>{order.state}</TableCell>
                                                    <TableCell>{order.modeofpayment}</TableCell>
                                                    <TableCell>{IndianCurrency(order.totalAmount)}</TableCell>
                                                    <TableCell>{order.orderType}</TableCell>
                                                    <TableCell>{order.cancelled}</TableCell>
                                                    <TableCell>{format(new Date(order.date), "dd-MM-YYY")}</TableCell>
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

export const dynamic = "force-dynamic";