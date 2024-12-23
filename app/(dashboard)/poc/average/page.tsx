"use client"
import React, { useEffect, useState } from "react";
import TableData from "./_components/TableData";
import { getLastMonthData, getSevenDaysData } from "@/lib/actions";

export default function page() {
  const [getDaysData, setGetDaysData] = useState<SevenDaysType[]>([]);
  const [getMonthData, setGetMonthData] = useState<MonthDataType[]>([]);

  const fetchData = async () => {
    const daysData = await getSevenDaysData();
    const monthData = await getLastMonthData();
    setGetDaysData(daysData);
    setGetMonthData(monthData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const riyaDataD = getDaysData?.filter((item) => item.poc === "RIYA");
  const faizDataD = getDaysData?.filter((item) => item.poc === "FAIZ");
  const laxmanDataD = getDaysData?.filter((item) => item.poc === "LAXMAN");
  const aliDataD = getDaysData?.filter((item) => item.poc === "ALI");
  const rinkiDataD = getDaysData?.filter((item) => item.poc === "RINKI");
  const princeDataD = getDaysData?.filter((item) => item.poc === "PRINCE");
  const rahulDataD = getDaysData?.filter((item) => item.poc === "RAHUL");
  const fezDataD = getDaysData?.filter((item) => item.poc === "FEZ");
  const bhawnaDataD = getDaysData?.filter((item) => item.poc === "BHAWNA");
  const nehaDataD = getDaysData?.filter((item) => item.poc === "NEHA");
  const reechaDataD = getDaysData?.filter((item) => item.poc === "REECHA");
  const rajniDataD = getDaysData?.filter((item) => item.poc === "RAJNI");
  const rajivDataD = getDaysData?.filter((item) => item.poc === "RAJIV");
  const deepikaDataD = getDaysData?.filter((item) => item.poc === "DEEPIKA");
  const mansikaDataD = getDaysData?.filter((item) => item.poc === "MANSI");
  const adityakaDataD = getDaysData?.filter((item) => item.poc === "ADITYA");
  const atharkaDataD = getDaysData?.filter((item) => item.poc === "ATHAR");

  function average(array:any) {
    let sum = 0
    array?.forEach((num:any)=> sum = sum + num)

    let avg = sum/array.length
    return avg;
  }

  const riyaData = getMonthData?.filter((item) => item.poc === "RIYA");
  const faizData = getMonthData?.filter((item) => item.poc === "FAIZ");
  const laxmanData = getMonthData?.filter((item) => item.poc === "LAXMAN");
  const aliData = getMonthData?.filter((item) => item.poc === "ALI");
  const rinkiData = getMonthData?.filter((item) => item.poc === "RINKI");
  const princeData = getMonthData?.filter((item) => item.poc === "PRINCE");
  const rahulData = getMonthData?.filter((item) => item.poc === "RAHUL");
  const fezData = getMonthData?.filter((item) => item.poc === "FEZ");
  const bhawnaData = getMonthData?.filter((item) => item.poc === "BHAWNA");
  const nehaData = getMonthData?.filter((item) => item.poc === "NEHA");
  const reechaData = getMonthData?.filter((item) => item.poc === "REECHA");
  const rajniData = getMonthData?.filter((item) => item.poc === "RAJNI");
  const rajivData = getMonthData?.filter((item) => item.poc === "RAJIV");
  const deepikaData = getMonthData?.filter((item) => item.poc === "DEEPIKA");
  const mansikaData = getMonthData?.filter((item) => item.poc === "MANSI");
  const adityakaData = getMonthData?.filter((item) => item.poc === "ADITYA");
  const atharkaData = getMonthData?.filter((item) => item.poc === "ATHAR");

  const riyaDataDA = average(riyaDataD.map((item)=>item.order));
  const faizDataDA = average(faizDataD.map((item)=>item.order));
  const laxmanDataDA = average(laxmanDataD.map((item)=>item.order));
  const aliDataDA = average(aliDataD.map((item)=>item.order));
  const rinkiDataDA = average(rinkiDataD.map((item)=>item.order));
  const princeDataDA = average(princeDataD.map((item)=>item.order));
  const rahulDataDA = average(rahulDataD.map((item)=>item.order));
  const reechaDataDA = average(reechaDataD.map((item)=>item.order));
  const rajniDataDA = average(rajniDataD.map((item)=>item.order));
  const deepikaDataDA = average(deepikaDataD.map((item)=>item.order));
  const mansikaDataDA = average(mansikaDataD.map((item)=>item.order));
  const adityakaDataDA = average(adityakaDataD.map((item)=>item.order));
  const atharkaDataDA = average(atharkaDataD.map((item)=>item.order));

  const POCData = [
    {
      name: "RIYA",
      totalOrderM: riyaData?.length / 30,
      totalOrderD: riyaDataDA,
    },
    {
      name: "FAIZ",
      totalOrderM: faizData?.length / 30,
      totalOrderD: faizDataDA,
    },
    {
      name: "LAXMAN",
      totalOrderM: laxmanData?.length / 30,
      totalOrderD: laxmanDataDA,
    },
    {
      name: "ALI",
      totalOrderM: aliData?.length / 30,
      totalOrderD: aliDataDA,
    },
    {
      name: "RINKI",
      totalOrderM: rinkiData?.length / 30,
      totalOrderD: rinkiDataDA,
    },
    {
      name: "PRINCE",
      totalOrderM: princeData?.length / 30,
      totalOrderD: princeDataDA,
    },
    {
      name: "RAHUL",
      totalOrderM: rahulData?.length / 30,
      totalOrderD: rahulDataDA,
    },
    {
      name: "REECHA",
      totalOrderM: reechaData?.length / 30,
      totalOrderD: reechaDataDA,
    },
    {
      name: "RAJNI",
      totalOrderM: rajniData?.length / 30,
      totalOrderD: rajniDataDA,
    },
    {
      name: "DEEPIKA",
      totalOrderM: deepikaData?.length / 30,
      totalOrderD: deepikaDataDA,
    },
    {
      name: "MANSI",
      totalOrderM: mansikaData?.length / 30,
      totalOrderD: mansikaDataDA,
    },
    {
      name: "ADITYA",
      totalOrderM: adityakaData?.length / 30,
      totalOrderD: adityakaDataDA,
    },
    {
      name: "ATHAR",
      totalOrderM: atharkaData?.length / 30,
      totalOrderD: atharkaDataDA,
    },
  ];

  return (
    <div className=" container mx-auto mt-10">
      <TableData getData={POCData} />
    </div>
  );
}
