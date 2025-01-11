"use client";

import DashboardSideBar from "@/app/layouts/SideBar/DashboardSideBar";
import MobileSideBar from "@/app/layouts/SideBar/MobileSideBar";
// import { useAppContext } from "@/app/layouts/themes/ThemesProviders";
import { useEffect, useMemo, useState } from "react";
import Cards from "./Cards";
import SalesCharts from "./SalesCharts";


export default function Page({data}:{data: DashboardDataTypes[]}) {
//   const data = useAppContext();

  const [filterData, setFilterData] = useState<DashboardDataTypes[]>();

  useEffect(()=>{
    setFilterData(data)
  }, [data])

  const codData = filterData?.filter((itme) => itme.orderType === "COD");
  const prepaidData = filterData?.filter((itme) => itme.orderType === "Prepaid");
  const deliveredData = filterData?.filter(
    (itme) => itme.delivered === "Delivered"
  );
  const rtoDeliveredData = filterData?.filter(
    (itme) => itme.rtoDelivered === "RTO Delivered"
  );

  const filterDataCancelled = filterData?.filter(
    (item) => item.cancelled !== "Cancelled"
  );

  const filterDataAmount = filterDataCancelled?.filter(
    (item) => item.totalAmount > 1
  );

    const total = useMemo(
      () => ({
        totalAmount: filterDataAmount?.reduce(
          (acc, curr) => acc + curr.totalAmount,
          0
        )
      }),
      [filterData, setFilterData]
    );

  return (
    <div className="flex w-full items-center justify-center h-screen">
      <div className="flex items-center">
        <DashboardSideBar
          allData={data}
          filterData={filterData}
          setFilterData={setFilterData}
        />

        <div className="h-screen overflow-auto scrollbar-hide scroll-smooth">
          <div className="flex flex-col gap-5 flex-1 py-5 m-5 pb-10 md:mt-3">
          <div className="container mx-auto flex flex-col gap-3">
            <MobileSideBar
              allData={data}
              filterData={filterData}
              setFilterData={setFilterData}
            />
            <Cards
              totalOrders={filterData?.length}
              codData={codData?.length}
              prepaidData={prepaidData?.length}
              deliveredData={deliveredData?.length}
              rtoDeliveredData={rtoDeliveredData?.length}
              totalRevenue={total.totalAmount}
            />
            <SalesCharts getAllData={filterData} />
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
