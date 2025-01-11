import React from 'react'
import Page from './_home/Page'
import { getDashboardPageData } from '@/lib/actions'

export default function page() {
  return (
    <>
    {
      fetchData()
    }
    </>
  )
}

async function fetchData() {
  const allData = await getDashboardPageData()
  return(
    <div>
      <Page data={allData} />
    </div>
  )
}