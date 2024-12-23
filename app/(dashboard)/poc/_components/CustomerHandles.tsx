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
import { getMdtData } from '@/lib/actions';

export default function CustomerHandles() {

    const [getData, setGetData] = useState<MDTDype[]>([])
    const fetchData = async()=>{
        const res = await getMdtData()
        setGetData(res)
    }
  
    useEffect(()=>{
        fetchData()
    }, []);

    const riyaData = getData?.filter((item)=> item.poc === "RIYA");
    const faizData = getData?.filter((item)=> item.poc === "FAIZ");
    const laxmanData = getData?.filter((item)=> item.poc === "LAXMAN");
    const aliData = getData?.filter((item)=> item.poc === "ALI");
    const rinkiData = getData?.filter((item)=> item.poc === "RINKI");
    const princeData = getData?.filter((item)=> item.poc === "PRINCE");
    const rahulData = getData?.filter((item)=> item.poc === "RAHUL");
    const fezData = getData?.filter((item)=> item.poc === "FEZ");
    const bhawnaData = getData?.filter((item)=> item.poc === "BHAWNA");
    const nehaData = getData?.filter((item)=> item.poc === "NEHA");
    const reechaData = getData?.filter((item)=> item.poc === "REECHA");
    const rajniData = getData?.filter((item)=> item.poc === "RAJNI");
    const rajivData = getData?.filter((item)=> item.poc === "RAJIV");
    const deepikaData = getData?.filter((item)=> item.poc === "DEEPIKA");
    const mansikaData = getData?.filter((item)=> item.poc === "MANSI");
    const adityakaData = getData?.filter((item)=> item.poc === "ADITYA");
    const atharkaData = getData?.filter((item)=> item.poc === "ATHAR");

    const riyaDataC = riyaData?.filter((item)=> item.cancelled === "Cancelled");
    const faizDataC = faizData?.filter((item)=> item.cancelled === "Cancelled");
    const laxmanDataC = laxmanData?.filter((item)=> item.cancelled === "Cancelled");
    const aliDataC = aliData?.filter((item)=> item.cancelled === "Cancelled");
    const rinkiDataC = rinkiData?.filter((item)=> item.cancelled === "Cancelled");
    const princeDataC = princeData?.filter((item)=> item.cancelled === "Cancelled");
    const rahulDataC = rahulData?.filter((item)=> item.cancelled === "Cancelled");
    const fezDataC = fezData?.filter((item)=> item.poc === "FEZ");
    const bhawnaDataC = bhawnaData?.filter((item)=> item.poc === "BHAWNA");
    const nehaDataC = nehaData?.filter((item)=> item.poc === "NEHA");
    const reechaDataC = reechaData?.filter((item)=> item.cancelled === "Cancelled");
    const rajniDataC = rajniData?.filter((item)=> item.cancelled === "Cancelled");
    const rajivDataC = rajivData?.filter((item)=> item.poc === "RAJIV");
    const deepikaDataC = deepikaData?.filter((item)=> item.cancelled === "Cancelled");
    const mansikaDataC = mansikaData?.filter((item)=> item.cancelled === "Cancelled");
    const adityakaDataC = adityakaData?.filter((item)=> item.cancelled === "Cancelled");
    const atharkaDataC = atharkaData?.filter((item)=> item.cancelled === "Cancelled");


    const POCData = [
        {name: "RIYA", totalOrder: riyaData?.length, cncelled: riyaDataC?.length},
        {name: "FAIZ", totalOrder: faizData?.length, cncelled:faizDataC?.length},
        {name: "LAXMAN", totalOrder: laxmanData?.length, cncelled:laxmanDataC?.length},
        {name: "ALI", totalOrder: aliData?.length, cncelled:aliDataC?.length},
        {name: "RINKI", totalOrder: rinkiData?.length, cncelled:rinkiDataC?.length},
        {name: "PRINCE", totalOrder: princeData?.length, cncelled:princeDataC?.length},
        {name: "RAHUL", totalOrder: rahulData?.length, cncelled:rahulDataC?.length},
        {name: "REECHA", totalOrder: reechaData?.length, cncelled:reechaDataC?.length},
        {name: "RAJNI", totalOrder: rajniData?.length, cncelled: rajniDataC.length},
        {name: "DEEPIKA", totalOrder: deepikaData?.length, cncelled:deepikaDataC?.length},
        {name: "MANSI", totalOrder: mansikaData?.length, cncelled:mansikaDataC?.length},
        {name: "ADITYA", totalOrder: adityakaData?.length, cncelled:adityakaDataC?.length},
        {name: "ATHAR", totalOrder: atharkaData?.length, cncelled:atharkaDataC?.length},
    ]

    const [pages, setPages] = useState(1);

    const page = Number(pages);
    const limit = 10;

    const skip = (page - 1) * limit;

    const currentPage = page * limit;

    const currentPageOrders = POCData?.slice(skip, currentPage)

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
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead className="w-[50px]">SNo.</TableHead>
                                            <TableHead>POC</TableHead>
                                            <TableHead>MTD CUSTOMERS</TableHead>
                                            <TableHead>EXISTING</TableHead>
                                            <TableHead>NEW</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {
                                            currentPageOrders?.map((order: any, index: number) => (
                                                <TableRow key={index}>
                                                    <TableCell className="font-medium">{index + 1}</TableCell>

                                                    <TableCell>{order.name}</TableCell>
                                                    <TableCell>{order.totalOrder}</TableCell>
                                                    <TableCell>{order.cncelled}</TableCell>
                                                    <TableCell>{order.totalOrder - order.cncelled}</TableCell>
                                                </TableRow>
                                            ))
                                        }
                                    </TableBody>
                                </Table>
                            </Card>
                            <Pagination totalData={POCData.length} page={page} setPage={setPages} limit={limit} />
                        </div>
                    )
            }

        </div>
  )
}
