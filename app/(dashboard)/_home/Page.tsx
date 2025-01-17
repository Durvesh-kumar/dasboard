"use client";

import DashboardSideBar from "@/app/layouts/SideBar/DashboardSideBar";
import MobileSideBar from "@/app/layouts/SideBar/MobileSideBar";
import { useEffect, useMemo, useState } from "react";
import Cards from "./Cards";
import SalesCharts from "./SalesCharts";


export default function DashboardPage({data}:{data:DashboardDataTypes[]}) {

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
      <div className="flex items-center w-full">
        <DashboardSideBar
          allData={data}
          filterData={filterData}
          setFilterData={setFilterData}
        />

        <div className="h-screen w-full overflow-auto scrollbar-hide scroll-smooth">
          <div className="flex flex-col gap-5 flex-1 m-5 pb-10">
          <div className="flex flex-col gap-3 w-full">
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
