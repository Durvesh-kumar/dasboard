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
import { getSevenDaysData } from "@/lib/actions"

export function Chart({getData}:{getData?:T1OrderType[]}) {

    const riyaData = getData?.filter((item)=> item.poc === "RIYA");
    const faizData = getData?.filter((item)=> item.poc === "FAIZ");
    const laxmanData = getData?.filter((item)=> item.poc === "LAXMAN");
    const aliData = getData?.filter((item)=> item.poc === "ALI");
    const rinkiData = getData?.filter((item)=> item.poc === "RINKI");

    const POCData = [
        {name: "RIYA", totalOrder: riyaData?.length },
        {name: "FAIZ", totalOrder: faizData?.length},
        {name: "LAXMAN", totalOrder: laxmanData?.length},
        {name: "ALI", totalOrder: aliData?.length},
        {name: "RINKI", totalOrder: rinkiData?.length}
    ]

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
