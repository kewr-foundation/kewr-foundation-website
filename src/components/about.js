import React from 'react'
import Logo from '../assets/kewr foundation.png'

function about() {
  return (
    <div className='container-fluid bg-black text-white'>
      <div className='row ' style={{height:748}}>
        <div className='col-6 mt-5'>
          <h1>About
Our mission is to nurture cutting-edge applications for decentralized web software protocols.
Our passion is delivering Web 3.0, decentralized and fair internet where users control their own data, identity and destiny.</h1>
        </div>
        <div className='col-6 mt-5 text-center'>
          <img src={Logo} width={500} />
        </div>
      </div>
    </div>
  )
}

export default about