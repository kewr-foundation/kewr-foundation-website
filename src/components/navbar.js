import React from 'react'

function navbar() {
  return (
    <div className='container-fluid bg-black text-white'>
      <div className='row'>
        <div className='col-4 text-center'>
          <h2>Logo Kewr Foundation</h2>
        </div>
        <div className='col-2 text-center'>
          <h4 className='hover-overlay'>About</h4>
        </div>
        <div className='col-2 text-center'>
          <h4>Partner</h4>
        </div>
        <div className='col-2 text-center'>
          <h4>Blog</h4>
        </div>
        <div className='col-2 text-center'>
          <h4>Grants</h4>
        </div>
      </div>
    </div>
  )
}

export default navbar