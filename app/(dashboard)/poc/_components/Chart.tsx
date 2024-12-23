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

type POCDataType ={
    name: string,
    totalOrder: number
}
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

      const riyaData = filtereData?.filter((item)=> item.poc === "RIYA");
      const faizData = filtereData?.filter((item)=> item.poc === "FAIZ");
      const laxmanData = filtereData?.filter((item)=> item.poc === "LAXMAN");
      const aliData = filtereData?.filter((item)=> item.poc === "ALI");
      const rinkiData = filtereData?.filter((item)=> item.poc === "RINKI");
      const princeData = filtereData?.filter((item)=> item.poc === "PRINCE");
      const rahulData = filtereData?.filter((item)=> item.poc === "RAHUL");
      const fezData = filtereData?.filter((item)=> item.poc === "FEZ");
      const bhawnaData = filtereData?.filter((item)=> item.poc === "BHAWNA");
      const nehaData = filtereData?.filter((item)=> item.poc === "NEHA");
      const reechaData = filtereData?.filter((item)=> item.poc === "REECHA");
      const rajniData = filtereData?.filter((item)=> item.poc === "RAJNI");
      const rajivData = filtereData?.filter((item)=> item.poc === "RAJIV");
      const deepikaData = filtereData?.filter((item)=> item.poc === "DEEPIKA");
      const mansikaData = filtereData?.filter((item)=> item.poc === "MANSI");
      const adityakaData = filtereData?.filter((item)=> item.poc === "ADITYA");
      const atharkaData = filtereData?.filter((item)=> item.poc === "ATHAR");
  
      const POCData = [
          {name: "RIYA", totalOrder: riyaData?.length },
          {name: "FAIZ", totalOrder: faizData?.length},
          {name: "LAXMAN", totalOrder: laxmanData?.length},
          {name: "ALI", totalOrder: aliData?.length},
          {name: "RINKI", totalOrder: rinkiData?.length},
          {name: "PRINCE", totalOrder: princeData?.length},
          {name: "RAHUL", totalOrder: rahulData?.length},
          {name: "FEZ", totalOrder: fezData?.length},
          {name: "BHAWNA", totalOrder: bhawnaData?.length},
          {name: "NEHA", totalOrder: nehaData?.length},
          {name: "REECHA", totalOrder: reechaData?.length},
          {name: "RAJNI", totalOrder: rajniData?.length},
          {name: "RAJIV", totalOrder: rajivData?.length},
          {name: "DEEPIKA", totalOrder: deepikaData?.length},
          {name: "MANSI", totalOrder: mansikaData?.length},
          {name: "ADITYA", totalOrder: adityakaData?.length},
          {name: "ATHAR", totalOrder: atharkaData?.length},
      ]

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-center">POC DATA</CardTitle>
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
        <ChartContainer config={chartConfig} className="h-72 w-full">
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
              tickFormatter={(value) => value.slice(0, 10)}
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
