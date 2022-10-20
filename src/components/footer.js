import React from 'react'
import Interchain from '../assets/interchain.png'
import Web3 from '../assets/web3f.png'
import Tendermint from '../assets/tendermint white.png'
import Ignite from '../assets/ignite white.png'

function footer() {
  return (
    <div className='container-fluid bg-black text-white'>
        <div className='row'>
            <div className='col-2'>
            <img src={Interchain} width={230} />
            </div>
            <div className='col-2'>
            <img src={Web3} width={160} className="mt-4"/>
            </div>
            <div className='col-2'>
            <img src={Tendermint} width={310} />
            </div>
            <div className='col-2'>
            <img src={Ignite} width={200} />
            </div>
            <div className='col-4 mt-5'>
            <h5 className='text-white text-end'>© 2022 Kewr Foundation, All Rights Reserved.</h5>
            </div>
        </div>
    </div>
  )
}

export default footer