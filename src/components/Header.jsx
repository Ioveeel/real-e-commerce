import React from 'react'
import {  NavLink, useLocation, useNavigate } from 'react-router-dom'

const Header = () => {
    let activeStyle = {
        color: 'black'
      };
    
      let activeClassName = "underline";
    const location = useLocation()
    const navigate = useNavigate()
   
  return (
    <div className='bg-white border-b shadow-sm sticky top-0 z-50'>
        <header className='flex justify-between items-center px-3 max-w-6xl mx-auto p-3'>
            <div>
                <h1 className='cursor-pointer' onClick={() => navigate('/')}>E-Commerce</h1>
            </div>
            <div>
                <ul className='flex space-x-10 '>
 <li>
     <NavLink className='py-3 text-sm font-semibold text-gray-400'
                to="/"
                style={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
              >
                Home
              </NavLink>
 </li>
 <li>
     <NavLink className='py-3 text-sm font-semibold text-gray-400'
                to="offers"
                style={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
              >
                Offers
              </NavLink>
 </li>
 <li>
     <NavLink className='py-3 text-sm font-semibold text-gray-400'
                to="sign-in"
                style={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
              >
                Sign In
              </NavLink>
 </li>
                    </ul>
            </div>
        </header>
    </div>
  )
}

export default Header