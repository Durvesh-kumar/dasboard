import React, { Suspense } from "react";
import { Chart } from "./_components/Chart";
import CustomerHandles from "./customerRetention/_components/CustomerHandles";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { getDashboardPageData, getMdtData } from "@/lib/actions";
import { ChartLoader } from "@/app/layouts/Loders/ChartLoader";
import TableLoders from "@/app/layouts/Loders/TableLoders";

export default function page() {
  return (
    <>
      <Suspense
        fallback={
          <div className=" container flex flex-col flex-1 gap-10 mx-auto py-10">
            <div className="flex items-center gap-3 justify-end">
              <Link className={buttonVariants()} href={"/poc/average"}>
                7 Days Vs Last month average
              </Link>
              <Link
                className={buttonVariants()}
                href={"/poc/customerRetention"}
              >
                CUSTOMER RETENTION
              </Link>
            </div>
            <ChartLoader title="POC DATA" label="Poc" />
          </div>
        }
      >
        {fetchData()}
      </Suspense>
    </>
  );
}
// }

async function fetchData() {
  const data = await getDashboardPageData();
  return (
    <div className="flex flex-col flex-1 gap-10 m-5">
      <div className="flex items-center justify-end gap-3">
        <Link className={buttonVariants()} href={"/poc/average"}>
          7 Days Vs Last month average
        </Link>
        <Link className={buttonVariants()} href={"/poc/customerRetention"}>
          CUSTOMER RETENTION
        </Link>
      </div>
      <Chart data={data} />
    </div>
  );
}
