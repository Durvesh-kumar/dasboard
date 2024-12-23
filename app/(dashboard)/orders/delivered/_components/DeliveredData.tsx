import React, { useState } from "react";
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


export default function DeliveredData({
  getData,
}: {
  getData?: Delivered15To45Type[];
}) {
  const riyaData = getData?.filter((item) => item.poc === "RIYA");
  const faizData = getData?.filter((item) => item.poc === "FAIZ");
  const laxmanData = getData?.filter((item) => item.poc === "LAXMAN");
  const aliData = getData?.filter((item) => item.poc === "ALI");
  const rinkiData = getData?.filter((item) => item.poc === "RINKI");
  const princeData = getData?.filter((item) => item.poc === "PRINCE");
  const rahulData = getData?.filter((item) => item.poc === "RAHUL");
  const fezData = getData?.filter((item) => item.poc === "FEZ");
  const bhawnaData = getData?.filter((item) => item.poc === "BHAWNA");
  const nehaData = getData?.filter((item) => item.poc === "NEHA");
  const reechaData = getData?.filter((item) => item.poc === "REECHA");
  const rajniData = getData?.filter((item) => item.poc === "RAJNI");
  const rajivData = getData?.filter((item) => item.poc === "RAJIV");
  const deepikaData = getData?.filter((item) => item.poc === "DEEPIKA");
  const mansikaData = getData?.filter((item) => item.poc === "MANSI");
  const adityakaData = getData?.filter((item) => item.poc === "ADITYA");
  const atharkaData = getData?.filter((item) => item.poc === "ATHAR");

  const riyaDataDeliv = riyaData?.filter(
    (item) => item.delivered === "Delivered"
  );
  const faizDataDeliv = faizData?.filter(
    (item) => item.delivered === "Delivered"
  );
  const laxmanDataDeliv = laxmanData?.filter(
    (item) => item.delivered === "Delivered"
  );
  const aliDataDeliv = aliData?.filter(
    (item) => item.delivered === "Delivered"
  );
  const rinkiDataDeliv = rinkiData?.filter(
    (item) => item.delivered === "Delivered"
  );
  const princeDataDeliv = princeData?.filter(
    (item) => item.delivered === "Delivered"
  );
  const rahulDataDeliv = rahulData?.filter(
    (item) => item.delivered === "Delivered"
  );
  const fezDataDeliv = faizData?.filter(
    (item) => item.delivered === "Delivered"
  );
  const bhawnaDataDeliv = bhawnaData?.filter(
    (item) => item.delivered === "Delivered"
  );
  const nehaDataDeliv = nehaData?.filter(
    (item) => item.delivered === "Delivered"
  );
  const reechaDataDeliv = reechaData?.filter(
    (item) => item.delivered === "Delivered"
  );
  const rajniDataDeliv = rajniData?.filter(
    (item) => item.delivered === "Delivered"
  );
  const rajivDataDeliv = rajivData?.filter(
    (item) => item.delivered === "Delivered"
  );
  const deepikaDataDeliv = deepikaData?.filter(
    (item) => item.delivered === "Delivered"
  );
  const mansikaDataDeliv = mansikaData?.filter(
    (item) => item.delivered === "Delivered"
  );
  const adityakaDataDeliv = adityakaData?.filter(
    (item) => item.delivered === "Delivered"
  );
  const atharkaDataDeliv = atharkaData?.filter(
    (item) => item.delivered === "Delivered"
  );

  const riyaDataDelivCod = riyaData?.filter((item) => item.cod === "COD");
  const faizDataDelivCod = faizData?.filter((item) => item.cod === "COD");
  const laxmanDataDelivCod = laxmanData?.filter((item) => item.cod === "COD");
  const aliDataDelivCod = aliData?.filter((item) => item.cod === "COD");
  const rinkiDataDelivCod = rinkiData?.filter((item) => item.cod === "COD");
  const princeDataDelivCod = princeData?.filter((item) => item.cod === "COD");
  const rahulDataDelivCod = rahulData?.filter((item) => item.cod === "COD");
  const fezDataDelivCod = faizData?.filter((item) => item.cod === "COD");
  const bhawnaDataDelivCod = bhawnaData?.filter((item) => item.cod === "COD");
  const nehaDataDelivCod = nehaData?.filter((item) => item.cod === "COD");
  const reechaDataDelivCod = reechaData?.filter((item) => item.cod === "COD");
  const rajniDataDelivCod = rajniData?.filter((item) => item.cod === "COD");
  const rajivDataDelivCod = rajivData?.filter((item) => item.cod === "COD");
  const deepikaDataDelivCod = deepikaData?.filter((item) => item.cod === "COD");
  const mansikaDataDelivCod = mansikaData?.filter((item) => item.cod === "COD");
  const adityakaDataDelivCod = adityakaData?.filter(
    (item) => item.cod === "COD"
  );
  const atharkaDataDelivCod = atharkaData?.filter((item) => item.cod === "COD");

  const riyaDataPre = riyaData?.filter((item) => item.prepaid === "PREPAID");
  const faizDataPre = faizData?.filter((item) => item.prepaid === "PREPAID");
  const laxmanDataPre = laxmanData?.filter(
    (item) => item.prepaid === "PREPAID"
  );
  const aliDataPre = aliData?.filter((item) => item.prepaid === "PREPAID");
  const rinkiDataPre = rinkiData?.filter((item) => item.prepaid === "PREPAID");
  const princeDataPre = princeData?.filter(
    (item) => item.prepaid === "PREPAID"
  );
  const rahulDataPre = rahulData?.filter((item) => item.prepaid === "PREPAID");
  const fezDataPre = faizData?.filter((item) => item.prepaid === "PREPAID");
  const bhawnaDataPre = bhawnaData?.filter(
    (item) => item.prepaid === "PREPAID"
  );
  const nehaDataPre = nehaData?.filter((item) => item.prepaid === "PREPAID");
  const reechaDataPre = reechaData?.filter(
    (item) => item.prepaid === "PREPAID"
  );
  const rajniDataPre = rajniData?.filter((item) => item.prepaid === "PREPAID");
  const rajivDataPre = rajivData?.filter((item) => item.prepaid === "PREPAID");
  const deepikaDataPre = deepikaData?.filter(
    (item) => item.prepaid === "PREPAID"
  );
  const mansikaDataPre = mansikaData?.filter(
    (item) => item.prepaid === "PREPAID"
  );
  const adityakaDataPre = adityakaData?.filter(
    (item) => item.prepaid === "PREPAID"
  );
  const atharkaDataPre = atharkaData?.filter(
    (item) => item.prepaid === "PREPAID"
  );

  const POCData = [
    {
      name: "RIYA",
      totalOrder: riyaData?.length,
      pripaid: riyaDataPre?.length,
      delivered: riyaDataDeliv?.length,
      deliveredCod: riyaDataDelivCod?.length,
    },
    {
      name: "FAIZ",
      totalOrder: faizData?.length,
      pripaid: faizDataPre?.length,
      delivered: faizDataDeliv?.length,
      deliveredCod: faizDataDelivCod?.length,
    },
    {
      name: "LAXMAN",
      totalOrder: laxmanData?.length,
      pripaid: laxmanDataPre?.length,
      delivered: laxmanDataDeliv?.length,
      deliveredCod: laxmanDataDelivCod?.length,
    },
    {
      name: "ALI",
      totalOrder: aliData?.length,
      pripaid: aliDataPre?.length,
      delivered: aliDataDeliv?.length,
      deliveredCod: aliDataDelivCod?.length,
    },
    {
      name: "RINKI",
      totalOrder: rinkiData?.length,
      pripaid: rinkiDataPre?.length,
      delivered: rinkiDataPre?.length,
      deliveredCod: rinkiDataDelivCod?.length,
    },
    {
      name: "PRINCE",
      totalOrder: princeData?.length,
      pripaid: princeDataPre?.length,
      delivered: princeDataDeliv?.length,
      deliveredCod: princeDataDelivCod?.length,
    },
    {
      name: "RAHUL",
      totalOrder: rahulData?.length,
      pripaid: rahulDataPre?.length,
      delivered: rahulDataDeliv?.length,
      deliveredCod: rahulDataDelivCod?.length,
    },
    {
      name: "FEZ",
      totalOrder: fezData?.length,
      pripaid: fezDataPre?.length,
      delivered: fezDataDeliv?.length,
      deliveredCod: fezDataDelivCod?.length,
    },
    {
      name: "BHAWNA",
      totalOrder: bhawnaData?.length,
      pripaid: bhawnaDataPre?.length,
      delivered: bhawnaDataDeliv?.length,
      deliveredCod: bhawnaDataDelivCod?.length,
    },
    {
      name: "NEHA",
      totalOrder: nehaData?.length,
      pripaid: nehaDataPre?.length,
      delivered: nehaDataDeliv?.length,
      deliveredCod: nehaDataDelivCod?.length,
    },
    {
      name: "REECHA",
      totalOrder: reechaData?.length,
      pripaid: reechaDataPre?.length,
      delivered: reechaDataDeliv?.length,
      deliveredCod: reechaDataDelivCod?.length,
    },
    {
      name: "RAJNI",
      totalOrder: rajniData?.length,
      pripaid: rajniDataPre?.length,
      delivered: rajniDataDeliv?.length,
      deliveredCod: rajniDataDelivCod?.length,
    },
    {
      name: "RAJIV",
      totalOrder: rajivData?.length,
      pripaid: rajivDataPre?.length,
      delivered: rajivDataDeliv?.length,
      deliveredCod: rajivDataDelivCod?.length,
    },
    {
      name: "DEEPIKA",
      totalOrder: deepikaData?.length,
      pripaid: deepikaDataPre?.length,
      delivered: deepikaDataDeliv?.length,
      deliveredCod: deepikaDataDelivCod?.length,
    },
    {
      name: "MANSI",
      totalOrder: mansikaData?.length,
      pripaid: mansikaDataPre?.length,
      delivered: mansikaDataDeliv?.length,
      deliveredCod: mansikaDataDelivCod?.length,
    },
    {
      name: "ADITYA",
      totalOrder: adityakaData?.length,
      pripaid: adityakaDataPre?.length,
      delivered: adityakaDataDeliv?.length,
      deliveredCod: adityakaDataDelivCod?.length,
    },
    {
      name: "ATHAR",
      totalOrder: atharkaData?.length,
      pripaid: atharkaDataPre?.length,
      delivered: atharkaDataDeliv?.length,
      deliveredCod: atharkaDataDelivCod?.length,
    },
  ];

  const [pages, setPages] = useState(1);
  const page = Number(pages);
    const limit = 10;

    const skip = (page - 1) * limit;

    const currentPage = page * limit;

    const currentPageOrders = POCData.slice(skip, currentPage);


  return (
    <div>
            {
                POCData.length === 0 ? (
                    <div className="text-xl font-bold">Order not fount</div>
                ) :
                    (
                        <div>
                            <Card>
                                <h1 className="text-center text-2xl my-5">DELIVERED ORDERS DATA T-15 TO T-45</h1>
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead className="w-[50px]">SNo.</TableHead>
                                            <TableHead>POC</TableHead>
                                            <TableHead>Orders</TableHead>
                                            <TableHead>DELIVERED</TableHead>
                                            <TableHead>COD</TableHead>
                                            <TableHead>PREPAID</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {
                                            currentPageOrders?.map((order:any, index: number) => (
                                                <TableRow key={index}>
                                                    <TableCell className="font-medium">{index + 1}</TableCell>

                                                    <TableCell>{order.name}</TableCell>
                                                    <TableCell>{order.totalOrder}</TableCell>
                                                    <TableCell>{order.delivered}</TableCell>
                                                    <TableCell>{order.deliveredCod}</TableCell>
                                                    <TableCell>{order.pripaid}</TableCell>
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
  );
}
