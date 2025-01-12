import { get30daysData } from '@/lib/actions';
import DataTable from './_components/DataTable';
import TableLoders from '@/app/layouts/Loders/TableLoders';
import { Suspense } from 'react';

export default function page() {

    return (
      <Suspense fallback={
        <TableLoders title='PERFORMSNCE INDICATOR LAST 30 DAYS'/>
      }>
        {
          fetchData()
        }
      </Suspense>
    )
  }

async function fetchData() {

  const data:ThirtyDaysType[] = await get30daysData()

  const allData = data?.filter((item)=> item.poc).filter((item)=> item.poc.length > 1);

  const filterDatas = allData?.map((item)=> item.poc).filter((value, index, itme)=> itme.indexOf(value) == index);
  const dataArray:any = []

  if(allData){
    for(var i of filterDatas){
      const filterData = data.filter((item)=> item.poc === i);
      const totalOrdersLength = data.filter((item)=> item.poc === i).length;
      const totalRevenus = filterData.reduce((acc, item)=> acc + item.amount, 0);
      const RTOStats = filterData.filter((item)=> item.trackingStatus === "RTO Delivered").length;
      const pripaidOrders = filterData.filter((item)=> item.predad === "PREPAID").length;

      function totaltRevenuAverage(array:any) {
        let sum = 0
        array?.forEach((num:any)=> sum = sum + num)
    
        let avg = sum/array.length
        return avg;
      };

      const totaltRevenuAv = totaltRevenuAverage(filterData.map((item)=> item.amount));
  
      dataArray.push({
        totalOrder:totalOrdersLength,
        name:i,
        totalRevenu:totalRevenus,
        RTOStatsLength: RTOStats,
        totalRevenuAv:totaltRevenuAv,
        pripaid: pripaidOrders,
        pripaidAverage: pripaidOrders / allData.length ,
        performenceScore: totalOrdersLength / allData.length,
        RTOStatsAverage: RTOStats / allData.length
      })
    }
  }
  return(
    <div className='flex flex-col flex-1 gap-10 p-5'>
           <DataTable getData={dataArray} />
      </div>
  )
  }