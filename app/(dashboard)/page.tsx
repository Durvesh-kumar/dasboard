"use client";
import React, { useEffect, useState } from "react";
import Cards from "./_home/Cards";
import SalesCharts from "./_home/SalesCharts";
import FilterItems from "../layouts/filterItems";
import { useAppContext } from "./layout";
import { getDashboardPageData } from "@/lib/actions";

export default function Home() {

  const data = useAppContext()
  const [getData, setGetData] = useState<DashboardDataTypes[]>([]);
  const [getAllData, setGetAllData] = useState<DashboardDataTypes[]>([]);


  useEffect(() => {
    fetchData();
  }, [0]);

  const fetchData = async () => {
    const res = await getDashboardPageData();
    setGetData(res);
    setGetAllData(res);
  };

  const codData = getData.filter(
    (itme) => itme.orderType === "COD"
  );
  const prepaidData = getData.filter(
    (itme) => itme.orderType === "Prepaid"
  );
  const deliveredData = getData.filter(
    (itme) => itme.delivered === "Delivered"
  );
  const rtoDeliveredData = getData.filter(
    (itme) => itme.rtoDelivered === "RTO Delivered"
  );
  const totalRevenue = getData?.reduce(
    (acc, item) => ( acc + item.totalAmount), 0);



  return (
    <div className="flex w-full">

      <FilterItems 
         getAllData={getAllData}
         setGetData={setGetData}
         getData={getData}
         setGetAllData={setGetAllData} />
      <div className="flex flex-col flex-1 py-10 m-5 pb-10">
      
        <Cards
          totalOrders={getData.length}
          codData={codData.length}
          prepaidData={prepaidData.length}
          deliveredData={deliveredData.length}
          rtoDeliveredData={rtoDeliveredData.length}
          totalRevenue={totalRevenue}
        />
        <SalesCharts getAllData={data} />
      </div>
    </div>
  );
}
