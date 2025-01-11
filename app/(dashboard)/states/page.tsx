import { getDashboardPageData } from '@/lib/actions'
import React from 'react'
import StatesPage from './_components/StatesPage'

export default async function page() {
  const data = await getDashboardPageData()
  return (
    <>
    <StatesPage data={data}/>
    </>
  )
}
