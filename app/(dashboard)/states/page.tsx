"use client"
import { useAppContext } from '@/app/layouts/themes/ThemesProviders'
import { Chart } from './_components/Chart'
import DashboardSideBar from '@/app/layouts/SideBar/DashboardSideBar'
import { useEffect, useState } from 'react'
import MobileSideBar from '@/app/layouts/SideBar/MobileSideBar'

export default function page() {
  const data = useAppContext()

    const [filterData, setFilterData] = useState<DashboardDataTypes[]>();
  
    useEffect(()=>{
      setFilterData(data)
    }, [data])
  return (
    <div className=''>
      <div className='flex items-center'>
      <DashboardSideBar
          allData={data}
          filterData={filterData}
          setFilterData={setFilterData}
        />
        <div className='container mx-auto flex flex-col gap-3 p-5'>
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
