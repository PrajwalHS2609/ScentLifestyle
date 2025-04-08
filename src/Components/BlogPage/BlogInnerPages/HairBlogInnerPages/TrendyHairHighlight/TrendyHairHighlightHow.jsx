import React from 'react'
import checked from "./../../../../../Images/checked.png";

const TrendyHairHighlightHow = () => {
  return (
    <div className="blogWhat-content">
      <h5>How to Maintain Your Hair Highlights</h5>
      <p>
        Getting stunning hair highlights color is just the beginning. To keep
        them looking fresh and vibrant, follow these essential tips:
      </p>
      <ul>
        <li>
          <span>
            <img src={checked} alt="checked" />
            Use Color-Safe Shampoo & Conditioner{" "}
          </span>
          <p>Helps maintain vibrancy and prevents fading.</p>
        </li>
        <li>
          <span>
            <img src={checked} alt="checked" /> Avoid Excessive Heat Styling
          </span>
          <p>Too much heat can damage and dull your highlights.</p>
        </li>
        <li>
          <span>
            <img src={checked} alt="checked" /> Deep Condition Regularly
          </span>
          <p>Keeps your hair healthy, soft, and hydrated.</p>
        </li>
        <li>
          <span>
            <img src={checked} alt="checked" />
            Touch-Up as Needed
          </span>
          <p>
            Depending on the technique, get regular touch-ups to maintain a
            fresh look.{" "}
          </p>
        </li>
        <li>
          <span>
            <img src={checked} alt="checked" /> Protect Your Hair from Sun Exposure
          </span>
          <p>Use UV protection sprays to prevent color fading. </p>
        </li>
      </ul>
    </div>
  )
}

export default TrendyHairHighlightHow
