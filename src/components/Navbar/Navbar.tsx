import Link from 'next/link'
import React from 'react'
import { UserButton } from "@clerk/nextjs";
const Navbar = () => {
  return (
    <div><div className="container mx-auto px-6 flex items-center justify-between">
    <div className="uppercase text-gray-800 dark:text-white font-black text-3xl logo">
    <img src='./logo.png'/>
    </div>
    <div className="flex items-center">
    <nav className="font-sen text-gray-800 dark:text-white uppercase text-lg lg:flex items-
    center hidden">
    <Link href="/" className="py-2 px-6 flex">
    Home
    </Link>
    <Link href="/pro" className="py-2 px-6 flex">
    Projects
    </Link>
    {/* <Link href="#" className="py-2 px-6 flex">
    Product
    </Link> */}
    <Link href="/contact" className="py-2 px-6 flex">
    Contact
    </Link>
    <div className=''>
      <UserButton afterSignOutUrl='/' />
    </div>
    
    
    <Link href="/admin" className="py-2 px-6 flex items-center justify-center">
Admin 
    </Link>
   
    </nav>
    <button className="lg:hidden flex flex-col ml-4">
    <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
    </span>
    <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
    </span>
    <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
    </span>
    </button>
    </div>
    </div></div>
  )
}

export default Navbar