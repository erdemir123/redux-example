import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Header = () => {
    const state = useSelector((state)=>state)
  return (
    <div className='flex w-full h-10 bg-emerald-300 text-orange-900 font-bold uppercase justify-between items-center px-4'>
      <div>LOGO</div>
      <div className='flex gap-3 '>
        <Link to={"/"}> Store</Link>
        <Link to={"/card"}> Card{state.length ? `(${state.length})` : ""}</Link>
      </div>
    </div>
  )
}

export default Header
