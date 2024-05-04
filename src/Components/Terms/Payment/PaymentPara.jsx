import React from "react";
import "./Payment.css";
const PaymentPara = () => {
  return (
    <div className="paymentParaContainer">
      <ul>
        <li>We currently accept online payments only.</li>
        <li>
          Payments can be made using Credit cards, Debit cards (MasterCard,
          Visa, Maestro, Rupay), AMEX, and Diners Club.
        </li>
        <li>
          We also accept payments through various wallets such as Freecharge,
          Ola Money, Oxigen, Airtel Money, PayZapp, Ypay, Yes wallet, Amazon
          Pay, and PayU Money wallet.
        </li>
        <li>
          Alternatively, you can pay through Net Banking or UPI transfers.
        </li>
      </ul>
    </div>
  );
};

export default PaymentPara;
