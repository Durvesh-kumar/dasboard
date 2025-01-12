import { getDashboardPageData } from "@/lib/actions";
import PocPageChart from "./_components/PocPageChart";

export default async function page() {
  const data = await getDashboardPageData();
  return (
    <>
      <PocPageChart data={data} />
    </>
  );
}
