import React from 'react'
import Logo from '../assets/kewr foundation hitam putih.png'
import { Link } from 'react-router-dom'

function navbar() {
  return (
    <div className='container-fluid bg-black text-white'>
      <div className='row'>
        <div className='col-8 '>
          <Link to="/"><img src={Logo} width={300} /></Link>
        </div>
        <div className='col-1 mt-5'>
        <Link to="/about" className='text-white'>
          <h4 className='text-white'>About</h4>
        </Link>
        </div>
        <div className='col-1 mt-5'>
          <Link to="/partner" className='text-white'>
          <h4>Partner</h4>
          </Link>
        </div>
        <div className='col-1 mt-5'>
          <Link to="/blog" className='text-white'>
          <h4>Blog</h4>
          </Link>
        </div>
        <div className='col-1 mt-5'>
          <Link to="/donate" className='text-white'>
            <h4>Donate</h4>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default navbar