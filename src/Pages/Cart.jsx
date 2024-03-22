import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseQty, increaseQty, remove, removeQty } from '../Features/Productslice';
import Totalprice from './Totalprice';

const CartItem = ({ item }) => {

  const dispatch = useDispatch();
  

  const removeitem= (itemid)=>{
dispatch(remove(itemid))
dispatch(removeQty(item))
  }

  const increase = (item) => {
    dispatch(increaseQty(item))
  }
  const decrease = (item) => {
    if (item.qty !== 1) {
      dispatch(decreaseQty(item))
    }
  }
  return (

<>
<Card className='exam3 pt-3  flex items-center justify-center flex-col mt-3.5' sx={{ maxWidth: 700 }}>
      <img src={item.Image} className='w-36' />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography className='py-2 font-extrabold'>Price$ :{item.price}</Typography>
      </CardContent>
      <span  className=' w-1/3 flex  justify-between'>
      <Button variant="outlined" onClick={()=>decrease(item)} className='btn' >-</Button>{item.qty}
      <Button variant="outlined" onClick={()=>increase(item)} className='btn'>+</Button>
            
          </span>
      <CardActions>
        <Button  sx={{width : 400 }} variant='h3' size="small" style={{ backgroundColor: "red", color: "white", }}
   onClick={()=>removeitem(item)}>Remove</Button>
        
      </CardActions>
    </Card> 

   


</>

  )
}


const Cart = () => {




  const { cart } = useSelector((state) => state.product)

  return (
    <>
      <div className='w-[200vh] flex justify-evenly  exam'>
      <div className='w-full  pt-8 '>
      {cart.map((item, i) => <CartItem key={i} item={item} />)}
    </div>
    
  <Totalprice  />



      </div>
    
    </>


    

  )
}

export default Cart