'use client'
import React, { useEffect, useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import Pagination from "@/app/layouts/Pagination";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type DeleveryType ={
      totalOrder?: number,
      name?: string,
      delivered?: number,
      pripaid?: number,
      deliveredCod?:number
}

export default function DeliveredData({
  getData,
}: {
  getData?: Delivered15To45Type[];
}) {
  
  const data = getData?.filter((item)=> item.poc);

  const filterDatas:any = data?.map((item)=> item.poc).filter((value, index, itme)=> itme.indexOf(value) == index)

  const dataArray:DeleveryType[] = []

  if(data){
    
    for(var i of filterDatas){
        const filterData = getData?.filter((item)=> item.poc === i);
        const totalOrdersLength = getData?.filter((item)=> item.poc === i).length;
        const deliveredOrdersLength = filterData?.filter((item)=> item.delivered === "Delivered").length;
        const pripaidOrders = filterData?.filter((item)=> item.prepaid === "PREPAID").length;
        const codOrders = filterData?.filter((item)=> item.cod === "COD").length;
    
        dataArray?.push({
          totalOrder:totalOrdersLength,
          name:i,
          delivered:deliveredOrdersLength,
          pripaid: pripaidOrders,
          deliveredCod:codOrders
        })
      }
  }



  const [pages, setPages] = useState(1);
  const [filterData, setFilterData] = useState(dataArray);
  const [queary, setQueary] = useState("");
  const page = Number(pages);
    const limit = 10;

    const skip = (page - 1) * limit;

    const currentPage = page * limit;

    const currentPageOrders = filterData.slice(skip, currentPage);

    useEffect(() => {
            searchQuery(queary)
        }, [queary]);
    
        const searchQuery = (queary: string) => {
    
            let filterData = dataArray;
    
            if (queary) {
                filterData = dataArray.filter((poc) => (
                    poc?.name?.toLowerCase().includes(queary.toLowerCase())
                ));
                setFilterData(filterData);
            } else {
                setFilterData(dataArray);
            }
        }


  return (
    <div>
            {
                dataArray.length === 0 ? (
                    <div className="text-xl font-bold">Order not fount</div>
                ) :
                    (
                        <div>
                            <Card>
                                <h1 className="text-center text-2xl my-5">DELIVERED ORDERS DATA T-15 TO T-45</h1>
                                <Input placeholder="Search product........" className="w-1/2 my-5 ml-5" value={queary} onChange={(e) => setQueary(e.target.value)} />
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead className="w-[50px]">SNo.</TableHead>
                                            <TableHead>POC</TableHead>
                                            <TableHead className="text-center">Orders</TableHead>
                                            <TableHead className="text-center">DELIVERED</TableHead>
                                            <TableHead className="text-center">COD</TableHead>
                                            <TableHead className="text-center">PREPAID</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {
                                            currentPageOrders?.map((order:any, index: number) => (
                                                <TableRow key={index}>
                                                    <TableCell className="font-medium">{index + 1}</TableCell>

                                                    <TableCell>{order.name}</TableCell>
                                                    <TableCell className="text-center">{order.totalOrder}</TableCell>
                                                    <TableCell className="text-center">{order.delivered}</TableCell>
                                                    <TableCell className="text-center">{order.deliveredCod}</TableCell>
                                                    <TableCell className="text-center">{order.pripaid}</TableCell>
                                                </TableRow>
                                            ))
                                        }
                                    </TableBody>
                                </Table>
                            </Card>
                            <Pagination totalData={dataArray.length} page={page} setPage={setPages} limit={limit} />
                        </div>
                    )
            }

        </div>
  );
}
