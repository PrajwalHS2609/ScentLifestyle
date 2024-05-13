import React from 'react'
import "./UptownLocMap.css"
import LocationMap from '../../LocationMap/LocationMap';

const UptownLocMap = () => {
  return (
    <div className='uptownMapLocContainer'>
        <LocationMap
          location="Uptown Square"
          map={
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7774.341878548739!2d77.75183099357908!3d13.024784100000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae0fce933eb01f%3A0xda0f87b8b4cf7e2f!2sScent%20Salon%20Spa!5e0!3m2!1sen!2sin!4v1715312916520!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          }
        />
    </div>
  )
}

export default UptownLocMap
