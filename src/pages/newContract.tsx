import PrimaryLayout from '@/components/layouts/primary/PrimaryLayout'
import CardSplitBill from '@/components/Ui/CardSplitBill'
import { useState } from 'react'
import { NextPageWithLayout } from './page'

const NEW: NextPageWithLayout = () => {
    const [isSplitBill, setIsSplitBill] = useState(true)
  return (
    <>
      <section className=' min-w-full '>
        <p className='text-2xl px-2'>create new contract</p>
       
        <div className='flex gap-8 cursor-pointer'>
            <p onClick={()=>setIsSplitBill(true)}>Split Bill</p>
            <p onClick={()=>setIsSplitBill(false)}>IOU</p>
        </div>
        {
            isSplitBill ? 
            (
                <CardSplitBill/>
            ):null
        }
      </section>
    </>
  )
}

export default NEW

NEW.getLayout = (page) => {
  return (
    <PrimaryLayout pageTitle='Simply IOU'>
      {page}
    </PrimaryLayout>
  )
}
