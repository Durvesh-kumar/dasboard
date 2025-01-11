"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import IndianCurrency from "@/helpers/Currency";

export default function Cards({
  totalOrders,
  codData,
  prepaidData,
  rtoDeliveredData,
  deliveredData,
  totalRevenue,
}: {
  totalOrders?: number;
  codData?: number;
  prepaidData?: number;
  rtoDeliveredData?: number;
  deliveredData?: number;
  totalRevenue?: number;
}) {
  return (
    <div className="flex flex-col flex-1 gap-5 w-full">
      <div className=" flex max-lg:flex-col w-full gap-5 justify-between items-center ">
        <Card className="w-96 max-lg:w-full">
          <CardHeader>
            <CardTitle className="flex items-center justify-center">
              TOTAL ORDERS
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center text-6xl">{totalOrders}</p>
          </CardContent>
        </Card>

        <Card className="w-96 max-lg:w-full">
          <CardHeader>
            <CardTitle className="flex items-center justify-center">
              COD
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center text-6xl">{codData}</p>
          </CardContent>
        </Card>

        <Card className="w-96 max-lg:w-full">
          <CardHeader>
            <CardTitle className="flex items-center justify-center">
              PREPAID
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center text-6xl">{prepaidData}</p>
          </CardContent>
        </Card>
      </div>

      <div className="flex max-lg:flex-col items-center justify-between gap-10">
        <Card className="w-1/2 max-lg:w-full">
          <CardHeader>
            <CardTitle className="flex items-center justify-center">
              DELIVERED
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center text-6xl">{deliveredData}</p>
          </CardContent>
        </Card>

        <Card className="w-1/2 max-lg:w-full">
          <CardHeader>
            <CardTitle className="flex items-center justify-center">
              RTO DELIVERED
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center text-6xl">{rtoDeliveredData}</p>
          </CardContent>
        </Card>
      </div>
      <div>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-center">
              ORDER VALUE
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center text-6xl">
              {IndianCurrency(totalRevenue)}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
