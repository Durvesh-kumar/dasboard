"use client";

import * as React from "react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import IndianCurrency from "@/helpers/Currency";

interface Props {
  getAllData?: DashboardDataTypes[]
}
const  SalesCharts:React.FC<Props> = ({ getAllData}) =>{
  const chartConfig = {
    views: {
      label: "Views Sales",
    },
    totalAmount: {
      label: "Total Amount",
      color: "hsl(var(--chart-1))",
    },
  } satisfies ChartConfig;

  // const filter = ["7D", "1M", "3M", "6M", "1Y", "All"];

  // function filterData(getAllData: DashboardDataTypes[], filter: string) {
  //   const now = new Date();
  //   let startDate;

  //   switch (filter) {
  //     case "7D":
  //       startDate = new Date(now.setDate(now.getDate() - 7));
  //       break;

  //     case "1M":
  //       startDate = new Date(now.setMonth(now.getMonth() - 1));
  //       break;

  //     case "3M":
  //       startDate = new Date(now.setMonth(now.getMonth() - 3));
  //       break;

  //     case "6M":
  //       startDate = new Date(now.setMonth(now.getMonth() - 6));
  //       break;

  //     case "1Y":
  //       startDate = new Date(now.setFullYear(now.getFullYear() - 1));
  //       break;

  //     case "All":
  //       startDate = new Date(0);
  //       break;

  //     default:
  //       startDate = new Date(0);
  //       break;
  //   }
  //   return getAllData
  //     .filter((item) => new Date(item.date) >= startDate)
  //     .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  // }

  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>("totalAmount");
  const [selectedFilter, setSelectedFilter] = React.useState<string>("1M");

  // const filtereData = filterData(getAllData, selectedFilter);

  const filterDataCancelled = getAllData?.filter((item)=> item.cancelled !== "Cancelled");

  const filtrItem = filterDataCancelled?.filter((item)=> item.totalAmount > 10)

  const total = React.useMemo(
    () => ({
      totalAmount: filtrItem?.reduce(
        (acc, curr) => acc + curr.totalAmount,
        0
      )
    }),
    [getAllData, selectedFilter]
  );

  return (
    <div>

     {/* Line Chart - Interactive */}
      <Card>
        <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
          <div className="flex flex-1 flex-col justify-center gap-3 px-6 py-5 sm:py-6">
            <CardTitle className="text-center mb-10">TREND LINE</CardTitle>
            {/* <CardDescription className="flex items-center gap-3">
              {getAllData?.map((item, index) => (
                <Button
                  key={index}
                  onClick={() => setSelectedFilter(item:)}
                  variant={selectedFilter === item ? "default" : "outline"}
                >
                  {item}
                </Button>
              ))}
            </CardDescription> */}
          </div>
          {/* <div className="flex">
            {["totalAmount"].map((key) => {
              const chart = key as keyof typeof chartConfig;
              return (
                <button
                  key={chart}
                  data-active={activeChart === chart}
                  className="flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                  onClick={() => setActiveChart(chart)}
                >
                  <span className="text-lg text-muted-foreground">
                    {chartConfig[chart].label}
                  </span>
                  <span className="text-lg font-bold leading-none sm:text-3xl">
                    {IndianCurrency(total[key as keyof typeof total])}
                  </span>
                </button>
              );
            })}
          </div> */}
        </CardHeader>
        <CardContent className="px-2 sm:p-6">
          <ChartContainer
            config={chartConfig}
            className="aspect-auto h-[250px] w-full"
          >
            <LineChart
              accessibilityLayer
              data={getAllData}
              margin={{
                left: 12,
                right: 12,
              }}
            >
              <ChartLegend content={<ChartLegendContent />} />
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="date"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                minTickGap={32}
                tickFormatter={(value) => {
                  const date = new Date(value);
                  return date.toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  });
                }}
              />

              <YAxis dataKey="totalAmount" axisLine={false} tickMargin={8} />
              <ChartTooltip
                content={
                  <ChartTooltipContent
                    className="w-[150px]"
                    nameKey="views"
                    labelFormatter={(value) => {
                      return new Date(value).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      });
                    }}
                  />
                }
              />
              <Line
                dataKey={activeChart}
                type="monotone"
                stroke={`var(--color-${activeChart})`}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
}
export default SalesCharts