"use client"
import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function Chart({getData}:{getData:DashboardDataTypes[]}) {



    const chartConfig = {
        totalOrder: {
          label: "Orders",
          color: "hsl(var(--chart-4))",
        },
      } satisfies ChartConfig


      const [selectedFilter, setSelectedFilter] = useState<string>("1M");
      
        


      const filter = ["7D", "1M", "3M", "6M", "1Y", "All"];

      function filterData(getData:DashboardDataTypes[], filter: string) {
        const now = new Date();
        let startDate;
    
        switch (filter) {
          case "7D":
            startDate = new Date(now.setDate(now.getDate() - 7));
            break;
    
          case "1M":
            startDate = new Date(now.setMonth(now.getMonth() - 1));
            break;
    
          case "3M":
            startDate = new Date(now.setMonth(now.getMonth() - 3));
            break;
    
          case "6M":
            startDate = new Date(now.setMonth(now.getMonth() - 6));
            break;
    
          case "1Y":
            startDate = new Date(now.setFullYear(now.getFullYear() - 1));
            break;
    
          case "All":
            startDate = new Date(0);
            break;
    
          default:
            startDate = new Date(0);
            break;
        }
        return getData
          .filter((item) => new Date(item.date) >= startDate)
          .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
      }

      const filtereData = filterData(getData, selectedFilter);

      const riyaData = filtereData?.filter((item)=> item.state === "TELANGANA");
      const faizData = filtereData?.filter((item)=> item.state === "MAHARASHTRA");
      const laxmanData = filtereData?.filter((item)=> item.state === "HARYANA");
      const aliData = filtereData?.filter((item)=> item.state === "WEST BENGAL");
      const rinkiData = filtereData?.filter((item)=> item.state === "RAJASTHAN");
      const princeData = filtereData?.filter((item)=> item.state === "KARNATAKA");
      const rahulData = filtereData?.filter((item)=> item.state === "KERALA");
      const fezData = filtereData?.filter((item)=> item.state === "TAMIL NADU");
      const bhawnaData = filtereData?.filter((item)=> item.state === "ODISHA");
      const nehaData = filtereData?.filter((item)=> item.state === "UTTAR PRADESH");
      const reechaData = filtereData?.filter((item)=> item.state === "DELHI");
      const rajniData = filtereData?.filter((item)=> item.state === "JAMMU & KASHMIR");
      const rajivData = filtereData?.filter((item)=> item.state === "BIHAR");
      const deepikaData = filtereData?.filter((item)=> item.state === "GOA");
      const mansikaData = filtereData?.filter((item)=> item.state === "CHANDIGARH");
      const adityakaData = filtereData?.filter((item)=> item.state === "GUJARAT");
      const atharkaData = filtereData?.filter((item)=> item.state === "MANIPUR");
      const meghalaya = filtereData?.filter((item)=> item.state === "MEGHALAYA");
      const mizorm = filtereData?.filter((item)=> item.state === "MIZORAM");
      const Sikkim = filtereData?.filter((item)=> item.state === "SIKKIM");
      const Jharkhand = filtereData?.filter((item)=> item.state === "JHARKHAND");
      const Chhattisgarh = filtereData?.filter((item)=> item.state === "CHHATTISGARH");
      const Assam = filtereData?.filter((item)=> item.state === "ASSAM");
      const himachalPradesh = filtereData?.filter((item)=> item.state === "HIMACHAL PRADESH");
      const Odisha = filtereData?.filter((item)=> item.state === "ODISHA");
      const Tripura = filtereData?.filter((item)=> item.state === "TRIPURA");
      const andhraPradesh = filtereData?.filter((item)=> item.state === "ANDHRA PRADESH");
      const ArunachalPradesh = filtereData?.filter((item)=> item.state === "ARUNACHAL PRADESH");
  
      const POCData = [
          {name: "TELANGANA", totalOrder: riyaData?.length },
          {name: "MAHARASHTRA", totalOrder: faizData?.length},
          {name: "HARYANA", totalOrder: laxmanData?.length},
          {name: "WEST BENGAL", totalOrder: aliData?.length},
          {name: "RAJASTHAN", totalOrder: rinkiData?.length},
          {name: "KARNATAKA", totalOrder: princeData?.length},
          {name: "KERALA", totalOrder: rahulData?.length},
          {name: "TAMIL NADU", totalOrder: fezData?.length},
          {name: "ODISHA", totalOrder: bhawnaData?.length},
          {name: "UTTAR PRADESH", totalOrder: nehaData?.length},
          {name: "DELHI", totalOrder: reechaData?.length},
          {name: "JAMMU & KASHMIR", totalOrder: rajniData?.length},
          {name: "BIHAR", totalOrder: rajivData?.length},
          {name: "GOA", totalOrder: deepikaData?.length},
          {name: "CHANDIGARH", totalOrder: mansikaData?.length},
          {name: "GUJARAT", totalOrder: adityakaData?.length},
          {name: "MANIPUR", totalOrder: atharkaData?.length},
          {name: "MEGHALAYA", totalOrder: meghalaya?.length},
          {name: "MIZORAM", totalOrder: mizorm?.length},
          {name: "SIKKIM", totalOrder: Sikkim?.length},
          {name: "JHARKHAND", totalOrder: Jharkhand?.length},
          {name: "CHHATTISGARH", totalOrder: Chhattisgarh?.length},
          {name: "ASSAM", totalOrder: Assam?.length},
          {name: "Himachal Pradesh", totalOrder: himachalPradesh?.length},
          {name: "ODISHA", totalOrder: Odisha?.length},
          {name: "TRIPURA", totalOrder: Tripura?.length},
          {name: "ANDHRA PRADESH", totalOrder: andhraPradesh?.length},
          {name: "ARUNACHAL PRADESH", totalOrder: ArunachalPradesh?.length},
      ]

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-center">STATE WISE DATA</CardTitle>
        <CardDescription className="flex items-center gap-3">
              {filter.map((item, index) => (
                <Button
                  key={index}
                  onClick={() => setSelectedFilter(item)}
                  variant={selectedFilter === item ? "default" : "outline"}
                >
                  {item}
                </Button>
              ))}
            </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-96 w-full">
          <BarChart
            accessibilityLayer
            data={POCData}
            margin={{
              top: 20,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="name"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 4)}
            />
            <YAxis dataKey="totalOrder" tickMargin={8} />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="totalOrder" fill="var(--color-totalOrder)" radius={8}>
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
