import React, { useEffect } from 'react'
import Herosection from '../components/Herosection'
import Cards from '../components/Cards'
import {  useSelector } from 'react-redux'

const Home = () => {

  const {isloading , iserror , issuccess , massage , product } = useSelector((state) => state.product)

  console.log(product)

  // if (isloading) {
  //  return(
  //   <div className='container'>
  //      <h1 className='text-center p-9 text-[50px]'>Loading</h1>

  // </div>
  //  );
  // }

//   if (iserror || massage) {
//  return (
//   <div className='container'>
//   <h1 className='text-center p-9 text-[50px]'>{massage}</h1>

// </div>
//  )    
//   }


 


  return (
    <>
      <Herosection />
      <div className='flex flex-wrap justify-between p-3  product'>
        {
          product.map((product) => <Cards key={product.id} product={product} />)
        }
      </div>
    </>
  )
}

export default Home