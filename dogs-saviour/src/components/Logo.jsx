import React from 'react'
import dogLogo from '../assets/loggg.png';

function Logo({width = '100px'}) {

  //<img width='100px' src={dogLogo} alt="" />
  return (
    <div>
      <img width='100px' src={dogLogo} alt="" />
    </div>
  )
}

export default Logo