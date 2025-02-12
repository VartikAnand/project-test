import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
const SliderSection = () => {
return (
<div className="bg-white dark:bg-gray-800 h-full py-6 sm:py-8 lg:py-12 slider">
<div className="mx-auto max-w-screen-2xl px-4 md:px-8">
<div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
<div className="flex items-center gap-12">
<h2 className="text-2xl font-bold text-gray-800 lg:text-3xl dark:text-white">Designs for
Future</h2>
<p className="hidden max-w-screen-sm text-gray-500 dark:text-gray-300 md:block">
Immerse yourself in the digital gallery of architectural marvels, where each click unveils
the visionary design of a talented architect, inviting you to wander through a landscape of creativity
and innovation.
</p>
</div>
<Link href="/pro"
className="inline-block rounded-lg border bg-white dark:bg-gray-700 dark:border-none px-
4 py-2 text-center text-sm font-semibold text-gray-500 dark:text-gray-200 outline-none ring-indigo-
300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3
md:text-base">
More
</Link>
</div>
<div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
<Link href="#"
className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100
shadow-lg md:h-80">
<Image fill src="/5.jpg" loading="lazy" alt="Photo by Minh Pham"
className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-
hover:scale-110" />
<div
className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-
transparent to-transparent opacity-50">
</div>
<span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-
lg"></span>
</Link>
<Link href="/pro"
className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100
shadow-lg md:col-span-2 md:h-80">
<img src="./3.jpg" loading="lazy" alt="Photo by Magicle" className="absolute inset-0 h-
full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
<div
className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-
transparent to-transparent opacity-50">
</div>
<span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-
lg"></span>
</Link>
<Link href="/pro"
className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100
shadow-lg md:col-span-2 md:h-80">
<img src="./7.jpg" loading="lazy" alt="Photo by Martin Sanchez"
className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-
hover:scale-110" />
<div
className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-
transparent to-transparent opacity-50">
</div>
<span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-
lg"></span>
</Link>
<Link href="/pro"
className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100
shadow-lg md:h-80 ">
<img src="./logo.png" loading="lazy" alt="Photo by Lorenzo Herrera" className="absolute
inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
<div
className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-
transparent to-transparent opacity-50">
</div>
<span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-
lg">N.J Design Studio</span>
</Link>
</div>
</div>
</div>
)
}
export default SliderSection