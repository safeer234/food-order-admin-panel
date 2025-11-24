
import { Menu, X } from 'lucide-react';
import { NavLink, Outlet } from 'react-router-dom';

function Root() {
 

  return (
    <div className="flex flex-col h-screen">

      {/* Header */}
      <header className="py-3 px-3 border-b bg-white dark:bg-gray-900 dark:text-gray-100">
        <div className="flex items-center justify-between">
          <div>
            <NavLink className="font-bold text-[#57534e] text-3xl">
              Serve<span className="text-[#ef4444]">It</span>
            </NavLink>
            <p>Admin panel</p>
          </div>

          <ul className="hidden lg:flex gap-6">
            <li className="text-[#ef4444]">Login</li>
            <li className="signupbtn border-[#ef4444] text-[#ef4444] flex items-center justify-center w-24 h-8 border-2 px-4 rounded-3xl">
              <NavLink>Sign Up</NavLink>
            </li>
          </ul>
        </div>
      </header>

   
      <div className="flex flex-1">

       
        <nav className="w-56 border-r bg-white px-6 py-4">
          <ul className="hidden lg:block space-y-4">
            <li className='border-b border-y border-s hover:border-[#ef4444]  px-2 w-50'>
              <NavLink to="/products" className="flex gap-2 text-center text-lg items-center hover:text-[#ef4444] ">
                <i className="bx bx-package"></i> Products
              </NavLink>
            </li>
            <li className='border-b border-y border-s hover:border-[#ef4444]  px-2 w-50'>
              <NavLink to="/orders" className="flex gap-2 items-center text-lg hover:text-[#ef4444]">
                <i className="bx bx-check-square"></i> Orders
              </NavLink>
            </li>
            <li className='border-b border-y border-s hover:border-[#ef4444]  px-2 w-50'>
              <NavLink to="/users" className="flex gap-2 items-center text-lg hover:text-[#ef4444]">
                <i className="bx bx-user"></i> Users
              </NavLink>
            </li>
          </ul>
        </nav>

       
        <main className="flex-2 mr-60  overflow-auto">
          <Outlet />  
        </main>

      </div>
    </div>
  );
}

export default Root;
