import React from 'react'
import Video from '../assets/large_2x.mp4'

const Mac = () => {
  return (
    <div className='flex items-center justify-center flex-col'> 
        <h1 className='text-center p-9 text-[50px]' >Welcome to Mac</h1>
   
    <video  src={Video} loop autoPlay></video>

        </div>
  )
}

export default Mac