import React from 'react'
//import { CartSummary } from '../Components/Page/Cart'
import { Box } from '@mui/material'
import { CartSummary } from '../Components/Page/Cart';



function ShoppingCart(): JSX.Element  {
  return (
    <>
    <Box sx={{p:4}}>
       <CartSummary/>
    </Box>
    </>
  )
}

export default ShoppingCart;