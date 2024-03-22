import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import { addCart} from '../Features/Productslice';


const Cards  = ({product}) => {
    const dispatch = useDispatch()
   const addCArt  = ()=>{
      dispatch(addCart(product))
   }

  return (
   
     <Card  className='cards pt-3 w-2/6 flex items-center justify-center flex-col mt-3.5' sx={{ maxWidth: 330}}>
        <img src={product.Image} className='w-36'/>

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
      {product.decripation}

        </Typography>
        <Typography  className='py-2 font-extrabold'>Price$ :{product.price}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small"  style={{backgroundColor : "#009688", color : "white"}}>Buy</Button>
        <Button onClick={addCArt} size="small" style={{backgroundColor : "#ff8a65", color : "white"}}>ADD TO CART</Button>
      </CardActions>
    </Card>
   
  );
}

export default Cards