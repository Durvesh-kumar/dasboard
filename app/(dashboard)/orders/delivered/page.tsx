"use client"
import React, { useEffect, useState } from 'react'
import DeliveredData from './_components/DeliveredData'
import RtoDeliveredData from './_components/RtoDeliveredData'
import { getDelivered15t045Data } from '@/lib/actions'
// import { getDelivered15t045Data } from './_components/actions'

export default function page() {

    const [getData, setGetData] = useState<Delivered15To45Type[]>([])

    const fetchData = async()=>{
        const data = await getDelivered15t045Data()
        console.log(data);
        
        setGetData(data)
    }

    useEffect(()=>{
        fetchData()
    }, []);
  return (
    <div className='container flex flex-col flex-1 gap-10 mx-auto m-5 py-10'>
        <DeliveredData getData={getData} />
        <RtoDeliveredData getData={getData} />
    </div>
  )
}
