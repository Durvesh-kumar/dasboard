import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Cards() {
  return (
    <div className="flex items-center gap-10 w-full max-md:flex-col">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-center">7 DAYS ORDER AVERAGE</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-6xl">31.14</p>
        </CardContent>
      </Card>

      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-center">30 DAYS OREDR AVERAGE</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-6xl">38.37</p>
        </CardContent>
      </Card>

      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-center">LAST MONTH ORDER AVERAGE</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-6xl">35.93</p>
        </CardContent>
      </Card>
    </div>
  );
}
