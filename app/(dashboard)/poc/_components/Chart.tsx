"use client";
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
  YAxis,
} from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

type POCDataType = {
  name: string;
  totalOrder: number;
};
export function Chart({data}:{data:DashboardDataTypes[]}) {

  const chartConfig = {
    totalOrder: {
      label: "Orders",
      color: "hsl(var(--chart-4))",
    },
  } satisfies ChartConfig;

  // const [selectedFilter, setSelectedFilter] = useState<string>("1M");

  // const filter = ["7D", "1M", "3M", "6M", "1Y", "All"];

  // function filterData(data?:DashboardDataTypes[], filter: string) {
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
  //   return data
  //     .filter((item) => new Date(item.date) >= startDate)
  //     .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  // }

  // const filtereData = filterData(data, selectedFilter);

  const dataFilter = data?.filter((item) => item.poc);

  const filterDatas = dataFilter
    ?.map((item) => item.poc)
    .filter((value, index, itme) => itme.indexOf(value) == index);

  const dataArray = [];

  if (data) {
    for (var i of filterDatas) {
      const datas = data?.filter((item) => item?.poc === i).length;

      dataArray.push({
        totalOrder: datas,
        name: i,
      });
    }
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-center">POC DATA</CardTitle>
        {/* <CardDescription className="flex items-center gap-3">
              {filter?.map((item, index) => (
                <Button
                  key={index}
                  onClick={() => setSelectedFilter(item)}
                  variant={selectedFilter === item ? "default" : "outline"}
                >
                  {item}
                </Button>
              ))}
            </CardDescription> */}
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
              tickFormatter={(value) => value.slice(0, 5)}
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
  );
}
