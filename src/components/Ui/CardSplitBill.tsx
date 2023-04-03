import { CURRENCY_LIST } from '@/data/CURRENCY_LIST'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import BtnDeleteParticipant from './btn/BtnDeleteParticipant'
import ModalErr from './modal/ModalErr'
import {customAlphabet, nanoid} from 'nanoid'
const errList = {
  maxParticipants : 'MAX'
}
const LIMIT_PARTICIPANTS:number = 5

const CardSplitBill = () => {
  const [arrParticipants, setArrParticipants] = useState<string[]>(['',''])
  const [err, setErr] = useState('')
  const [participant1, setParticipant1] = useState('')
  const [participant2, setParticipant2] = useState('')
  const [participant3, setParticipant3] = useState('')
  const [participant4, setParticipant4] = useState('')
  const [participant5, setParticipant5] = useState('')
  const [contractName, setContractName] = useState('')
  const [currency, setCurrency] = useState(CURRENCY_LIST[0])
  // const []
  const Router = useRouter()
  const handleDeleteParticipants = () => {
    let copy = [...arrParticipants]
    copy.pop()
    setArrParticipants(copy)
  }
  const handleAddParticipants = async() => {
    if(arrParticipants.length >= LIMIT_PARTICIPANTS){
      setErr(errList.maxParticipants)
      setTimeout(() => {
        setErr('')
      }, 5000);
    }else {
      setArrParticipants([...arrParticipants, ''])
    }
  }
  const handleSelectCurrency = (e:any) => {
    setCurrency(e.target.value)
  }

  const handleParticipantInputChange = (e: any, index:number) => {
    console.log(index)
    switch (index) {
      case 0:
        setParticipant1(e.target.value)
        break;
      case 1:
        setParticipant2(e.target.value)
        break;
      case 2:
        setParticipant3(e.target.value)
        break;
      case 3:
        setParticipant4(e.target.value)
        break;
      case 4:
        setParticipant5(e.target.value)
        break;
      default:
        break;
    }
  }
  const handleFormSubmit = async(e: { preventDefault: () => void })=>{
    e.preventDefault()
    // alert("clicked")
    const customNanoId = (size:number) => {
      const nanoid = customAlphabet('ABCDEFGHijklmnopqrstu1234567890', size)
      return nanoid()
    }

    const contractId =  customNanoId(15)
    const userAid = customNanoId(10)
    const userBid = customNanoId(10)
    const data = {
      contratId : contractId,
      contractName : contractName,
      currency : currency,
      userAname : participant1,
      userAid : userAid,
      participant2 : participant2,
      userBid : userBid
    }
    // if(participant3 !== '') 
    console.log(data)
  }

  return (
    <form onSubmit={handleFormSubmit}>
    <div className="w-full m-auto flex-col justify-center border rounded py-2 px-4">

      <div className='mb-3'>
        <label htmlFor="contractName" className="text-sm text-gray-700 font-medium">Contract Name</label>
        <input type="text" id="contractName" name="contractName"
          placeholder=" example : Trip to Bali"
          onChange={(e)=>setContractName(e.target.value)}
          className="form-input w-full block shadow-sm border-0 border-b-2 border-gray-300 bg-gray-50 text-sm placeholder-gray-300 focus:border-yellow-500 focus:ring-0"
        />
      </div>
      <div className='mb-3'>
        <label htmlFor="currency" className="text-sm text-gray-700 font-medium">Currency</label>
        <select name="" id="" onChange={handleSelectCurrency} value={currency} className='block shadow-sm border-0 border-b-2 border-gray-300 bg-gray-50 text-sm placeholder-gray-300 focus:border-yellow-500 focus:ring-0'>
            {CURRENCY_LIST.map((option, index) => (
              <option value={option} key={index + 2} className="font-semibold ">{option}</option>
            ))
            }
          </select>
      </div>

    <div className='mb-3'>
      <label htmlFor="" className="text-sm text-gray-700 font-medium">Participant</label>
      {
        arrParticipants.map((item, index)=>{
          const isDeleteBtnDisabled:boolean = index === 0 || index === 1  
          return (
            <div key={index} className={'flex mb-2'}>
              <input type="text" id={`participant ${index + 1}`} name={`participant ${index + 1}`}
                onChange={(e)=> handleParticipantInputChange(e,index)}
                placeholder="Your friends name"
                className="form-input w-full block shadow-sm border-0 border-b-2 border-gray-300 bg-gray-50 text-sm placeholder-gray-300 focus:border-yellow-500 focus:ring-0"
              /> 
              <BtnDeleteParticipant isDisabled={isDeleteBtnDisabled} hadnleDeleteParticipantDtn={handleDeleteParticipants}/>
            </div>
          )
        })
      }
    </div>
    
    <div className='relative'>
      {err === errList.maxParticipants && <ModalErr/> }
      <button  type='button' onClick={handleAddParticipants} className='bg-green-500 font-semibold px-4  py-1 text-[14px] rounded-md'>Add Participant</button>
    </div> 

  </div>
      <div className='flex gap-2 my-3'>
        <button type='submit' className='px-3 py-1 bg-orange-500 rounded text-white uppercase'>Create</button> or <button type='button' onClick={()=> Router.back()}>Cancel</button>
      </div>
  </form>
  )
}

export default CardSplitBill
