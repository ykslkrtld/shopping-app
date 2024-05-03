import React from 'react'
import EmptyBasketTotal from '../components/EmptyBasketTotal'
import { useSelector } from 'react-redux'
import FilledBasketTotal from "../components/FiiledBasketTotal"


const Basket = () => {
  const {basket} = useSelector((state) => state)
  return (
    <div>
      {basket.length > 0 ? (<FilledBasketTotal/> ) : (<EmptyBasketTotal/>)}
      
      
    </div>
  )
}

export default Basket