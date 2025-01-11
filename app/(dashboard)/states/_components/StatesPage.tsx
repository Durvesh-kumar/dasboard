"use client"
import DashboardSideBar from '@/app/layouts/SideBar/DashboardSideBar'
import { useEffect, useState } from 'react'
import MobileSideBar from '@/app/layouts/SideBar/MobileSideBar'
import { Chart } from './Chart'

export default function StatesPage({data}:{data:DashboardDataTypes[]}) {

    const [filterData, setFilterData] = useState<DashboardDataTypes[]>();
  
    useEffect(()=>{
      setFilterData(data)
    }, [data])
  return (
    <div className='w-full'>
      <div className='flex items-center w-full'>
      <DashboardSideBar
          allData={data}
          filterData={filterData}
          setFilterData={setFilterData}
        />
        <div className='flex flex-col gap-3 p-5'>
        <MobileSideBar
              allData={data}
              filterData={filterData}
              setFilterData={setFilterData}
            />
          <Chart getData={filterData}/>
        </div>
    </div>
    </div>
  )
}
