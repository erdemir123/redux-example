import React from 'react'
import { useSelector } from 'react-redux'
import Basket from '../conponents/Basket'

const Card = () => {
    const state =useSelector((state)=>state)
  return (
    <div className='flex flex-wrap justify-center gap-6 mt-7'>
      {state.map((produc,index)=><Basket produc={produc} key={index}/>)}
    </div>
  )
}

export default Card
