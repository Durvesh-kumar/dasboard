"use client"
import { Chart } from './_components/Chart'
import { useAppContext } from '../layout'

export default function page() {
    const data = useAppContext()
  return (
    <div className=' container mx-auto mt-10'>
        <Chart getData={data}/>
    </div>
  )
}
