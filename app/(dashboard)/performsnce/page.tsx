"use client"
import { get30daysData } from '@/lib/actions'
import React, { useEffect, useState } from 'react'
import DataTable from './_components/DataTable'

export default function page() {

    const [getData, setGetData] = useState<ThirtyDaysType[]>([])

    const fetchData = async()=>{
        const resp = await get30daysData()
        setGetData(resp)
    }
    useEffect(()=>{
        fetchData()
    }, [])

    const riyaData = getData?.filter((item)=> item.poc === "RIYA");
    const faizData = getData?.filter((item)=> item.poc === "FAIZ");
    const laxmanData = getData?.filter((item)=> item.poc === "LAXMAN");
    const aliData = getData?.filter((item)=> item.poc === "ALI");
    const rinkiData = getData?.filter((item)=> item.poc === "RINKI");
    const princeData = getData?.filter((item)=> item.poc === "PRINCE");
    const rahulData = getData?.filter((item)=> item.poc === "RAHUL");
    const reechaData = getData?.filter((item)=> item.poc === "REECHA");
    const rajniData = getData?.filter((item)=> item.poc === "RAJNI");
    const deepikaData = getData?.filter((item)=> item.poc === "DEEPIKA");
    const mansikaData = getData?.filter((item)=> item.poc === "MANSI");
    const adityakaData = getData?.filter((item)=> item.poc === "ADITYA");
    const atharkaData = getData?.filter((item)=> item.poc === "ATHAR");

  const riyaDataDA = riyaData.reduce((acc, item)=>acc +item.amount, 0);
  const faizDataDA = faizData.reduce((acc, item)=>acc +item.amount, 0);
  const laxmanDataDA = laxmanData.reduce((acc, item)=>acc +item.amount, 0);
  const aliDataDA = aliData.reduce((acc, item)=>acc +item.amount, 0);
  const rinkiDataDA = rinkiData.reduce((acc, item)=>acc +item.amount, 0);
  const princeDataDA = princeData.reduce((acc, item)=>acc +item.amount, 0);
  const rahulDataDA = rahulData.reduce((acc, item)=>acc +item.amount, 0);
  const reechaDataDA = reechaData.reduce((acc, item)=>acc +item.amount, 0);
  const rajniDataDA = rajniData.reduce((acc, item)=>acc +item.amount, 0);
  const deepikaDataDA = deepikaData.reduce((acc, item)=>acc +item.amount, 0);
  const mansikaDataDA = mansikaData.reduce((acc, item)=>acc +item.amount, 0);
  const adityakaDataDA = adityakaData.reduce((acc, item)=>acc +item.amount, 0);
  const atharkaDataDA = atharkaData.reduce((acc, item)=>acc +item.amount, 0);


  function totaltRevenuAverage(array:any) {
      let sum = 0
      array?.forEach((num:any)=> sum = sum + num)
  
      let avg = sum/array.length
      return avg;
    }

    const riyaDataAV = totaltRevenuAverage(riyaData.map((item)=> item.amount));
    const faizDataAAv = totaltRevenuAverage(faizData.map((item)=> item.amount));
    const laxmanDataAv = totaltRevenuAverage(laxmanData.map((item)=> item.amount));
    const aliDataAv = totaltRevenuAverage(aliData.map((item)=> item.amount));
    const rinkiDataAv = totaltRevenuAverage(rinkiData.map((item)=> item.amount));
    const princeDataAv = totaltRevenuAverage(princeData.map((item)=> item.amount));
    const rahulDataAv = totaltRevenuAverage(rahulData.map((item)=> item.amount));
    const reechaDataAv = totaltRevenuAverage(reechaData.map((item)=> item.amount));
    const rajniDataAv = totaltRevenuAverage(rajniData.map((item)=> item.amount));
    const deepikaDataAv = totaltRevenuAverage(deepikaData.map((item)=> item.amount));
    const mansikaDataAv = totaltRevenuAverage(mansikaData.map((item)=> item.amount));
    const adityakaDataAv = totaltRevenuAverage(adityakaData.map((item)=> item.amount));
    const atharkaDataAv = totaltRevenuAverage(atharkaData.map((item)=> item.amount));

    

    const riyaDataC = riyaData?.filter((item)=> item.trackingStatus === "RTO Delivered");
    const faizDataC = faizData?.filter((item)=> item.trackingStatus === "RTO Delivered");
    const laxmanDataC = laxmanData?.filter((item)=> item.trackingStatus === "RTO Delivered");
    const aliDataC = aliData?.filter((item)=> item.trackingStatus === "RTO Delivered");
    const rinkiDataC = rinkiData?.filter((item)=> item.trackingStatus === "RTO Delivered");
    const princeDataC = princeData?.filter((item)=> item.trackingStatus === "RTO Delivered");
    const rahulDataC = rahulData?.filter((item)=> item.trackingStatus === "RTO Delivered");
    const reechaDataC = reechaData?.filter((item)=> item.trackingStatus === "RTO Delivered");
    const rajniDataC = rajniData?.filter((item)=> item.trackingStatus === "RTO Delivered");
    const deepikaDataC = deepikaData?.filter((item)=> item.trackingStatus === "RTO Delivered");
    const mansikaDataC = mansikaData?.filter((item)=> item.trackingStatus === "RTO Delivered");
    const adityakaDataC = adityakaData?.filter((item)=> item.trackingStatus === "RTO Delivered");
    const atharkaDataC = atharkaData?.filter((item)=> item.trackingStatus === "RTO Delivered");

    const riyaDataP = riyaData?.filter((item)=> item.predad === "PREPAID");
    const faizDataP = faizData?.filter((item)=> item.predad === "PREPAID");
    const laxmanDataP = laxmanData?.filter((item)=> item.predad === "PREPAID");
    const aliDataP = aliData?.filter((item)=> item.predad === "PREPAID");
    const rinkiDataP = rinkiData?.filter((item)=> item.predad === "PREPAID");
    const princeDataP = princeData?.filter((item)=> item.predad === "PREPAID");
    const rahulDataP = rahulData?.filter((item)=> item.predad === "PREPAID");
    const reechaDataP = reechaData?.filter((item)=> item.predad === "PREPAID");
    const rajniDataP = rajniData?.filter((item)=> item.predad === "PREPAID");
    const deepikaDataP = deepikaData?.filter((item)=> item.predad === "PREPAID");
    const mansikaDataP = mansikaData?.filter((item)=> item.predad === "PREPAID");
    const adityakaDataP = adityakaData?.filter((item)=> item.predad === "PREPAID");
    const atharkaDataP = atharkaData?.filter((item)=> item.predad === "PREPAID");

    const POCData = [
        {name: "RIYA", totalOrder: riyaData?.length, totaltRevenu: riyaDataDA, totaltRevenuAv: rinkiDataAv,  RTOStats:riyaDataC.length, pripaid:riyaDataP.length },
        {name: "FAIZ", totalOrder: faizData?.length, totaltRevenu:faizDataDA, totaltRevenuAv: faizDataAAv, RTOStats:faizDataC.length, pripaid:faizDataP.length},
        {name: "LAXMAN", totalOrder: laxmanData?.length, totaltRevenu:laxmanDataDA, totaltRevenuAv: laxmanDataAv, RTOStats:laxmanDataC.length, pripaid:laxmanDataP.length},
        {name: "ALI", totalOrder: aliData?.length, totaltRevenu:aliDataDA, totaltRevenuAv: aliDataAv, RTOStats:aliDataC.length, pripaid:aliDataP.length},
        {name: "RINKI", totalOrder: rinkiData?.length, totaltRevenu:rinkiDataDA, totaltRevenuAv: rinkiDataAv, RTOStats:rinkiDataC.length, pripaid:rinkiDataP.length},
        {name: "PRINCE", totalOrder: princeData?.length, totaltRevenu:princeDataDA, totaltRevenuAv: princeDataAv, RTOStats:princeDataC.length, pripaid:princeDataP.length},
        {name: "RAHUL", totalOrder: rahulData?.length, totaltRevenu:rahulDataDA, totaltRevenuAv: rahulDataAv, RTOStats:rahulDataC.length, pripaid:rahulDataP.length},
        // {name: "REECHA", totalOrder: reechaData?.length, totaltRevenu:reechaDataDA, totaltRevenuAv: reechaDataAv},
        {name: "RAJNI", totalOrder: rajniData?.length, totaltRevenu: rajniDataDA, totaltRevenuAv: rajniDataAv, RTOStats:rajniDataC.length, pripaid:rajniDataP.length},
        // {name: "DEEPIKA", totalOrder: deepikaData?.length, totaltRevenu:deepikaDataDA, totaltRevenuAv: deepikaDataAv},
        {name: "MANSI", totalOrder: mansikaData?.length, totaltRevenu:mansikaDataDA, totaltRevenuAv: mansikaDataAv, RTOStats:mansikaDataC.length, pripaid:mansikaDataP.length},
        {name: "ADITYA", totalOrder: adityakaData?.length, totaltRevenu:adityakaDataDA, totaltRevenuAv: adityakaDataAv, RTOStats:adityakaDataC.length, pripaid:adityakaDataP.length},
        {name: "ATHAR", totalOrder: atharkaData?.length, totaltRevenu:atharkaDataDA, totaltRevenuAv: atharkaDataAv, RTOStats:atharkaDataC.length, pripaid:atharkaDataP.length},
    ]
  return (
    <div className='container flex flex-col flex-1 gap-10 mx-auto py-10'>
      <DataTable getData={POCData} />
    </div>
  )
}
