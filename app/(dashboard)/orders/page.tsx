import Cards from "./_components/Cards";
import { Chart } from "./_components/Chart";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { getT1Orders } from "@/lib/actions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartLoader } from "@/app/layouts/Loders/ChartLoader";
import { Suspense } from "react";

export default function page() {
  return <Suspense fallback={SuspenceResp()}>{featchData()}</Suspense>;
}

async function featchData() {
  const getData = await getT1Orders();
  return (
    <div className="flex flex-col gap-10 flex-1 py-10 m-5">
      <Cards getAverageData={getData} />
      <div className="flex justify-end gap-6">
        <Link href={"orders/delivered"} className={buttonVariants({})}>
          DELIVERED T-15 TO T-45
        </Link>
        <Link href={"orders/orderList"} className={buttonVariants({})}>
          All Orders
        </Link>
      </div>
      <Chart getData={getData} />
    </div>
  );
}

function SuspenceResp() {
  return (
    <div className="flex container mx-auto flex-col gap-10 flex-1 py-10 m-5">
      <div className="flex items-center gap-10 w-full max-md:flex-col">
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-center">7 DAYS ORDER AVERAGE</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center text-6xl">0</p>
          </CardContent>
        </Card>

        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-center">30 DAYS OREDR AVERAGE</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center text-6xl">0</p>
          </CardContent>
        </Card>

        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-center text-nowrap">
              LAST MONTH ORDER AVERAGE
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center text-6xl">0</p>
          </CardContent>
        </Card>
      </div>
      <ChartLoader title="PREVIOUS DAY ORDERS" label="Orders" />
    </div>
  );
}
