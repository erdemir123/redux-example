import React from 'react'
import { useSelector } from 'react-redux'
import Basket from '../conponents/Basket'

const Card = () => {
    let sumTotal = 0
    const state =useSelector((state)=>state)
    state.map((item)=> sumTotal += item.price)
  return (
    <>
    {state.length ? (<div className='flex flex-wrap justify-center gap-6 mt-7'>
    {state.map((produc,index)=><Basket produc={produc} key={index}/>)}
  </div>) :<p className='flex justify-center mt-20'>Sepette Ürün Bulunmamaktadır...</p>}
  <div className='fixed bg-slate-300 bottom-0 w-full text-end pr-4 font-bold py-2 text-lg'>TOPLAM : {sumTotal} TL</div>
  </>
  )
}

export default Card
