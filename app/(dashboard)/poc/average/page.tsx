import TableData from "./_components/TableData";
import { getSevenDaysVs30Average } from "@/lib/actions";
import TableLoders from "@/app/layouts/Loders/TableLoders";
import { Suspense } from "react";

export default function page() {

 return (
  <Suspense fallback={
    <TableLoders title="LAST 7 DAYS AVERAGE VS LAST MONTH AVERAGE" />
  }
  >
    {
      featchData()
    }
  </Suspense>
 )
}


async function featchData() {
  const getDaysData = await getSevenDaysVs30Average()
  const filterData = getDaysData?.filter((item:any)=> item.poc?.length > 1);
  return (
    <div className=" container mx-auto mt-10">
      <TableData getData={filterData} />
    </div>
  );
}