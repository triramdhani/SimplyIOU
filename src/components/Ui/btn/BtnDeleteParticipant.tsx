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
        className='block'
    >
        Delete
    </button>
  )
}

export default BtnDeleteParticipant
