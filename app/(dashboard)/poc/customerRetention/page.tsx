import CustomerHandles from "./_components/CustomerHandles";
import TableLoders from "@/app/layouts/Loders/TableLoders";
import { Suspense } from "react";
import { getMdtData } from "@/lib/actions";

export default function page() {
    return (
      <>
      <Suspense
        fallback={
          <div className=" container flex flex-col flex-1 gap-10 mx-auto py-10">
            <TableLoders title="CUSTOMER RETENTION" />
          </div>
        }
      >
        {
          fetchData()
        }
      </Suspense>
      </>
    );
  }
  // }
  
  async function fetchData () {
    const data: DashboardDataTypes[] = await getMdtData();
    const dataFilter = data?.filter((item) => item.poc);
  
    const filterDatas: any = dataFilter
      ?.map((item) => item.poc)
      .filter((value, index, itme) => itme.indexOf(value) == index);
  
    const dataArray = [];
  
    if (data) {
      for (var i of filterDatas) {
        const totalOrders = data.filter((item) => item.poc === i).length;
        const filterData = data.filter((item) => item.poc === i);
        const cancecllOrders = filterData.filter(
          (item) => item.cancelled === "Cancelled"
        ).length;
  
        dataArray.push({
          totalOrder: totalOrders,
          name: i,
          cncelled: cancecllOrders,
          exiting: totalOrders - cancecllOrders,
        });
      }
    }
    return (
      <div className=" m-5 flex flex-col flex-1 gap-10 py-10">
        <CustomerHandles POCData={dataArray} />
      </div>
    );
  }
