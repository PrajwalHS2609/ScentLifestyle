import React from 'react'
import "./AcademyModel.css"
import AcademyModelHead from './AcademyModelHead'
import AcademyModelMain from './AcademyModelMain'
const AcademyModel = () => {
  return (
    <div className="academyModel-container">
      <AcademyModelHead/>
      <AcademyModelMain/>
    </div>
  )
}

export default AcademyModel
