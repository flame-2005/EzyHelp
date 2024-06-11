// components/Navbar.js
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRef } from "react";
import { LuUser2 } from "react-icons/lu";
import { FaOpencart } from "react-icons/fa6";
import { MdAddCall } from "react-icons/md";
import { motion } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux'
import { FaQ } from "react-icons/fa6";
import { SlPicture } from "react-icons/sl";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    // Handle the search logic here
    console.log('Search query:', searchQuery);
  };

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/alpinejs@2.x.x/dist/alpine.min.js'; // Adjust the version if needed
    script.defer = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const [isVisible, setIsVisible] = useState(true);
  const prevScrollPos = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset || document.documentElement.scrollTop;
      const isScrolledUp = prevScrollPos.current > currentScrollPos || currentScrollPos === 0;
      setIsVisible(isScrolledUp);
      prevScrollPos.current = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll)
    };
  }, []);

  return (
    <section className={`bg-white shadow-md bg-blend-overlay z-40 font-poppins w-full sticky top-0z-20 navbar ${isVisible ? 'visible' : ''}`}>
      <div className=" md:px-6 py-1 bg-transparent mx-auto border-b-2 border-black"
        x-data="{open:false}">
        <div className="relative bg-transparent  flex  py-2"
        >
          <Link href={'/'}>
          
           <img src="https://res.cloudinary.com/dtyombve3/image/upload/v1718014519/bghejb2qjdoo7zievrql.png" alt="" className='h-10 rounded-full' />
          </Link>
          {/* <Example/> */}


          <ul className="w-screen lg:space-x-12 flex items-center justify-end">
            <li>
              {/* <div className="flex justify-center items-center border border-gray-300 bg-gray-200 rounded-full p-1 focus-within:border-purple-400 w-96">
                <div className="flex w-full item-self-center">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="p-2 w-full bg-transparent focus:outline-none focus:border-transparent"
                    placeholder="Search..."
                  />
                  <button
                    onClick={handleSearch}
                    className="text-black text-3xl "
                  >
                    <CiSearch />
                  </button>
                </div>
              </div> */}
            </li>
            <li>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              ><Link href="/contact/Contact" className="mx-5 md:mx-0 text-3xl font-bold hover:bg-White rounded-full text-black hover:px-2 transition-all">
                  <p className=' rounded-full w-full h-full'
                  ><MdAddCall /></p>
                </Link>
              </motion.button>


            </li>
            {/* <li>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              > <Link href="/" className="text-3xl font-bold hover:bg-White rounded-full text-black hover:px-2 transition-all">
                  <p className=' rounded-full w-full h-full'
                  ><FaOpencart /></p>
                </Link>
              </motion.button>

            </li> */}
            <li>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              > <Link href="/role/Role" className=" mx-5 md:mx-0 text-3xl font-bold hover:bg-White rounded-full text-black hover:px-2 transition-all">
                  <LuUser2 />
                </Link>
              </motion.button>

            </li>
            <li>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              > <Link href="/#faq" className=" mx-5 md:mx-0 text-3xl font-bold hover:bg-White rounded-full text-black hover:px-2 transition-all">
                  <FaQ />
                </Link>
              </motion.button>

            </li>
            <li>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              > <Link href="/#gallery" className=" mx-5 md:mx-0 text-3xl font-bold hover:bg-White rounded-full text-black hover:px-2 transition-all">
                  <SlPicture />
                </Link>
              </motion.button>

            </li>
            {/* <li>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              > <Link href="/" className="text-3xl font-bold hover:bg-White rounded-full text-black hover:px-2 transition-all">
                  {count}
                </Link>
              </motion.button>

            </li> */}

          </ul>
        </div>

        {/* Mobile Sidebar */}

      
      </div>
    </section>
  );
};

export default Navbar;
