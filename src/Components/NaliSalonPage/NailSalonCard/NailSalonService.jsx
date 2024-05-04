import React from 'react'
import NailSalonCardHead from './NailSalonCardHead'
import NailSalonCardPara from './NailSalonCardPara'
import NailSalonCardContain from './NailSalonCardContain'

const NailSalonService = () => {
  return (
    <div className='nailSalonServiceContainer'>
      <NailSalonCardHead/>
      <NailSalonCardPara/>
      <NailSalonCardContain/>
    </div>
  )
}

export default NailSalonService
