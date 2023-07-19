import React, { useContext } from 'react'
import {Link} from 'react-router-dom'

export default function Footer() {

  return (
    <>
    <footer class="rounded-lg shadow p-4">
    <div class="p-6 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="/" class="flex items-center mb-4 sm:mb-0">
                
           
            <div className="text-red-600 xl:mr-10  mr-2 font-extrabold xl:text-3xl">
            NiceFlix
            </div>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0 text-gray-400">
                <li>
                    <a href='/' class="mr-4 hover:text-white md:mr-6 ">Home</a>
                </li>
                <li>
                    <Link to='/movies' href="/Projects" class="mr-4 hover:text-white md:mr-6">Movies</Link>
                </li>
                <li>
                    <Link to='/shows' class="mr-4 hover:text-white md:mr-6 ">Shows</Link>
                </li>
               
            </ul>
        </div>
        <hr class="my-6 sm:mx-auto border-gray-700 lg:my-4" />
        <div className='flex '>
        <div class="text-sm sm:text-center text-gray-400">© 2023 <a href="/" class="hover:underline">NiceFlix™</a>. All Rights Reserved.</div>
        <div className='ml-auto md:mr-5 flex space-x-2 md:space-x-8'>
            <a href="https://github.com/SHnice"><i class='bx bxl-github text-gray-400 text-2xl right hover:text-purple-400 hover:rotate-3'></i></a>
            <a href="https://www.linkedin.com/in/saddam-hussain-3719b2248"><i class='bx bxl-linkedin-square text-gray-400 text-2xl right hover:text-blue-500 hover:rotate-3 '></i></a>
            <a href="https://facebook.com/h.saarim"><i class='bx bxl-facebook-square text-gray-400 text-2xl right hover:text-sky-400 hover:rotate-3 '></i></a>
            <a href="https://instagram.com/sad_dam667"><i class='bx bxl-instagram text-gray-400 text-2xl right hover:text-pink-500 hover:rotate-3 '></i></a>
        </div>
        </div>
    </div>
</footer>
    </>
  )
}
