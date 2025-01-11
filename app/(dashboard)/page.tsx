import { getDashboardPageData } from '@/lib/actions'
import DashboardPage from './_home/Page'

export default async function page() {

  const allData = await getDashboardPageData()

  return (
    <div className='w-full'>
    <DashboardPage data={allData}/>
    </div>
  )
}
