import { getDashboardPageData } from "@/lib/actions";
import DataTable from "./_components/DataTable";

export default async function page() {

  const data = await getDashboardPageData()
  return (
    <div className="m-5">
        <DataTable data={data} />
    </div>
  )
}