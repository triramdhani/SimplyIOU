import React from 'react'

export interface IBtnDeleteParticipant {
    isDisabled: boolean
    hadnleDeleteParticipantDtn? : () => void
}

const BtnDeleteParticipant = ({isDisabled,hadnleDeleteParticipantDtn}:IBtnDeleteParticipant) => {
  return (
    <button 
        disabled={isDisabled}
        onClick={ hadnleDeleteParticipantDtn}
        type='button'
        className='block bg-red-600 text-slate-50 px-1 ml-2 font-semibold'
    >
        Delete
    </button>
  )
}

export default BtnDeleteParticipant
