"use client"
import { useAppContext } from '@/app/layouts/themes/ThemesProviders'
import { Chart } from './_components/Chart'

export default function page() {
  const data = useAppContext()
  return (
    <div className=' container mx-auto mt-10'>
        <Chart getData={data}/>
    </div>
  )
}
