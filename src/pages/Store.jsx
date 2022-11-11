import React from 'react'
import StoreCard from '../conponents/StoreCard'
import data from "../data"

const Store = () => {
  return (
    <div className='flex flex-wrap justify-center gap-6 mt-7'>
      {data.map((produc ,index)=> <StoreCard produc={produc} key={index}/>)}
    </div>
  )
}

export default Store
