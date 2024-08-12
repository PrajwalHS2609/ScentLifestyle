import React from 'react'
import "./OlaplexLandingProduct.css"
import olaplexLandingProducts from "./../../../Images/botoxLandingProducts.png";
import OlaplexLandingProductHead from './OlaplexLandingProductHead';

const OlaplexLandingProduct = () => {
  return (
    <div className="olaplexLandingProducts">
    <img src={olaplexLandingProducts} alt="olaplexLandingProducts" />
    <OlaplexLandingProductHead/>
  </div>
  )
}

export default OlaplexLandingProduct
