import PrimaryLayout from '@/components/layouts/primary/PrimaryLayout'
import CardSplitBill from '@/components/Ui/CardSplitBill'
import { useState } from 'react'
import { NextPageWithLayout } from './page'


const contractList = {
  SPLITBILL : 'splitBill',
  IOU : 'IOU'
}
let defaultValue:String = contractList.SPLITBILL || contractList.IOU

const NEW: NextPageWithLayout = () => {
    const [contractType, setContractType] = useState(defaultValue)
  return (
    <>
      <section className='w-10/12 md:w-9/12 m-auto '>
        <p className='text-2xl px-2 text-center'>create new contract</p>
       
        <div className='grid grid-flow-col auto-cols-fr my-4 cursor-pointer'>
            <div className={`${contractType === contractList.SPLITBILL ? "bg-purple-500 text-white rounded-md" : "text-gray-400 hover:bg-gray-50 hover:text-gray-500"}`}>
                <p onClick={()=>setContractType(contractList.SPLITBILL)} className="p-3 w-full inline-flex justify-center items-center text-center text-base font-semibold">Split Bill</p>
            </div>
            <div className={`${contractType === contractList.IOU ? "bg-purple-500 text-white rounded-md" : "text-gray-400 hover:bg-gray-50 hover:text-gray-500"}`}>
                <p onClick={()=>setContractType(contractList.IOU)} className="p-3 w-full inline-flex justify-center items-center text-center text-base font-semibold">IOU</p>
            </div>            
        </div>
        {
            contractType === contractList.SPLITBILL ? 
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
