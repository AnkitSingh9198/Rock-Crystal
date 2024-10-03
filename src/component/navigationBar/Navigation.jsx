import React from 'react'
import { FaBasketShopping } from "react-icons/fa6";
import { GiCrystalGrowth } from "react-icons/gi";
import './navbar.css'

export default function Navigation() {
  return (
    <div>
        
        <div className='navbar'>
            <div className='nav'>
        <GiCrystalGrowth className='navicon' />
         <p className='para'>Pop Rock Crystal</p>
        </div>
        <div className='navhome'>
            <a className='link' href="">Home</a>
            <a className='link' href="">Shop</a>
            <a className='link' href="">About</a>
            <a className='link' href="">Help</a>
            <FaBasketShopping className='navicon2'/>
            </div>
            
        </div>
    </div>
  )
}
