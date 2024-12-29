import DeliveredData from './_components/DeliveredData'
import RtoDeliveredData from './_components/RtoDeliveredData'
import { getDelivered15t045Data } from '@/lib/actions'
import TableLoders from '@/app/layouts/Loders/TableLoders'
import { Suspense } from 'react'

export default function page() {

    return(
      <Suspense fallback={
        <TableLoders title='DELIVERED ORDERS DATA T-15 TO T-45'/>
      }>
        {
          featchData()
        }
      </Suspense>
    )
}

async function featchData() {
  const data = await getDelivered15t045Data();
  return(
    <div className='container flex flex-col flex-1 gap-10 mx-auto m-5 py-10'>
      <DeliveredData getData={data} />
      <RtoDeliveredData getData={data} />
  </div>
  )
}
