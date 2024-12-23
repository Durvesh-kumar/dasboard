"use client"
import React from 'react'
import { useAppContext } from '../layout'
import { Chart } from './_components/Chart';
import CustomerHandles from './_components/CustomerHandles';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';

export default function page() {
  const data = useAppContext()
  return (
    <div className=' container flex flex-col flex-1 gap-10 mx-auto py-10'>
      <Chart getData={data}/>
      <div className='flex items-center justify-end'>
      <Link className={buttonVariants()} href={"/poc/average"}>7 Days Vs Last month average</Link>
      </div>
      
      <CustomerHandles />
    </div>
  )
}
