import React from 'react'
import Link from 'next/link';
import { motion } from 'framer-motion';


const Role = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -mx-4 -mb-10 text-center">
      <div className="sm:w-1/2 mb-10 px-4">
        <div className="rounded-lg h-64 overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src="https://res.cloudinary.com/dtyombve3/image/upload/v1717670648/xcumbeg4x4mpsngw7zbl.jpg"/>
        </div>
        <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Hire Worler</h2>
       
        <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              > <Link href="/login/Login" className="text-3xl font-bold hover:bg-White rounded-full text-purple-600 hover:px-2 transition-all">
               Login
                </Link>
              </motion.button>
      </div>
      <div className="sm:w-1/2 mb-10 px-4">
        <div className="rounded-lg h-64 overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src="https://res.cloudinary.com/dtyombve3/image/upload/v1717670647/ysrudqrimy5gygsfvvlu.jpg"/>
        </div>
        <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Get Hired</h2>
        <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              > <Link href="/worker/Worker" className="text-3xl font-bold hover:bg-White rounded-full text-purple-600 hover:px-2 transition-all">
               Login
                </Link>
              </motion.button>
     
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Role
