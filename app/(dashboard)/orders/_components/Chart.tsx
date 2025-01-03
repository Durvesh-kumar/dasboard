"use client"
import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export function Chart({getData}:{getData?:T1OrderType[]}) {

  const data = getData?.filter((item)=> item.poc);

  const filterData:any = data?.map((item)=> item.poc).filter((value, index, itme)=> itme.indexOf(value) == index)

  const dataArray = []

  if(data){
    for(var i of filterData){
      const data = getData?.filter((item)=> item.poc === i).length;
  
      dataArray.push({
        totalOrder:data,
        name:i
      })
    }
  }

  
    const chartConfig = {
      totalOrder: {
          label: "Orders",
          color: "hsl(var(--chart-1))",
        },
      } satisfies ChartConfig

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-center">PREVIOUS DAY ORDERS</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-96 w-full">
          <BarChart
            accessibilityLayer
            data={dataArray}
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
