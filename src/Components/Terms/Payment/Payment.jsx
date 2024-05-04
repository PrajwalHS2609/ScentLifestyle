import React from 'react'
import PaymentHead from './PaymentHead'
import PaymentPara from './PaymentPara'
import "./Payment.css"
const Payment = () => {
  return (
    <div className='paymentContainer'>
      <PaymentHead/>
      <PaymentPara/>
    </div>
  )
}

export default Payment
