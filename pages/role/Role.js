import React from 'react'
import Link from 'next/link';
import { motion } from 'framer-motion';


const Role = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -mx-4 -mb-10 text-center">
      <Link href={"/login/Login"} className="sm:w-1/2 mb-10 px-4">
        <div href="/login/Login" className="rounded-lg h-64 overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full rounded-full w-full" src="https://res.cloudinary.com/dtyombve3/image/upload/v1718884741/mdj4dnikvwybg30tyhht.webp"/>
        </div>
        <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Hire Worker</h2>
       
        <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              > <Link href="/login/Login" className="bg-black dark:text-gray-300 shadow-lg mt-6 py-2 text-xl text-white hover:text-black font-bold rounded-full px-4 w-full hover:scale-105 hover:bg-white transition duration-300 ease-in-out">
               Login
                </Link>
              </motion.button>
      </Link>
      <Link href={"/login/Login"} className="sm:w-1/2 mb-10 px-4">
        <div className="rounded-lg h-64 overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full rounded-full" src="https://res.cloudinary.com/dtyombve3/image/upload/v1717670647/ysrudqrimy5gygsfvvlu.jpg"/>
        </div>
        <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Get Hired</h2>
        <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              > <Link href="/worker/Worker" className="bg-black dark:text-gray-300 shadow-lg mt-6 py-2 text-xl text-white hover:text-black font-bold rounded-full px-4 w-full hover:scale-105 hover:bg-white transition duration-300 ease-in-out">
               Login
                </Link>
              </motion.button>
     
      </Link>
    </div>
  </div>
</section>
    </div>
  )
}

export default Role
