import { Typography } from '@mui/material'
import React from 'react'

const EmptyBasketTotal = () => {
  return (
    <div> 
        <Typography variant="subtitle1" color={"red"} mt={"3rem"} fontSize={"1.5rem"} textAlign={"center"} marginTop={"10rem"} >You have no items in your shopping cart, <a style={{textDecoration:"none", color:"blue" }}  href='/'>start adding some!</a></Typography>
    </div>
  )
}

export default EmptyBasketTotal