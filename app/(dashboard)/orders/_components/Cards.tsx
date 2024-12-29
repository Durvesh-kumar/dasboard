import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type AverageType ={
  daysAverage:number;
  lastMonthAverage:number;
  days30Average:number;
}

export default function Cards({getAverageData}:{getAverageData?:AverageType[]}) {
  
  const monthAverages = getAverageData?.filter((item)=> item.days30Average?.toString().length > 0);
  
  const daysDataAverage = getAverageData?.filter((item)=> item.daysAverage?.toString().length > 0);
  
  const lastMonthAverages = getAverageData?.filter((item)=> item.lastMonthAverage?.toString().length > 0);
  
  
  
  return (
    <div className="flex items-center gap-10 w-full max-md:flex-col">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-center">7 DAYS ORDER AVERAGE</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-6xl">{daysDataAverage?.map((items)=> items.daysAverage)?.toString().slice(0,5)}</p>
        </CardContent>
      </Card>

      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-center">30 DAYS OREDR AVERAGE</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-6xl">{monthAverages?.map((items)=> items.days30Average)?.toString().slice(0,5)}</p>
        </CardContent>
      </Card>

      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-center">LAST MONTH ORDER AVERAGE</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-6xl">{lastMonthAverages?.map((items)=> items.lastMonthAverage)?.toString().slice(0,5)}</p>
        </CardContent>
      </Card>
    </div>
  );
}
