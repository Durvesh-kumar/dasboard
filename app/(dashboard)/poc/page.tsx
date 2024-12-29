import React, { Suspense } from "react";
import { Chart } from "./_components/Chart";
import CustomerHandles from "./_components/CustomerHandles";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { getMdtData } from "@/lib/actions";
import { ChartLoader } from "@/app/layouts/Loders/ChartLoader";
import TableLoders from "@/app/layouts/Loders/TableLoders";

export default function page() {
  return (
    <>
    <Suspense
      fallback={
        <div className=" container flex flex-col flex-1 gap-10 mx-auto py-10">
          <ChartLoader title="POC DATA" label="Poc" />
          <div className="flex items-center justify-end">
            <Link className={buttonVariants()} href={""}>
              7 Days Vs Last month average
            </Link>
          </div>

          <TableLoders title="CUSTOMER RETENTION" />
        </div>
      }
    >
      {
        fetchData()
      }
    </Suspense>
    </>
  );
}
// }

async function fetchData () {
  const data: DashboardDataTypes[] = await getMdtData();
  const dataFilter = data?.filter((item) => item.poc);

  const filterDatas: any = dataFilter
    ?.map((item) => item.poc)
    .filter((value, index, itme) => itme.indexOf(value) == index);

  const dataArray = [];

  if (data) {
    for (var i of filterDatas) {
      const totalOrders = data.filter((item) => item.poc === i).length;
      const filterData = data.filter((item) => item.poc === i);
      const cancecllOrders = filterData.filter(
        (item) => item.cancelled === "Cancelled"
      ).length;

      dataArray.push({
        totalOrder: totalOrders,
        name: i,
        cncelled: cancecllOrders,
        exiting: totalOrders - cancecllOrders,
      });
    }
  }
  return (
    <div className=" container flex flex-col flex-1 gap-10 mx-auto py-10">
      <Chart />
      <div className="flex items-center justify-end">
        <Link className={buttonVariants()} href={"/poc/average"}>
          7 Days Vs Last month average
        </Link>
      </div>

      <CustomerHandles POCData={dataArray} />
    </div>
  );
}