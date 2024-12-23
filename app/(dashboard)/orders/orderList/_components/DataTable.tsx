"use client"

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
import { useAppContext } from "@/app/(dashboard)/layout";
import Pagination from "@/app/layouts/Pagination";
import { IndianRupee } from "lucide-react";

export default function DataTable() {
    const data = useAppContext()
    const [orders, setOrders] = useState<DashboardDataTypes[]>(data);
    const [allOrders, setAllOrders] = useState(data);
    const [queary, setQueary] = useState("");
    const [pages, setPages] = useState(1);

    const page = Number(pages);
    const limit = 10;

    const skip = (page - 1) * limit;

    const currentPage = page * limit;

    const currentPageOrders = orders.slice(skip, currentPage)

    useEffect(() => {
        searchQuery(queary)
    }, [queary]);

    const searchQuery = (queary: string) => {

        let filterData = allOrders;

        if (queary) {
            filterData = allOrders.filter((order: DashboardDataTypes) => (
                order.clientName.toLowerCase().includes(queary.toLowerCase()) ||
                order.id.toLowerCase().includes(queary.toLowerCase()) ||
                order.state.toLowerCase().includes(queary.toLowerCase()) ||
                order.poc.toLowerCase().includes(queary.toLowerCase())
            ));
            setOrders(filterData);
        } else {
            setOrders(allOrders);
        }
    }

    return (
        <div>
            <div className="font-bold text-[30px]">Customer list</div>

            <hr className="py-0.5 bg-gray-900 my-8" />

            {
                allOrders.length === 0 ? (
                    <div className="text-xl font-bold">Order not fount</div>
                ) :
                    (
                        <div>
                            <div className="flex flex-col gap-5 border p-5 rounded-lg shadow-md">
                                <Input placeholder="Search product........" className="w-1/2" value={queary} onChange={(e) => setQueary(e.target.value)} />
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead className="w-[50px]">SNo.</TableHead>
                                            <TableHead>ID</TableHead>
                                            <TableHead>POC</TableHead>
                                            <TableHead>Mode of Payment</TableHead>
                                            <TableHead>Amount</TableHead>
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
                                                    <TableCell>{order.modeofpayment}</TableCell>
                                                    <TableCell><IndianRupee />{order.totalAmount}</TableCell>
                                                    <TableCell>{order.date}</TableCell>
                                                </TableRow>
                                            ))
                                        }
                                    </TableBody>
                                </Table>
                            </div>
                            <Pagination totalData={orders.length} page={page} setPage={setPages} limit={limit} />
                        </div>
                    )
            }

        </div>
    )
}

export const dynamic = "force-dynamic";