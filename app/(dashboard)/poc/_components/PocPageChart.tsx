'use client'
import DashboardSideBar from '@/app/layouts/SideBar/DashboardSideBar'
import MobileSideBar from '@/app/layouts/SideBar/MobileSideBar'
import React, { useEffect, useState } from 'react'
import { Chart } from './Chart'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'

export default function PocPageChart({ data }: { data: DashboardDataTypes[] }) {

  const [filterData, setFilterData] = useState<DashboardDataTypes[]>();

  useEffect(() => {
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
        <div className='flex w-full flex-col gap-5 p-5'>
          <div className="flex justify-end gap-3 max-md:flex-col">
            <Link className={buttonVariants()} href={"/poc/average"}>
              7 Days Vs Last month average
            </Link>
            <Link className={buttonVariants()} href={"/poc/customerRetention"}>
              CUSTOMER RETENTION
            </Link>
          </div>
          <MobileSideBar
            allData={data}
            filterData={filterData}
            setFilterData={setFilterData}
          />
          <Chart data={data} />
        </div>
      </div>
    </div>
  )
}
