import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Sheet } from '@/components/ui/sheet'
import React from 'react'

export default function TableLoders({title}:{title:string}) {
  return (
    <div className='container flex flex-col flex-1 gap-10 mx-auto py-10'>
      <Card>
      <h1 className="text-center text-2xl font-bold my-5">{title}</h1>
      <Input placeholder="Search product........" className="max-md:w-96 lg:w-1/2 my-5 ml-5" />
      <div className='flex items-center gap-5 flex-col flex-1 px-5 mb-2'>
        {
          [1,2,3,4,5,6,7,8].map((index:number)=>(
            <div key={index} className='h-20 animate-pulse rounded-lg w-full border-2 border-separate bg-primary/10'>
              <Sheet />
            </div>
          ))
        }
        </div>
        </Card>
      </div>
  )
}
