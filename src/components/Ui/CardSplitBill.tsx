import { CURRENCY_LIST } from '@/data/CURRENCY_LIST'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import BtnDeleteParticipant from './btn/BtnDeleteParticipant'

const errList = {
  maxParticipants : 'MAX'
}
const errDefaultValue:String = errList.maxParticipants || ''

const CardSplitBill = () => {
  const [arrParticipants, setArrParticipants] = useState<string[]>([])
  const [err, setErr] = useState(errDefaultValue)

  const Router = useRouter()
  const handleDeleteParticipants = () => {
    let copy = [...arrParticipants]
    copy.pop()
    setArrParticipants(copy)
  }
  const handleAddParticipants = () => {
    if(arrParticipants.length >= 3){
      setErr(errList.maxParticipants)
    }else {
      setArrParticipants([...arrParticipants, 'participant'])
    }
  }

  const handleFormSubmit = (e: { preventDefault: () => void })=>{
    e.preventDefault()
    alert("clicked")
  }

  return (
    <form onSubmit={handleFormSubmit}>
    <div className="w-full m-auto flex-col justify-center border rounded py-2 px-4">

      <div className='mb-3'>
        <label htmlFor="contractName" className="text-sm text-gray-700 font-medium">Contract Name</label>
        <input type="text" id="contractName" name="contractName"
          placeholder=" example : Trip to Bali"
          className="form-input w-full block shadow-sm border-0 border-b-2 border-gray-300 bg-gray-50 text-sm placeholder-gray-300 focus:border-yellow-500 focus:ring-0"
        />
      </div>
      <div className='mb-3'>
        <label htmlFor="currency" className="text-sm text-gray-700 font-medium">Currency</label>
        <select name="" id="" className='block shadow-sm border-0 border-b-2 border-gray-300 bg-gray-50 text-sm placeholder-gray-300 focus:border-yellow-500 focus:ring-0'>
          <option value="IDR" className="font-semibold ">Indonesia rupiah IDR</option>
            {CURRENCY_LIST.map((option, index) => (
              <option value={option} key={index + 2}  className="font-semibold ">{option}</option>
            ))
            }
          </select>
      </div>

    <div className='mb-3'>
      <label htmlFor="" className="text-sm text-gray-700 font-medium">Participant</label>
      <div className='flex mb-2'>
        <input type="text" id="yourName" name="yourName"
          placeholder="Your Name"
          className="form-input w-full block shadow-sm border-0 border-b-2 border-gray-300 bg-gray-50 text-sm placeholder-gray-300 focus:border-yellow-500 focus:ring-0"
        /> <BtnDeleteParticipant isDisabled={true}/>
      </div>
      <div className='flex mb-2'>
        <input type="text" id="participant1" name="participant1"
          placeholder="Your friends name"
          className="form-input w-full block shadow-sm border-0 border-b-2 border-gray-300 bg-gray-50 text-sm placeholder-gray-300 focus:border-yellow-500 focus:ring-0"
        /> <BtnDeleteParticipant isDisabled={true}/>
      </div>
      
      {arrParticipants.length >= 1 && 
        arrParticipants.map((item, index)=>{
          return (
            <div key={item} className={'flex mb-2'}>
              <input type="text" id={`participant ${index + 2}`} name={`participant ${index + 2}`}
                placeholder="Your friends name"
                className="form-input w-full block shadow-sm border-0 border-b-2 border-gray-300 bg-gray-50 text-sm placeholder-gray-300 focus:border-yellow-500 focus:ring-0"
              /> 
              <BtnDeleteParticipant isDisabled={false} hadnleDeleteParticipantDtn={handleDeleteParticipants}/>
            </div>
          )
        })
      }
    </div>
    
    <button type='button' onClick={handleAddParticipants}>Add Participant</button>

  </div>
      <div className='flex gap-2 my-3'>
        <button type='submit' className='px-3 py-1 bg-orange-500 rounded text-white uppercase'>Create</button> or <button type='button'>Cancel</button>
      </div>
  </form>
  )
}

export default CardSplitBill
