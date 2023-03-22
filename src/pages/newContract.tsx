import PrimaryLayout from '@/components/layouts/primary/PrimaryLayout'
import CardSplitBill from '@/components/Ui/CardSplitBill'
import { useState } from 'react'
import { NextPageWithLayout } from './page'

const NEW: NextPageWithLayout = () => {
    const [isSplitBill, setIsSplitBill] = useState(true)
  return (
    <>
      <section className='w-10/12 md:w-9/12 m-auto '>
        <p className='text-2xl px-2 text-center'>create new contract</p>
       
        <div className='grid grid-flow-col auto-cols-fr my-4 cursor-pointer'>
            <div className={`${isSplitBill ? "bg-purple-500 text-white rounded-md" : "text-gray-400 hover:bg-gray-50 hover:text-gray-500"}`}>
                <p onClick={()=>setIsSplitBill(true)} className="p-3 w-full inline-flex justify-center items-center text-center text-base font-semibold">Split Bill</p>
            </div>
            <div className={`${!isSplitBill ? "bg-purple-500 text-white rounded-md" : "text-gray-400 hover:bg-gray-50 hover:text-gray-500"}`}>
                <p onClick={()=>setIsSplitBill(false)} className="p-3 w-full inline-flex justify-center items-center text-center text-base font-semibold">IOU</p>
            </div>
            
            {/* <p onClick={()=>setIsSplitBill(false)}>IOU</p> */}
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
