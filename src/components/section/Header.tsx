
import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const Router = useRouter()
    const isNewContractPage:boolean = Router.pathname === '/newContract'

    if(isNewContractPage){
        return (
            <header className="w-full bg-gray-800 text-gray-100 body-font mb-4 shadow-sm hidden md:block">
                 <div className="container mx-auto flex justify-between items-center py-7 px-5">
                     {/* Site logo and Name */}
                    <Link href="/" className="flex flex-shrink-0 title-font font-medium items-center text-gray-900 md:mb-0">
                    <span className="ml-3 text-xl text-gray-100 font-semibold antialiased">Navbar 1</span>
                    </Link>
                 </div>
            </header>
        )
    }
  return (
    <header className="w-full bg-gray-800 text-gray-100 body-font mb-4 shadow-sm">

      {/* :DESKTOP MENU */}
      <div className="container mx-auto flex justify-between items-center py-7 px-5">
        {/* Site logo and Name */}
        <Link href="/" className="flex flex-shrink-0 title-font font-medium items-center text-gray-900 md:mb-0">
          {/* <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white p-2 bg-gradient-to-br from-pink-500 to-yellow-500 rounded-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg> */}
          <span className="ml-3 text-xl text-gray-100 font-semibold antialiased">Navbar 1</span>
        </Link>
        {/* Navbar */}
        <nav className="hidden md:ml-auto md:flex flex-wrap items-center justify-center text-base tracking-wide">
          <Link href="#product" className="mr-8 hover:text-gray-300">Product</Link>
          <Link href="#contract" className="mr-8 hover:text-gray-300">Contract</Link>
          <Link href="/newContract" className="mr-8 hover:text-gray-300">New Contract</Link>
        </nav>
        {/* Burger icon standard */}
        <button 
          className="md:hidden rounded-md active:outline-none focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 rounded-md text-gray-300 bg-gradient-to-br from-transparent to-transparent hover:text-white hover:from-pink-500 hover:to-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* :MOBILE MENU */}
      { isOpen &&
        <div className="w-9/12 h-full absolute top-0 flex flex-col py-8 px-3 md:hidden bg-gray-900 text-base font-semibold">
            <div className='mb-6'>
                <p>Contract</p>
                <ul>
                    <li>user contract1</li>
                    <li>user contract2</li>
                </ul>
                <Link href="/newContract" className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700">New Contract</Link>
            </div>
            <hr />
            <div>
                <a target='_blank' rel="noopener noreferrer" href="https://github.com/triramdhani/SimplyIOU"  className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700">Source Code</a>
            </div>
        </div>
      }
      
    </header>
  )
}

export default Header
