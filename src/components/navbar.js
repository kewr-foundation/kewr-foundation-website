import React from 'react'
import Logo from '../assets/kewr foundation.png'

function navbar() {
  return (
    <div className='container-fluid bg-black text-white'>
      <div className='row'>
        <div className='col-8 '>
          <img src={Logo} width={300} />
        </div>
        <div className='col-1 mt-5'>
          <h4 className='hover-overlay'>About</h4>
        </div>
        <div className='col-1 mt-5'>
          <h4>Partner</h4>
        </div>
        <div className='col-1 mt-5'>
          <h4>Blog</h4>
        </div>
        <div className='col-1 mt-5'>
          <h4>Donate</h4>
        </div>
      </div>
    </div>
  )
}

export default navbar