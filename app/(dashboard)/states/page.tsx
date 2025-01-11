import { getDashboardPageData } from '@/lib/actions'
import React from 'react'
import StatePage from './_components/Page'

export default async function page() {
  const data= await getDashboardPageData()
  return (
    <>
    <StatePage data={data} />
    </>
  )
}

