import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Totalprice = ()=> {

  const {total,totalQty} = useSelector((state) => state.product)
    const nagtive = useNavigate()

    console.log(total)

  return (
    <div className='exam1 flex checkout flex-col justify-center items-center h-[60vh] w-3/6'>
            <div className="w-5/6 flex flex-col item-center ">
              <hr className=' w-5/6' />
              <span className='flex w-3/6 justify-around '> <p> t-price :</p><p>₹{total} .00</p></span>
              <hr className=' w-5/6' />
              <span className='flex w-3/6 justify-around '> <p>Quantity : {totalQty}</p></span>
              <hr className=' w-5/6' />
              {/* <span className='flex w-3/6 justify-around'> <p>Sub-Total : </p> <p>₹.00</p></span> 
              <hr className=' w-5/6' />
              <span className='flex w-3/6 justify-around'> <p>Total : </p><p>₹.00</p></span>
              <hr className='w-5/6' /> */}
              <span className='flex w-3/6 justify-around m-auto mt-10 text-  bg-black' style={{color : "white"}}><button type='button' onClick={()=> nagtive("/Home")} className='btnAddtocart px-10 py-2 text-lg w-auto'>CONTINUE STORE</button>
              </span>
            </div>
          </div>
  )
}

export default Totalprice