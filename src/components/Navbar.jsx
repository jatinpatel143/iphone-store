import React from 'react'
import logo from '../assets/logo.png'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Navbar = () => {

const {cart} = useSelector((state) => state.product)

  return (
 <nav className='bg-black'>
<div className="navb countainer flex items-center justify-between  w-auto  ps-1.5  pe-1.5">
  <Link to={"/"}><div className='img'>  <img className='max-w-16 ' src={logo}/></div></Link>

  

  <ul className='flex items-center justify-around min-w-96 text-white cursor-pointer nav2	'>
   <Link to = "/Home" >Home</Link>
    <Link to={'/Mac'}>Mac</Link>
   <Link to={"About"}>About</Link>
    <Link to={"/Support"}>Support</Link>
    
  </ul>
<Typography> 
<Link to={'/Saved'} id='ja'>  <Button   variant='containt'style={{backgroundColor : "#9c27b0", color : "white"}} >  Cart <AddShoppingCartIcon/> ({cart.length}) </Button></Link>
</Typography>
</div>
 </nav>
  )

}

export default Navbar