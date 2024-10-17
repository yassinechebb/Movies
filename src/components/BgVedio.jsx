import React from 'react'
import Video from '../assest/Video.mp4';
function BgVedio() {
  return (
    <div className='bgContrainer'>
        <div className='overlay'></div>
            <video src={Video} autoPlay loop    />
            <div className='containervid'>
                <h2 className="wlc">WELCOME</h2>
                <h1 className="title">The Walking Dead</h1>
            </div>
        
    </div>
  )
}

export default BgVedio