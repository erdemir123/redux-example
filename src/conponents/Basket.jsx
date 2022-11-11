import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Basket = ({produc}) => {
    const state = useSelector((state)=>state)
const dispatch = useDispatch()
    const removeClick=()=>{
        dispatch({type:"REMOVE",payload:produc})
    }
  return (
    <div>
        <div className="flex justify-center w-[400px]">
        <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg shadow-lg  bg-slate-300">
          <img className=" w-[90%] h-[90%] md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg p-5" src={produc.url} alt="" />
          <div className="p-6 flex flex-col justify-start">
            <h5 className="text-gray-900 text-xl font-medium mb-2">{produc.title}</h5>
            <p className="text-gray-700 text-base mb-4">
              {produc.name}
            </p>
            <p className="text-gray-600 text-2xl">{produc.price} TL</p>
            <button className='w-36 bg-slate-700 py-1 px-2 rounded-md text-slate-300 font-bold active:scale-95 active:bg-slate-600 mt-3'onClick={removeClick}>Remove To Basket</button>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Basket
