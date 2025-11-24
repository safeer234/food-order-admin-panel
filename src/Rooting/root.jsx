import React from 'react'
import { Menu, X } from 'lucide-react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
function Root() {

 
  
  
   
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
           <div className='z-1 absolute'>
             <Outlet /> 

        </div>
      <header className=" py-3 px-3 border-b  w- bg-white dark:bg-gray-900 dark:text-gray-100">
      
       
          <div className='flex items-center justify-between'>
            <div>
                 <NavLink className="font-bold text-[#57534e] text-3xl">
              Serve<span className='text-[#ef4444]'>It</span>
            </NavLink>
            <p>Admin panel</p>
          </div>

          
        <ul className="hidden lg:flex gap-6">
            <li className=' text-[#ef4444]'>Login</li>
            <li className='signupbtn border-[#ef4444] text-[#ef4444] flex items-center justify-center w-24 h-8 border-2 px-4 p-0.5 rounded-3xl'>
              <NavLink>Sign Up</NavLink>
            </li>
          </ul>


            </div>
           
           
        
      </header>
      <nav className=" justify-between border-x w-50 h-screen items-center px-6 py-4">
          
          
        

         
          <ul className="hidden lg:block py-8 ">
           <li className="text-[#57534e] flex items-center gap-3  dark:text-gray-200 mb-2  border-b border-y border-s w-43.5 h-10 text-lg hover:text-[#ef4444] dark:hover:text-[#ef4444]">
            <i className='bxr px-2  bx-package'></i> 
  <NavLink to='/products'>Products</NavLink>
</li>


<li className="text-[#57534e] flex items-center gap-3 mb-2 dark:text-gray-200 border-b border-y border-s w-43.5  h-10 text-lg hover:text-[#ef4444] dark:hover:text-[#ef4444]">
    <i className='bxr px-2 bx-check-square' ></i> 
  <NavLink to='/orders'>Orders</NavLink>
</li>


<li className="text-[#57534e] flex items-center gap-3 dark:text-gray-200 border-b border-y border-s w-43.5  h-10 text-lg hover:text-[#ef4444] dark:hover:text-[#ef4444]">
    <i className='bxr px-2  bx-user' ></i> 
  <NavLink to='/users'>Users</NavLink>
</li>

            
           


          </ul>

          
          

          {/* Hamburger Button */}
          <button
            className="lg:hidden text-[#57534e]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
        

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white shadow-lg p-5 space-y-5 text-center text-[#57534e]">
            <NavLink onClick={() => setIsOpen(false)} to="/home" className="block hover:text-[#ef4444]">Home</NavLink>
            <NavLink onClick={() => setIsOpen(false)} to="/menu" className="block hover:text-[#ef4444]">Menu</NavLink>
            <NavLink onClick={() => setIsOpen(false)} to="/menu" className="block hover:text-[#ef4444]">Orders</NavLink>
            <NavLink onClick={() => setIsOpen(false)} to="/about" className="block hover:text-[#ef4444]">About</NavLink>
            <NavLink onClick={() => setIsOpen(false)} to="/contact" className="block hover:text-[#ef4444]">Contact</NavLink>

            <hr />
            <NavLink className="text-[#ef4444] block">Login</NavLink>
            <NavLink className="border-[#ef4444] text-[#ef4444] border-2 px-4 py-1 rounded-3xl block">
              Sign Up
            </NavLink>
          </div>
        
        )}
       
        
    </div>
   
  )
}

export default Root
