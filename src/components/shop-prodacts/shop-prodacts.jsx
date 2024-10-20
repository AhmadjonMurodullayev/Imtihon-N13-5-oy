import { Container, Stack } from '@mui/material'
import shop from '../../assets/shop.png'
import React from 'react'
import CardFooter from '../../layout/footer/card-footer'
import Prodacts from '../prodacts/prodacts'

export default function ShopProdacts() {
  return (
  <Stack>
   <Stack maxWidth={"1500px"} m={"auto"}>
        <img style={{width:"100%"}} src={shop} alt="" />
    </Stack>
    <Stack>
        <Prodacts/>
    </Stack>
    <Stack>
        <CardFooter/>
    </Stack>
  </Stack>
  )
}
