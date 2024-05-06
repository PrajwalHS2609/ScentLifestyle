import React from 'react'
import StyleCrewHead from './StyleCrewHead'
import StyleCrewPara from './StyleCrewPara'
import StyleCrewImg from './StyleCrewImg'
import StyleCrewNavBg from './StyleCrewNavBg'
import "./StyleCrewPage.css"

const StyleCrewPage = () => {
  return (
    <div className='styleCrewPageContainer'>
      <StyleCrewNavBg/>
<StyleCrewHead/>
<StyleCrewPara/>
<StyleCrewImg/>
    </div>
  )
}

export default StyleCrewPage
