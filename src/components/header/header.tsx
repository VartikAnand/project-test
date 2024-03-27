import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';
// import Navbar from '../Navbar/Navbar';
const Header: React.FC = () => {
return (
<main className="dark:bg-gray-800 bg-white relative overflow-hidden h-screen Header">
<header className="h-24 sm:h-32 flex items-center z-30 w-full">
{/* <Navbar/> */}
{/* <div className="container mx-auto px-6 flex items-center justify-between">
<div className="uppercase text-gray-800 dark:text-white font-black text-3xl logo">
<img src='./logo.png'/>
</div>
<div className="flex items-center">
<nav className="font-sen text-gray-800 dark:text-white uppercase text-lg lg:flex items-
center hidden">
<Link href="#" className="py-2 px-6 flex">
Home
</Link>
<Link href="/pro" className="py-2 px-6 flex">
Projects
</Link>
<Link href="#" className="py-2 px-6 flex">
Product
</Link>
<Link href="/contact" className="py-2 px-6 flex">
Contact
</Link>
<Link href="#" className="py-2 px-6 flex">
{/* <Button>Login</Button> */}
{/* </Link>
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
</div> */}
</header>
{/* <Navbar/> */}


<div className=" md:flex bg-white dark:bg-gray-800 relative z-20 items-center overflow-hidden">
<div className="container mx-auto px-6  relative py-16">
<div className=" sm:w-2/3 lg:w-2/5  flex-col relative z-20">
<span className=" w-20 h-2 bg-gray-800 dark:bg-white mb-12"></span>
<h1 className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col
leading-none dark:text-white text-gray-800">
Designing
<span className="text-5xl sm:text-7xl"> Tommorow </span>
</h1>
<p className="text-sm sm:text-base text-gray-700 dark:text-white">
The graceful dance of form and functions, weaving together artistry and engineering to shape
our biult environment, where every line tells a story of culture and creativity.
</p>
<div className="flex mt-8">
<Link href="#" passHref
className="uppercase py-2 px-4 rounded-lg bg-black border-2 border-transparent text-white text-md mr-4 hover:bg-slate-700">
Our Team
</Link>
<Link href="/blog" passHref
className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-black text-black dark:text-white hover:bg-black hover:text-white text-md">
About Us
</Link>
</div>
</div>
<div className="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
<img src="" className="max-w-xs md:max-w-sm m-auto"/>
</div>
</div>
</div>
</main>
);
};
export default Header;