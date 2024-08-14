import Image from "next/image";
import { Inter } from "next/font/google";
import FaqSection from "./components/Faqs";
import Review from './components/review/Review'
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import Gallery from "./gallery/Gallery";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useDispatch, useSelector } from 'react-redux'
import { setValue, appendValue, clearValue } from '../redux/worker/worker'
import React, { useEffect } from 'react';
import Popup from './components/Popup';


export default function Home() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const [isPopupOpen1, setIsPopupOpen1] = useState(false);
  const [shouldRender1, setShouldRender1] = useState(false);
  const [isPopupOpen2, setIsPopupOpen2] = useState(false);
  const [shouldRender2, setShouldRender2] = useState(false);
  const [isPopupOpen3, setIsPopupOpen3] = useState(false);
  const [shouldRender3, setShouldRender3] = useState(false);
  const [isPopupOpen4, setIsPopupOpen4] = useState(false);
  const [shouldRender4, setShouldRender4] = useState(false);
  const [isPopupOpen5, setIsPopupOpen5] = useState(false);
  const [shouldRender5, setShouldRender5] = useState(false);
  const [isPopupOpen6, setIsPopupOpen6] = useState(false);
  const [shouldRender6, setShouldRender6] = useState(false);
  const [isPopupOpen7, setIsPopupOpen7] = useState(false);
  const [shouldRender7, setShouldRender7] = useState(false);
  const [isPopupOpen8, setIsPopupOpen8] = useState(false);
  const [shouldRender8, setShouldRender8] = useState(false);
  const [isPopupOpen9, setIsPopupOpen9] = useState(false);
  const [shouldRender9, setShouldRender9] = useState(false);
  const [isPopupOpen10, setIsPopupOpen10] = useState(false);
  const [shouldRender10, setShouldRender10] = useState(false);
  const [isPopupOpen11, setIsPopupOpen11] = useState(false);
  const [shouldRender11, setShouldRender11] = useState(false);
  const [isPopupOpen12, setIsPopupOpen12] = useState(false);
  const [shouldRender12, setShouldRender12] = useState(false);

  const dispatch = useDispatch()
  const worker = useSelector((state) => state.worker.value)
  const [inputValue, setInputValue] = useState("")

  const handleSetValue = (work) => {
    dispatch(setValue(work))
  }

  const handleAppendValue = () => {
    dispatch(appendValue(inputValue))
  }

  const handleClearValue = () => {
    dispatch(clearValue())
  }

  const [showPopup, setShowPopup] = useState(false);

  // useEffect(() => {
  //   const hasSeenPopup = localStorage.getItem('hasSeenPopup');
  //   if (!hasSeenPopup) {
  //     const timer = setTimeout(() => {
  //       setShowPopup(true);
  //       localStorage.setItem('hasSeenPopup', 'true');
  //     }, 2000);
      
  //     return () => clearTimeout(timer);
  //   }
  // }, []);


  const { ref: secondSectionRef, inView: secondSectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const { ref: thirdSectionRef, inView: thirdSectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const { ref: firstItemRef, inView: firstItemInView } = useInView({
    triggerOnce: true,
    threshold: 0.001,
    rootMargin: '0px -10% 0px 0px' // Adjusted the left margin (last value)
  });
  const { ref: secondItemRef, inView: secondItemInView } = useInView({
    triggerOnce: true,
    threshold: 0.001,
    rootMargin: '0px -10% 0px 0px' // Adjusted the left margin (last value)
  });
  const { ref: thirdItemRef, inView: thirdItemInView } = useInView({
    triggerOnce: true,
    threshold: 0.001,
    rootMargin: '0px -10% 0px 0px' // Adjusted the left margin (last value)
  });

  const togglePopup = () => {
    if (isPopupOpen) {
      setIsPopupOpen(false);
      setTimeout(() => setShouldRender(false), 100); // Delay removal for animation
    } else {
      setShouldRender(true);
      setTimeout(() => setIsPopupOpen(true), 0);
    }
  };
  const togglePopupCar = () => {
    if (isPopupOpen1) {
      setIsPopupOpen1(false);
      setTimeout(() => setShouldRender1(false), 100); // Delay removal for animation
    } else {
      setShouldRender1(true);
      setTimeout(() => setIsPopupOpen1(true), 0);
    }
  };
  const togglePopup4Mechanic = () => {
    if (isPopupOpen3) {
      setIsPopupOpen3(false);
      setTimeout(() => setShouldRender3(false), 100); // Delay removal for animation
    } else {
      setShouldRender3(true);
      setTimeout(() => setIsPopupOpen3(true), 0);
    }
  };
  const togglePopup2Mechanic = () => {
    if (isPopupOpen4) {
      setIsPopupOpen4(false);
      setTimeout(() => setShouldRender4(false), 100); // Delay removal for animation
    } else {
      setShouldRender4(true);
      setTimeout(() => setIsPopupOpen4(true), 0);
    }
  };
  const togglePopupBeautician = () => {
    if (isPopupOpen5) {
      setIsPopupOpen5(false);
      setTimeout(() => setShouldRender5(false), 100); // Delay removal for animation
    } else {
      setShouldRender5(true);
      setTimeout(() => setIsPopupOpen5(true), 0);
    }
  };
  const togglePopupBlackSmith = () => {
    if (isPopupOpen6) {
      setIsPopupOpen6(false);
      setTimeout(() => setShouldRender6(false), 100); // Delay removal for animation
    } else {
      setShouldRender6(true);
      setTimeout(() => setIsPopupOpen6(true), 0);
    }
  };
  const togglePopupCableTV = () => {
    if (isPopupOpen7) {
      setIsPopupOpen7(false);
      setTimeout(() => setShouldRender7(false), 100); // Delay removal for animation
    } else {
      setShouldRender7(true);
      setTimeout(() => setIsPopupOpen7(true), 0);
    }
  };
  const togglePopupGlasswaremanufacturing = () => {
    if (isPopupOpen8) {
      setIsPopupOpen8(false);
      setTimeout(() => setShouldRender8(false), 100); // Delay removal for animation
    } else {
      setShouldRender8(true);
      setTimeout(() => setIsPopupOpen8(true), 0);
    }
  };
  const togglePopupAutoservice = () => {
    if (isPopupOpen9) {
      setIsPopupOpen9(false);
      setTimeout(() => setShouldRender9(false), 100); // Delay removal for animation
    } else {
      setShouldRender9(true);
      setTimeout(() => setIsPopupOpen9(true), 0);
    }
  };
  const togglePopupHousemaid  = () => {
    if (isPopupOpen10) {
      setIsPopupOpen10(false);
      setTimeout(() => setShouldRender10(false), 100); // Delay removal for animation
    } else {
      setShouldRender10(true);
      setTimeout(() => setIsPopupOpen10(true), 0);
    }
  };
  const togglePopupLaundrywork = () => {
    if (isPopupOpen11) {
      setIsPopupOpen11(false);
      setTimeout(() => setShouldRender11(false), 100); // Delay removal for animation
    } else {
      setShouldRender11(true);
      setTimeout(() => setIsPopupOpen11(true), 0);
    }
  };
  const togglePopupReceptionist = () => {
    if (isPopupOpen12) {
      setIsPopupOpen12(false);
      setTimeout(() => setShouldRender12(false), 100); // Delay removal for animation
    } else {
      setShouldRender12(true);
      setTimeout(() => setIsPopupOpen12(true), 0);
    }
  };
  const togglePopupLabour = () => {
    if (isPopupOpen2) {
      setIsPopupOpen2(false);
      setTimeout(() => setShouldRender2(false), 100); // Delay removal for animation
    } else {
      setShouldRender2(true);
      setTimeout(() => setIsPopupOpen2(true), 0);
    }
  };

  const name = typeof window !== 'undefined' ? localStorage.getItem('name') : null;

  return (
    <>
       <div className="py-24 bg-gradient-to-r from-black to-white text-white">
       <h1 className="my-4 text-5xl font-bold text-center">
            Welcome {name}
          </h1>
      <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        {/* Left Col */}
    
        <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
          <p className="uppercase tracking-loose w-full">What we do?</p>
          <h1 className="my-4 text-5xl font-bold leading-tight">
            Transforming Trades, Empowering Home
          </h1>
          <p className="leading-normal text-2xl mb-8">
            Discover EzyHelp, where skilled craftsmanship meets seamless service for your every home improvement need.
          </p>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <div className="inline-flex bg-gradient-to-r from-black to-white text-white border-0 py-2 px-6 focus:outline-none text-lg rounded-full border-custom-orange">
              Explore
            </div>
          </motion.button>
        </div>
        {/* Right Col */}
        <div className="w-full md:w-3/5 py-6 text-center">
          <img
            className="w-full md:w-4/5 z-50"
            src="https://res.cloudinary.com/dtyombve3/image/upload/v1718883537/jykgqmd5eotkbfhhnk3d.png"
            alt="EzyHelp"
          />
        </div>
      </div>
      <Popup show={showPopup} onClose={() => setShowPopup(false)} />
    </div>
      <div className="relative -mt-12 lg:-mt-24 bg-gradient-to-r from-black to-white">
        <svg viewBox="0 0 1428 174" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g transform="translate(-2.000000, 44.000000)" fill="#FFFFFF" fill-rule="nonzero">
              <path d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496" opacity="0.100000001"></path>
              <path d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z" opacity="0.100000001"></path>
              <path d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z" id="Path-4" opacity="0.200000003"></path>
            </g>
            <g transform="translate(-4.000000, 76.000000)" fill="#FFFFFF" fill-rule="nonzero">
              <path d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"></path>
            </g>
          </g>
        </svg>
      </div>
      <section className={`text-gray-600 body-font`} id='tech'>
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center font-bold mb-10">
            <p className="inline-block text-4xl text-black">Service</p>
            <span className="inline-block">&nbsp;</span>
            <span className="inline-block">&nbsp;</span>
            <p className="inline-block text-4xl ">We Provide</p>
          </div>
          <div className="flex flex-wrap -m-4" >


            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="p-6 rounded-lg">
                <div className="w-full h-10 inline-flex items-center justify-center rounded-full text-custom-orange mb-4">
                  <img src="https://res.cloudinary.com/dtyombve3/image/upload/v1717845211/sqklhiitjaxf60xif3db.png" className="h-20" alt="" />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2 text-center">Electrician</h2>
                <p className="leading-relaxed text-base text-center">Our electrician will quickly fix all your electrical problems!</p>
              </div>
              <div className="flex justify-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >     <div
                  className="inline-flex bg-black text-white border-0 py-2 px-6 focus:outline-none text-lg rounded-full border-custom-orange"
                  onClick={() => {
                    togglePopup();
                    handleSetValue('Electrician')
                }}
                >
                    Book Now
                  </div>
                </motion.button>


                {shouldRender && (
                  <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className={`popup-content ${isPopupOpen ? 'open' : 'close'}`}>
                      <section className="text-gray-600 body-font overflow-hidden">
                        <div className="container px-5 py-8 mx-auto">
                          <div className="lg:w-4/5 mx-auto flex flex-wrap">
                            <img
                              alt="ecommerce"
                              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                              src="https://res.cloudinary.com/dtyombve3/image/upload/v1717666876/u1r4gu12yheaz8um8ago.jpg"
                            />
                            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                              <h2 className="text-sm title-font text-gray-500 tracking-widest">EzyHelp</h2>
                              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">Electrician</h1>
                              <div className="flex mb-4">
                                <span className="flex items-center">
                                  <svg
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-4 h-4 "
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                  </svg>
                                  <svg
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-4 h-4 "
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                  </svg>
                                  <svg
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-4 h-4 "
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                  </svg>
                                  <svg
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-4 h-4 "
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                  </svg>
                                  <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-4 h-4 "
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                  </svg>
                                  <span className="text-gray-600 ml-3">4 Reviews</span>
                                </span>
                                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                                  <a className="text-gray-500">
                                    <svg
                                      fill="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      className="w-5 h-5"
                                      viewBox="0 0 24 24"
                                    >
                                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                    </svg>
                                  </a>
                                  <a className="text-gray-500">
                                    <svg
                                      fill="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      className="w-5 h-5"
                                      viewBox="0 0 24 24"
                                    >
                                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                    </svg>
                                  </a>
                                  <a className="text-gray-500">
                                    <svg
                                      fill="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      className="w-5 h-5"
                                      viewBox="0 0 24 24"
                                    >
                                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                    </svg>
                                  </a>
                                </span>
                              </div>
                              <p className="leading-relaxed">
                                At EzyHelp, our electricians are highly skilled professionals dedicated to ensuring the safety and efficiency of your electrical systems. Each electrician is thoroughly vetted and trained to handle a wide range of electrical services, from simple repairs to complex installations. With EzyHelp, you can trust that our electricians will deliver top-notch service, adhere to industry standards, and prioritize your safety and satisfaction. Choose EzyHelp for reliable and expert electrical solutions.
                              </p>

                              <div className="">
                                <span className="title-font font-medium text-2xl text-gray-900"> ₹ 99</span>
                                <motion.button
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                ><Link
                                  href={'/payment/Payment'}
                                  className="inline-flex ml-5 bg-black text-white border-0 py-2 px-6 focus:outline-none text-lg rounded-full border-custom-orange"

                                >
                                    Hire
                                  </Link>
                                </motion.button>

                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      <button
                        className="absolute top-4 right-4 bg-red-500 text-white rounded-full p-2"
                        onClick={togglePopup}
                      >
                        <IoMdClose />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="p-6 rounded-lg">
                <div className="w-full h-10 inline-flex items-center justify-center rounded-full text-custom-orange mb-4">
                  <img src="https://res.cloudinary.com/dtyombve3/image/upload/v1717845573/lsaf993kk9p9uhlmkues.png" className="h-20" alt="" />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2 text-center">Carpenter</h2>
                <p className="leading-relaxed text-base text-center">Our carpenter will quickly fix all your carpentry problems</p>
              </div>
              <div className="flex justify-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={togglePopupCar}
                ><div
                  className="inline-flex bg-black text-white border-0 py-2 px-6 focus:outline-none text-lg rounded-full border-custom-orange"

                >
                    Book Now
                  </div>
                </motion.button>


                {shouldRender1 && (
                  <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className={`popup-content ${isPopupOpen1 ? 'open' : 'close'}`}>
                      <section className="text-gray-600 body-font overflow-hidden">
                        <div className="container px-5 py-8 mx-auto">
                          <div className="lg:w-4/5 mx-auto flex flex-wrap">
                            <img
                              alt="ecommerce"
                              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                              src="https://res.cloudinary.com/dtyombve3/image/upload/v1717666875/lvwufioyt4ftlkpuje26.jpg"
                            />
                            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                              <h2 className="text-sm title-font text-gray-500 tracking-widest">EzyHelp</h2>
                              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">Carpenter</h1>
                              <div className="flex mb-4">
                                <span className="flex items-center">
                                  <svg
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-4 h-4 "
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                  </svg>
                                  <svg
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-4 h-4 "
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                  </svg>
                                  <svg
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-4 h-4 "
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                  </svg>
                                  <svg
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-4 h-4 "
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                  </svg>
                                  <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-4 h-4 "
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                  </svg>
                                  <span className="text-gray-600 ml-3">4 Reviews</span>
                                </span>
                                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                                  <a className="text-gray-500">
                                    <svg
                                      fill="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      className="w-5 h-5"
                                      viewBox="0 0 24 24"
                                    >
                                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                    </svg>
                                  </a>
                                  <a className="text-gray-500">
                                    <svg
                                      fill="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      className="w-5 h-5"
                                      viewBox="0 0 24 24"
                                    >
                                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                    </svg>
                                  </a>
                                  <a className="text-gray-500">
                                    <svg
                                      fill="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      className="w-5 h-5"
                                      viewBox="0 0 24 24"
                                    >
                                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                    </svg>
                                  </a>
                                </span>
                              </div>
                              <p className="leading-relaxed">
                                At EzyHelp, our carpenters are master craftsmen committed to bringing your woodworking projects to life with precision and care. Whether it&apos;s custom furniture, cabinetry, or home renovations, our carpenters are thoroughly vetted and highly skilled in their trade. With a focus on quality and attention to detail, you can trust EzyHelp carpenters to deliver exceptional results that meet your exact specifications and enhance the beauty and functionality of your space.
                              </p>

                              <div className="">
                                <span className="title-font font-medium text-2xl text-gray-900">₹ 99</span>
                                <motion.button
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                ><Link
                                  href={'/payment/Payment'}
                                  className="inline-flex ml-5 bg-black text-white border-0 py-2 px-6 focus:outline-none text-lg rounded-full border-custom-orange"

                                >
                                    Hire
                                  </Link>
                                </motion.button>

                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      <button
                        className="absolute top-4 right-4 bg-red-500 text-white rounded-full p-2"
                        onClick={togglePopupCar}
                      >
                        <IoMdClose />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="p-6 rounded-lg">
                <div className="w-full h-10 inline-flex items-center justify-center rounded-full text-custom-orange mb-4">
                  <img src="https://res.cloudinary.com/dtyombve3/image/upload/v1717845211/vwcydexjsdmwwchvxsmm.png" className="h-20" alt="" />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2 text-center">Labour</h2>
                <p className="leading-relaxed text-base text-center">Our laborers will quickly fix all your labor needs!</p>
              </div>
              <div className="flex justify-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={togglePopupLabour}
                ><div
                  className="inline-flex ml-5 bg-black text-white border-0 py-2 px-6 focus:outline-none text-lg rounded-full border-custom-orange"

                >
                    Book Now
                  </div>
                </motion.button>


                {shouldRender2 && (
                  <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className={`popup-content ${isPopupOpen2 ? 'open' : 'close'}`}>
                      <section className="text-gray-600 body-font overflow-hidden">
                        <div className="container px-5 py-8 mx-auto">
                          <div className="lg:w-4/5 mx-auto flex flex-wrap">
                            <img
                              alt="ecommerce"
                              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                              src="https://res.cloudinary.com/dtyombve3/image/upload/v1717666908/wis6jdjuvhb5ahoon1vs.jpg"
                            />
                            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                              <h2 className="text-sm title-font text-gray-500 tracking-widest">EzyHelp</h2>
                              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">Labour</h1>
                              <div className="flex mb-4">
                                <span className="flex items-center">
                                  <svg
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-4 h-4 "
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                  </svg>
                                  <svg
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-4 h-4 "
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                  </svg>
                                  <svg
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-4 h-4 "
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                  </svg>
                                  <svg
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-4 h-4 "
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                  </svg>
                                  <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-4 h-4 "
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                  </svg>
                                  <span className="text-gray-600 ml-3">4 Reviews</span>
                                </span>
                                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                                  <a className="text-gray-500">
                                    <svg
                                      fill="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      className="w-5 h-5"
                                      viewBox="0 0 24 24"
                                    >
                                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                    </svg>
                                  </a>
                                  <a className="text-gray-500">
                                    <svg
                                      fill="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      className="w-5 h-5"
                                      viewBox="0 0 24 24"
                                    >
                                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                    </svg>
                                  </a>
                                  <a className="text-gray-500">
                                    <svg
                                      fill="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      className="w-5 h-5"
                                      viewBox="0 0 24 24"
                                    >
                                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                    </svg>
                                  </a>
                                </span>
                              </div>
                              <p className="leading-relaxed">
                                At EzyHelp, our laborers are dependable and hardworking professionals ready to assist with a variety of tasks, from moving and hauling to construction site support. Each laborer is carefully selected and trained to ensure they meet our high standards of reliability and efficiency. With EzyHelp, you can be confident that our laborers will provide the muscle and assistance you need to get the job done right, on time, and with the utmost professionalism.
                              </p>

                              <div className="">
                                <span className="title-font font-medium text-2xl text-gray-900">₹ 99</span>
                                <motion.button
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                ><Link
                                  href={'/payment/Payment'}
                                  className="inline-flex bg-black text-white border-0 py-2 px-6 focus:outline-none text-lg rounded-full border-custom-orange"

                                >
                                    Hire
                                  </Link>
                                </motion.button>

                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      <button
                        className="absolute top-4 right-4 bg-red-500 text-white rounded-full p-2"
                        onClick={togglePopupLabour}
                      >
                        <IoMdClose />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="p-6 rounded-lg">
                <div className="w-full h-10 inline-flex items-center justify-center rounded-full text-custom-orange mb-4">
                  <img src="https://res.cloudinary.com/dtyombve3/image/upload/v1718173767/osnxdnxzqdqqilg6jebn.png" className="h-20" alt="" />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2 text-center">4 Wheeler mechanic</h2>
                <p className="leading-relaxed text-base text-center">Our expert mechanic will swiftly solve all your 4-wheeler issues!</p>
              </div>
              <div className="flex justify-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={togglePopup4Mechanic}
                ><div
                  className="inline-flex ml-5 bg-black text-white border-0 py-2 px-6 focus:outline-none text-lg rounded-full border-custom-orange"

                >
                    Book Now
                  </div>
                </motion.button>


                {shouldRender3 && (
                  <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className={`popup-content ${isPopupOpen3 ? 'open' : 'close'}`}>
                      <section className="text-gray-600 body-font overflow-hidden">
                        <div className="container px-5 py-8 mx-auto">
                          <div className="lg:w-4/5 mx-auto flex flex-wrap">
                            <img
                              alt="ecommerce"
                              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                              src="https://res.cloudinary.com/dtyombve3/image/upload/v1718173778/aomhs5pyhdeg13io0hn9.jpg"
                            />
                            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                              <h2 className="text-sm title-font text-gray-500 tracking-widest">EzyHelp</h2>
                              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">4 Wheeler Mechanic</h1>
                              <div className="flex mb-4">
                                <span className="flex items-center">
                                  <svg
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-4 h-4 "
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                  </svg>
                                  <svg
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-4 h-4 "
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                  </svg>
                                  <svg
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-4 h-4 "
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                  </svg>
                                  <svg
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-4 h-4 "
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                  </svg>
                                  <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-4 h-4 "
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                  </svg>
                                  <span className="text-gray-600 ml-3">4 Reviews</span>
                                </span>
                                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                                  <a className="text-gray-500">
                                    <svg
                                      fill="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      className="w-5 h-5"
                                      viewBox="0 0 24 24"
                                    >
                                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                    </svg>
                                  </a>
                                  <a className="text-gray-500">
                                    <svg
                                      fill="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      className="w-5 h-5"
                                      viewBox="0 0 24 24"
                                    >
                                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                    </svg>
                                  </a>
                                  <a className="text-gray-500">
                                    <svg
                                      fill="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      className="w-5 h-5"
                                      viewBox="0 0 24 24"
                                    >
                                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                    </svg>
                                  </a>
                                </span>
                              </div>
                              <p className="leading-relaxed">
                              At EzyHelp, our four-wheeler mechanics are dependable and skilled professionals ready to assist with a variety of vehicle maintenance and repair tasks. Each mechanic is carefully selected and trained to meet our high standards of reliability and expertise. With EzyHelp, you can be confident that our mechanics will provide the quality service and technical proficiency you need to keep your vehicle running smoothly, on time, and with the utmost professionalism.
                              </p>

                              <div className="">
                                <span className="title-font font-medium text-2xl text-gray-900">₹ 99</span>
                                <motion.button
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                ><Link
                                  href={'/payment/Payment'}
                                  className="inline-flex bg-black text-white border-0 py-2 px-6 focus:outline-none text-lg rounded-full border-custom-orange"

                                >
                                    Hire
                                  </Link>
                                </motion.button>

                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      <button
                        className="absolute top-4 right-4 bg-red-500 text-white rounded-full p-2"
                        onClick={togglePopup4Mechanic}
                      >
                        <IoMdClose />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="p-6 rounded-lg">
                <div className="w-full h-10 inline-flex items-center justify-center rounded-full text-custom-orange mb-4">
                  <img src="https://res.cloudinary.com/dtyombve3/image/upload/v1718173767/t7vp7dvjvuafgoj3ogrd.png" className="h-20" alt="" />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2 text-center">2 wheeler mechanic 
                </h2>
                <p className="leading-relaxed text-base text-center">
                Our skilled mechanic will swiftly resolve all your 2-wheeler issues!</p>
              </div>
              <div className="flex justify-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={togglePopup2Mechanic}
                ><div
                  className="inline-flex ml-5 bg-black text-white border-0 py-2 px-6 focus:outline-none text-lg rounded-full border-custom-orange"

                >
                    Book Now
                  </div>
                </motion.button>


                {shouldRender4 && (
                  <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className={`popup-content ${isPopupOpen4 ? 'open' : 'close'}`}>
                      <section className="text-gray-600 body-font overflow-hidden">
                        <div className="container px-5 py-8 mx-auto">
                          <div className="lg:w-4/5 mx-auto flex flex-wrap">
                            <img
                              alt="ecommerce"
                              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                              src="https://res.cloudinary.com/dtyombve3/image/upload/v1718173773/cmes0by3cs5y87suvb8z.jpg"
                            />
                            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                              <h2 className="text-sm title-font text-gray-500 tracking-widest">EzyHelp</h2>
                              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">2 wheeler mechanic</h1>
                              <div className="flex mb-4">
                                <span className="flex items-center">
                                  <svg
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-4 h-4 "
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                  </svg>
                                  <svg
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-4 h-4 "
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                  </svg>
                                  <svg
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-4 h-4 "
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                  </svg>
                                  <svg
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-4 h-4 "
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                  </svg>
                                  <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-4 h-4 "
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                  </svg>
                                  <span className="text-gray-600 ml-3">4 Reviews</span>
                                </span>
                                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                                  <a className="text-gray-500">
                                    <svg
                                      fill="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      className="w-5 h-5"
                                      viewBox="0 0 24 24"
                                    >
                                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                    </svg>
                                  </a>
                                  <a className="text-gray-500">
                                    <svg
                                      fill="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      className="w-5 h-5"
                                      viewBox="0 0 24 24"
                                    >
                                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                    </svg>
                                  </a>
                                  <a className="text-gray-500">
                                    <svg
                                      fill="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      className="w-5 h-5"
                                      viewBox="0 0 24 24"
                                    >
                                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                    </svg>
                                  </a>
                                </span>
                              </div>
                              <p className="leading-relaxed">
                              At EzyHelp, our two-wheeler mechanics are dependable and skilled professionals ready to assist with a variety of motorcycle and scooter maintenance and repair tasks. Each mechanic is carefully selected and trained to meet our high standards of reliability and expertise. With EzyHelp, you can be confident that our mechanics will provide the quality service and technical proficiency you need to keep your two-wheeler running smoothly, on time, and with the utmost professionalism.
                              </p>

                              <div className="">
                                <span className="title-font font-medium text-2xl text-gray-900">₹ 99</span>
                                <motion.button
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                ><Link
                                  href={'/payment/Payment'}
                                  className="inline-flex bg-black text-white border-0 py-2 px-6 focus:outline-none text-lg rounded-full border-custom-orange"

                                >
                                    Hire
                                  </Link>
                                </motion.button>

                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      <button
                        className="absolute top-4 right-4 bg-red-500 text-white rounded-full p-2"
                        onClick={togglePopup2Mechanic}
                      >
                        <IoMdClose />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="p-6 rounded-lg">
                <div className="w-full h-10 inline-flex items-center justify-center rounded-full text-custom-orange mb-4">
                  <img src="https://res.cloudinary.com/dtyombve3/image/upload/v1718173767/wxvf05p5ppmbm18uuugj.png" className="h-20" alt="" />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2 text-center">Beautician 
                </h2>
                <p className="leading-relaxed text-base text-center">
                Our talented beautician will enhance your beauty in no time!</p>
              </div>
              <div className="flex justify-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={togglePopupBeautician}
                ><div
                  className="inline-flex ml-5 bg-black text-white border-0 py-2 px-6 focus:outline-none text-lg rounded-full border-custom-orange"

                >
                    Book Now
                  </div>
                </motion.button>


                {shouldRender5 && (
                  <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className={`popup-content ${isPopupOpen5 ? 'open' : 'close'}`}>
                      <section className="text-gray-600 body-font overflow-hidden">
                        <div className="container px-5 py-8 mx-auto">
                          <div className="lg:w-4/5 mx-auto flex flex-wrap">
                            <img
                              alt="ecommerce"
                              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                              src="https://res.cloudinary.com/dtyombve3/image/upload/v1718173774/xwy3cqrcgc6hn2x5btby.jpg"
                            />
                            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                              <h2 className="text-sm title-font text-gray-500 tracking-widest">EzyHelp
                              </h2>
                              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">Beautician</h1>
                              <div className="flex mb-4">
                                <span className="flex items-center">
                                  <svg
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-4 h-4 "
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                  </svg>
                                  <svg
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-4 h-4 "
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                  </svg>
                                  <svg
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-4 h-4 "
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                  </svg>
                                  <svg
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-4 h-4 "
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                  </svg>
                                  <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-4 h-4 "
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                  </svg>
                                  <span className="text-gray-600 ml-3">4 Reviews</span>
                                </span>
                                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                                  <a className="text-gray-500">
                                    <svg
                                      fill="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      className="w-5 h-5"
                                      viewBox="0 0 24 24"
                                    >
                                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                    </svg>
                                  </a>
                                  <a className="text-gray-500">
                                    <svg
                                      fill="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      className="w-5 h-5"
                                      viewBox="0 0 24 24"
                                    >
                                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                    </svg>
                                  </a>
                                  <a className="text-gray-500">
                                    <svg
                                      fill="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      className="w-5 h-5"
                                      viewBox="0 0 24 24"
                                    >
                                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                    </svg>
                                  </a>
                                </span>
                              </div>
                              <p className="leading-relaxed">
                                
At EzyHelp, our beauticians are dependable and skilled professionals ready to assist with a variety of beauty and personal care services. Each beautician is carefully selected and trained to meet our high standards of reliability and expertise. With EzyHelp, you can be confident that our beauticians will provide the quality service and attention to detail you need to look and feel your best, on time, and with the utmost professionalism.






                              </p>

                              <div className="">
                                <span className="title-font font-medium text-2xl text-gray-900">₹ 99</span>
                                <motion.button
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                ><Link
                                  href={'/payment/Payment'}
                                  className="inline-flex bg-black text-white border-0 py-2 px-6 focus:outline-none text-lg rounded-full border-custom-orange"

                                >
                                    Hire
                                  </Link>
                                </motion.button>

                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      <button
                        className="absolute top-4 right-4 bg-red-500 text-white rounded-full p-2"
                        onClick={togglePopupBeautician}
                      >
                        <IoMdClose />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="p-6 rounded-lg">
                <div className="w-full h-10 inline-flex items-center justify-center rounded-full text-custom-orange mb-4">
                  <img src="https://res.cloudinary.com/dtyombve3/image/upload/v1718173768/dx7ncui6yjjznkosjp4y.png" className="h-20" alt="" />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2 text-center">Black Smith</h2>
                <p className="leading-relaxed text-base text-center">Our expert blacksmith will craft and repair with precision and speed!</p>
              </div>
              <div className="flex justify-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={togglePopupBlackSmith}
                ><div
                  className="inline-flex ml-5 bg-black text-white border-0 py-2 px-6 focus:outline-none text-lg rounded-full border-custom-orange"

                >
                    Book Now
                  </div>
                </motion.button>


                {shouldRender6 && (
                  <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className={`popup-content ${isPopupOpen6 ? 'open' : 'close'}`}>
                      <section className="text-gray-600 body-font overflow-hidden">
                        <div className="container px-5 py-8 mx-auto">
                          <div className="lg:w-4/5 mx-auto flex flex-wrap">
                            <img
                              alt="ecommerce"
                              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                              src="https://res.cloudinary.com/dtyombve3/image/upload/v1718173776/zksnblnxs8e745cwspnz.jpg"
                            />
                            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                              <h2 className="text-sm title-font text-gray-500 tracking-widest">EzyHelp</h2>
                              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">Black Smith</h1>
                              <div className="flex mb-4">
                                <span className="flex items-center">
                                  <svg
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-4 h-4 "
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                  </svg>
                                  <svg
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-4 h-4 "
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                  </svg>
                                  <svg
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-4 h-4 "
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                  </svg>
                                  <svg
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-4 h-4 "
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                  </svg>
                                  <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-4 h-4 "
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                  </svg>
                                  <span className="text-gray-600 ml-3">4 Reviews</span>
                                </span>
                                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                                  <a className="text-gray-500">
                                    <svg
                                      fill="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      className="w-5 h-5"
                                      viewBox="0 0 24 24"
                                    >
                                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                    </svg>
                                  </a>
                                  <a className="text-gray-500">
                                    <svg
                                      fill="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      className="w-5 h-5"
                                      viewBox="0 0 24 24"
                                    >
                                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                    </svg>
                                  </a>
                                  <a className="text-gray-500">
                                    <svg
                                      fill="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      className="w-5 h-5"
                                      viewBox="0 0 24 24"
                                    >
                                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                    </svg>
                                  </a>
                                </span>
                              </div>
                              <p className="leading-relaxed">
                              At EzyHelp, our blacksmiths are dependable and skilled professionals ready to assist with a variety of metalworking tasks. Each blacksmith is carefully selected and trained to meet our high standards of reliability and craftsmanship. With EzyHelp, you can be confident that our blacksmiths will provide the quality work and expertise you need to get your metalworking projects done right, on time, and with the utmost professionalism.
                              </p>

                              <div className="">
                                <span className="title-font font-medium text-2xl text-gray-900">₹ 99</span>
                                <motion.button
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                ><Link
                                  href={'/payment/Payment'}
                                  className="inline-flex bg-black text-white border-0 py-2 px-6 focus:outline-none text-lg rounded-full border-custom-orange"

                                >
                                    Hire
                                  </Link>
                                </motion.button>

                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      <button
                        className="absolute top-4 right-4 bg-red-500 text-white rounded-full p-2"
                        onClick={togglePopupBlackSmith}
                      >
                        <IoMdClose />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="p-6 rounded-lg">
                <div className="w-full h-10 inline-flex items-center justify-center rounded-full text-custom-orange mb-4">
                  <img src="https://res.cloudinary.com/dtyombve3/image/upload/v1718173765/wj0gk8euf70msyfiukk0.png" className="h-20" alt="" />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2 text-center">Cable TV operation 
                </h2>
                <p className="leading-relaxed text-base text-center">Our skilled technicians will quickly resolve all your cable TV issues!</p>
              </div>
              <div className="flex justify-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={togglePopupCableTV}
                ><div
                  className="inline-flex ml-5 bg-black text-white border-0 py-2 px-6 focus:outline-none text-lg rounded-full border-custom-orange"

                >
                    Book Now
                  </div>
                </motion.button>


                {shouldRender7 && (
                  <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className={`popup-content ${isPopupOpen7 ? 'open' : 'close'}`}>
                      <section className="text-gray-600 body-font overflow-hidden">
                        <div className="container px-5 py-8 mx-auto">
                          <div className="lg:w-4/5 mx-auto flex flex-wrap">
                            <img
                              alt="ecommerce"
                              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                              src="https://res.cloudinary.com/dtyombve3/image/upload/v1718173769/bwjm7rozlnynhbb2ee04.jpg"
                            />
                            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                              <h2 className="text-sm title-font text-gray-500 tracking-widest">EzyHelp</h2>
                              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">Cable TV operation 
                              </h1>
                              <div className="flex mb-4">
                                <span className="flex items-center">
                                  <svg
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-4 h-4 "
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                  </svg>
                                  <svg
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-4 h-4 "
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                  </svg>
                                  <svg
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-4 h-4 "
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                  </svg>
                                  <svg
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-4 h-4 "
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                  </svg>
                                  <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-4 h-4 "
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                  </svg>
                                  <span className="text-gray-600 ml-3">4 Reviews</span>
                                </span>
                                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                                  <a className="text-gray-500">
                                    <svg
                                      fill="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      className="w-5 h-5"
                                      viewBox="0 0 24 24"
                                    >
                                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                    </svg>
                                  </a>
                                  <a className="text-gray-500">
                                    <svg
                                      fill="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      className="w-5 h-5"
                                      viewBox="0 0 24 24"
                                    >
                                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                    </svg>
                                  </a>
                                  <a className="text-gray-500">
                                    <svg
                                      fill="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      className="w-5 h-5"
                                      viewBox="0 0 24 24"
                                    >
                                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                    </svg>
                                  </a>
                                </span>
                              </div>
                              <p className="leading-relaxed">
                              At EzyHelp, our cable TV operators are dependable and skilled professionals ready to assist with a variety of installation and maintenance tasks. Each operator is carefully selected and trained to meet our high standards of reliability and technical expertise. With EzyHelp, you can be confident that our cable TV operators will provide the quality service and support you need to keep your system running smoothly, on time, and with the utmost professionalism.
                              </p>

                              <div className="">
                                <span className="title-font font-medium text-2xl text-gray-900">₹ 99</span>
                                <motion.button
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                ><Link
                                  href={'/payment/Payment'}
                                  className="inline-flex bg-black text-white border-0 py-2 px-6 focus:outline-none text-lg rounded-full border-custom-orange"

                                >
                                    Hire
                                  </Link>
                                </motion.button>

                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      <button
                        className="absolute top-4 right-4 bg-red-500 text-white rounded-full p-2"
                        onClick={togglePopupCableTV}
                      >
                        <IoMdClose />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="p-6 rounded-lg">
                <div className="w-full h-10 inline-flex items-center justify-center rounded-full text-custom-orange mb-4">
                  <img src="https://res.cloudinary.com/dtyombve3/image/upload/v1718173767/jsrvabjdwvacowhev5jj.png" className="h-20" alt="" />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2 text-center">Glass ware manufacturing 
                </h2>
                <p className="leading-relaxed text-base text-center">Our craftsmen will meticulously create your glassware with precision and care!</p>
              </div>
              <div className="flex justify-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={togglePopupGlasswaremanufacturing}
                ><div
                  className="inline-flex ml-5 bg-black text-white border-0 py-2 px-6 focus:outline-none text-lg rounded-full border-custom-orange"

                >
                    Book Now
                  </div>
                </motion.button>


                {shouldRender8 && (
                  <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className={`popup-content ${isPopupOpen8 ? 'open' : 'close'}`}>
                      <section className="text-gray-600 body-font overflow-hidden">
                        <div className="container px-5 py-8 mx-auto">
                          <div className="lg:w-4/5 mx-auto flex flex-wrap">
                            <img
                              alt="ecommerce"
                              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                              src="https://res.cloudinary.com/dtyombve3/image/upload/v1718173766/exjwytmdcpwrybouawve.jpg"
                            />
                            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                              <h2 className="text-sm title-font text-gray-500 tracking-widest">EzyHelp</h2>
                              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">Glass ware manufacturing 
                              </h1>
                              <div className="flex mb-4">
                                <span className="flex items-center">
                                  <svg
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-4 h-4 "
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                  </svg>
                                  <svg
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-4 h-4 "
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                  </svg>
                                  <svg
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-4 h-4 "
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                  </svg>
                                  <svg
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-4 h-4 "
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                  </svg>
                                  <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-4 h-4 "
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                  </svg>
                                  <span className="text-gray-600 ml-3">4 Reviews</span>
                                </span>
                                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                                  <a className="text-gray-500">
                                    <svg
                                      fill="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      className="w-5 h-5"
                                      viewBox="0 0 24 24"
                                    >
                                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                    </svg>
                                  </a>
                                  <a className="text-gray-500">
                                    <svg
                                      fill="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      className="w-5 h-5"
                                      viewBox="0 0 24 24"
                                    >
                                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                    </svg>
                                  </a>
                                  <a className="text-gray-500">
                                    <svg
                                      fill="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      className="w-5 h-5"
                                      viewBox="0 0 24 24"
                                    >
                                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                    </svg>
                                  </a>
                                </span>
                              </div>
                              <p className="leading-relaxed">
                               At EzyHelp, our glassware manufacturers are dependable and skilled professionals ready to assist with a variety of production tasks. Each manufacturer is carefully selected and trained to meet our high standards of reliability and craftsmanship. With EzyHelp, you can be confident that our glassware manufacturers will provide the quality work and precision you need to produce exceptional glass products, on time, and with the utmost professionalism.
                              </p>

                              <div className="">
                                <span className="title-font font-medium text-2xl text-gray-900">₹ 99</span>
                                <motion.button
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                ><Link
                                  href={'/payment/Payment'}
                                  className="inline-flex bg-black text-white border-0 py-2 px-6 focus:outline-none text-lg rounded-full border-custom-orange"

                                >
                                    Hire
                                  </Link>
                                </motion.button>

                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      <button
                        className="absolute top-4 right-4 bg-red-500 text-white rounded-full p-2"
                        onClick={togglePopupGlasswaremanufacturing}
                      >
                        <IoMdClose />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="p-6 rounded-lg">
                <div className="w-full h-10 inline-flex items-center justify-center rounded-full text-custom-orange mb-4">
                  <img src="https://res.cloudinary.com/dtyombve3/image/upload/v1718173769/dugpiogw1vduacabhyti.png" className="h-20" alt="" />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2 text-center">Auto service&apos;s 
                </h2>
                <p className="leading-relaxed text-base text-center">Our auto taxi service will get you to your destination safely and promptly!</p>
              </div>
              <div className="flex justify-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={togglePopupAutoservice}
                ><div
                  className="inline-flex ml-5 bg-black text-white border-0 py-2 px-6 focus:outline-none text-lg rounded-full border-custom-orange"

                >
                    Book Now
                  </div>
                </motion.button>


                {shouldRender9 && (
                  <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className={`popup-content ${isPopupOpen9 ? 'open' : 'close'}`}>
                      <section className="text-gray-600 body-font overflow-hidden">
                        <div className="container px-5 py-8 mx-auto">
                          <div className="lg:w-4/5 mx-auto flex flex-wrap">
                            <img
                              alt="ecommerce"
                              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                              src="https://res.cloudinary.com/dtyombve3/image/upload/v1718173768/adnm9r0knsvdaicy9cu0.jpg"
                            />
                            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                              <h2 className="text-sm title-font text-gray-500 tracking-widest">EzyHelp</h2>
                              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">Auto service&apos;s 
                              </h1>
                              <div className="flex mb-4">
                                <span className="flex items-center">
                                  <svg
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-4 h-4 "
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                  </svg>
                                  <svg
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-4 h-4 "
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                  </svg>
                                  <svg
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-4 h-4 "
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                  </svg>
                                  <svg
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-4 h-4 "
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                  </svg>
                                  <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-4 h-4 "
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                  </svg>
                                  <span className="text-gray-600 ml-3">4 Reviews</span>
                                </span>
                                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                                  <a className="text-gray-500">
                                    <svg
                                      fill="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      className="w-5 h-5"
                                      viewBox="0 0 24 24"
                                    >
                                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                    </svg>
                                  </a>
                                  <a className="text-gray-500">
                                    <svg
                                      fill="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      className="w-5 h-5"
                                      viewBox="0 0 24 24"
                                    >
                                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                    </svg>
                                  </a>
                                  <a className="text-gray-500">
                                    <svg
                                      fill="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      className="w-5 h-5"
                                      viewBox="0 0 24 24"
                                    >
                                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                    </svg>
                                  </a>
                                </span>
                              </div>
                              <p className="leading-relaxed">
                                
At EzyHelp, our auto service professionals are dependable and skilled technicians ready to assist with a variety of vehicle maintenance and repair tasks. Each technician is carefully selected and trained to meet our high standards of reliability and expertise. With EzyHelp, you can be confident that our auto service team will provide the quality care and technical proficiency you need to keep your vehicle running smoothly, on time, and with the utmost professionalism.
                              </p>

                              <div className="">
                                <span className="title-font font-medium text-2xl text-gray-900">₹ 99</span>
                                <motion.button
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                ><Link
                                  href={'/payment/Payment'}
                                  className="inline-flex bg-black text-white border-0 py-2 px-6 focus:outline-none text-lg rounded-full border-custom-orange"

                                >
                                    Hire
                                  </Link>
                                </motion.button>

                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      <button
                        className="absolute top-4 right-4 bg-red-500 text-white rounded-full p-2"
                        onClick={togglePopupAutoservice}
                      >
                        <IoMdClose />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="p-6 rounded-lg">
                <div className="w-full h-10 inline-flex items-center justify-center rounded-full text-custom-orange mb-4">
                  <img src="https://res.cloudinary.com/dtyombve3/image/upload/v1718182225/snmrcqhdtwdotaxeflqg.png" className="h-20" alt="" />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2 text-center">House maid </h2>
                <p className="leading-relaxed text-base text-center">
                Our housemaid service will efficiently manage your household needs with care and expertise!</p>
              </div>
              <div className="flex justify-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={togglePopupHousemaid}
                ><div
                  className="inline-flex ml-5 bg-black text-white border-0 py-2 px-6 focus:outline-none text-lg rounded-full border-custom-orange"

                >
                    Book Now
                  </div>
                </motion.button>


                {shouldRender10 && (
                  <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className={`popup-content ${isPopupOpen10 ? 'open' : 'close'}`}>
                      <section className="text-gray-600 body-font overflow-hidden">
                        <div className="container px-5 py-8 mx-auto">
                          <div className="lg:w-4/5 mx-auto flex flex-wrap">
                            <img
                              alt="ecommerce"
                              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                              src="https://res.cloudinary.com/dtyombve3/image/upload/v1718173765/aoeyjrvknfoc9lo8wewu.jpg"
                            />
                            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                              <h2 className="text-sm title-font text-gray-500 tracking-widest">EzyHelp</h2>
                              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">House maid</h1>
                              <div className="flex mb-4">
                                <span className="flex items-center">
                                  <svg
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-4 h-4 "
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                  </svg>
                                  <svg
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-4 h-4 "
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                  </svg>
                                  <svg
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-4 h-4 "
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                  </svg>
                                  <svg
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-4 h-4 "
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                  </svg>
                                  <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-4 h-4 "
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                  </svg>
                                  <span className="text-gray-600 ml-3">4 Reviews</span>
                                </span>
                                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                                  <a className="text-gray-500">
                                    <svg
                                      fill="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      className="w-5 h-5"
                                      viewBox="0 0 24 24"
                                    >
                                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                    </svg>
                                  </a>
                                  <a className="text-gray-500">
                                    <svg
                                      fill="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      className="w-5 h-5"
                                      viewBox="0 0 24 24"
                                    >
                                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                    </svg>
                                  </a>
                                  <a className="text-gray-500">
                                    <svg
                                      fill="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      className="w-5 h-5"
                                      viewBox="0 0 24 24"
                                    >
                                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                    </svg>
                                  </a>
                                </span>
                              </div>
                              <p className="leading-relaxed">
                              At EzyHelp, our housemaids are dependable and skilled professionals ready to assist with a variety of household tasks. Each housemaid is carefully selected and trained to meet our high standards of reliability and thoroughness. With EzyHelp, you can be confident that our housemaids will provide the quality service and attention to detail you need to keep your home clean and organized, on time, and with the utmost professionalism.
                              </p>

                              <div className="">
                                <span className="title-font font-medium text-2xl text-gray-900">₹ 99</span>
                                <motion.button
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                ><Link
                                  href={'/payment/Payment'}
                                  className="inline-flex bg-black text-white border-0 py-2 px-6 focus:outline-none text-lg rounded-full border-custom-orange"

                                >
                                    Hire
                                  </Link>
                                </motion.button>

                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      <button
                        className="absolute top-4 right-4 bg-red-500 text-white rounded-full p-2"
                        onClick={togglePopupHousemaid}
                      >
                        <IoMdClose />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="p-6 rounded-lg">
                <div className="w-full h-10 inline-flex items-center justify-center rounded-full text-custom-orange mb-4">
                  <img src="https://res.cloudinary.com/dtyombve3/image/upload/v1718173768/slr8gj6itnxycyzrxwhl.png" className="h-20" alt="" />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2 text-center">Laundry work</h2>
                <p className="leading-relaxed text-base text-center">Our laundry service will swiftly handle all your laundry needs with care and precision!</p>
              </div>
              <div className="flex justify-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={togglePopupLaundrywork}
                ><div
                  className="inline-flex ml-5 bg-black text-white border-0 py-2 px-6 focus:outline-none text-lg rounded-full border-custom-orange"

                >
                    Book Now
                  </div>
                </motion.button>


                {shouldRender11 && (
                  <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className={`popup-content ${isPopupOpen11 ? 'open' : 'close'}`}>
                      <section className="text-gray-600 body-font overflow-hidden">
                        <div className="container px-5 py-8 mx-auto">
                          <div className="lg:w-4/5 mx-auto flex flex-wrap">
                            <img
                              alt="ecommerce"
                              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                              src="https://res.cloudinary.com/dtyombve3/image/upload/v1718173766/p8ide7wbglrmpk7twkap.jpg"
                            />
                            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                              <h2 className="text-sm title-font text-gray-500 tracking-widest">EzyHelp</h2>
                              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">Laundry work</h1>
                              <div className="flex mb-4">
                                <span className="flex items-center">
                                  <svg
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-4 h-4 "
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                  </svg>
                                  <svg
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-4 h-4 "
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                  </svg>
                                  <svg
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-4 h-4 "
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                  </svg>
                                  <svg
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-4 h-4 "
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                  </svg>
                                  <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-4 h-4 "
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                  </svg>
                                  <span className="text-gray-600 ml-3">4 Reviews</span>
                                </span>
                                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                                  <a className="text-gray-500">
                                    <svg
                                      fill="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      className="w-5 h-5"
                                      viewBox="0 0 24 24"
                                    >
                                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                    </svg>
                                  </a>
                                  <a className="text-gray-500">
                                    <svg
                                      fill="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      className="w-5 h-5"
                                      viewBox="0 0 24 24"
                                    >
                                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                    </svg>
                                  </a>
                                  <a className="text-gray-500">
                                    <svg
                                      fill="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      className="w-5 h-5"
                                      viewBox="0 0 24 24"
                                    >
                                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                    </svg>
                                  </a>
                                </span>
                              </div>
                              <p className="leading-relaxed">
                              At EzyHelp, our laundry workers are dependable and skilled professionals ready to assist with a variety of laundry tasks. Each worker is carefully selected and trained to meet our high standards of reliability and efficiency. With EzyHelp, you can be confident that our laundry workers will provide the quality service and attention to detail you need to keep your clothes clean and well-maintained, on time, and with the utmost professionalism.
                              </p>

                              <div className="">
                                <span className="title-font font-medium text-2xl text-gray-900">₹ 99</span>
                                <motion.button
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                ><Link
                                  href={'/payment/Payment'}
                                  className="inline-flex bg-black text-white border-0 py-2 px-6 focus:outline-none text-lg rounded-full border-custom-orange"

                                >
                                    Hire
                                  </Link>
                                </motion.button>

                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      <button
                        className="absolute top-4 right-4 bg-red-500 text-white rounded-full p-2"
                        onClick={togglePopupLaundrywork}
                      >
                        <IoMdClose />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="p-6 rounded-lg">
                <div className="w-full h-10 inline-flex items-center justify-center rounded-full text-custom-orange mb-4">
                  <img src="https://res.cloudinary.com/dtyombve3/image/upload/v1718174036/yuwg3nco60zlmtod3z5m.png" className="h-20" alt="" />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2 text-center">Receptionist</h2>
                <p className="leading-relaxed text-base text-center">Our receptionist will warmly welcome and efficiently assist you with any inquiries or needs!</p>
              </div>
              <div className="flex justify-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={togglePopupReceptionist}
                ><div
                  className="inline-flex ml-5 bg-black text-white border-0 py-2 px-6 focus:outline-none text-lg rounded-full border-custom-orange"

                >
                    Book Now
                  </div>
                </motion.button>


                {shouldRender12 && (
                  <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className={`popup-content ${isPopupOpen12 ? 'open' : 'close'}`}>
                      <section className="text-gray-600 body-font overflow-hidden">
                        <div className="container px-5 py-8 mx-auto">
                          <div className="lg:w-4/5 mx-auto flex flex-wrap">
                            <img
                              alt="ecommerce"
                              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                              src="https://res.cloudinary.com/dtyombve3/image/upload/v1718174052/awid4jzdiypypc6h0l7d.jpg"
                            />
                            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                              <h2 className="text-sm title-font text-gray-500 tracking-widest">EzyHelp</h2>
                              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">Receptionist</h1>
                              <div className="flex mb-4">
                                <span className="flex items-center">
                                  <svg
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-4 h-4 "
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                  </svg>
                                  <svg
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-4 h-4 "
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                  </svg>
                                  <svg
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-4 h-4 "
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                  </svg>
                                  <svg
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-4 h-4 "
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                  </svg>
                                  <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-4 h-4 "
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                  </svg>
                                  <span className="text-gray-600 ml-3">4 Reviews</span>
                                </span>
                                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                                  <a className="text-gray-500">
                                    <svg
                                      fill="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      className="w-5 h-5"
                                      viewBox="0 0 24 24"
                                    >
                                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                    </svg>
                                  </a>
                                  <a className="text-gray-500">
                                    <svg
                                      fill="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      className="w-5 h-5"
                                      viewBox="0 0 24 24"
                                    >
                                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                    </svg>
                                  </a>
                                  <a className="text-gray-500">
                                    <svg
                                      fill="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      className="w-5 h-5"
                                      viewBox="0 0 24 24"
                                    >
                                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                    </svg>
                                  </a>
                                </span>
                              </div>
                              <p className="leading-relaxed">
                              At EzyHelp, our receptionists are dependable and skilled professionals ready to assist with a variety of administrative and front desk tasks. Each receptionist is carefully selected and trained to meet our high standards of reliability and efficiency. With EzyHelp, you can be confident that our receptionists will provide the quality service and organizational support you need to keep your office running smoothly, on time, and with the utmost professionalism.
                              </p>

                              <div className="">
                                <span className="title-font font-medium text-2xl text-gray-900">₹ 99</span>
                                <motion.button
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                ><Link
                                  href={'/payment/Payment'}
                                  className="inline-flex bg-black text-white border-0 py-2 px-6 focus:outline-none text-lg rounded-full border-custom-orange"

                                >
                                    Hire
                                  </Link>
                                </motion.button>

                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      <button
                        className="absolute top-4 right-4 bg-red-500 text-white rounded-full p-2"
                        onClick={togglePopupReceptionist}
                      >
                        <IoMdClose />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button> */}
        </div>
      </section>
      <section className="flex items-center font-poppins mt-10">
        <div className={`justify-center flex-1 mx-auto max-w-8xl overflow-hidden lg:py-4`}>
          <div ref={secondSectionRef} className={`text-center mb-5 ${secondSectionInView ? 'animate__animated animate__bounceInUp fade-in' : 'fade-out'}`}>
            <div className="text-center font-bold">
              <p className="inline-block text-4xl text-black">How does it </p>
              <span className="inline-block">&nbsp;</span>
              <span className="inline-block">&nbsp;</span>
              <p className="inline-block text-4xl ">WORKS?</p>
            </div>
          </div>
          <div ref={firstItemRef} className={`flex flex-wrap justify-center mt-10 ${firstItemInView ? 'slide-in-right' : 'slide-out-right'}`}>

            <div className="w-full p-2 rounded-xl   px-4 mb-10 sm:w-1/2 lg:w-1/3 xl:w-1/6 md:mr-2 mx-10 md:mx-0 bg-opacity-50 backdrop-blur-3xl ">
              <div className="mx-auto text-center ">
                <div
                  className=" mx-auto inline-block mb-3 overflow-hidden text-xs text-white w-24 h-24">
                  <img className="mx-auto  object-cover w-full h-full transition-all "
                    src="https://res.cloudinary.com/dtyombve3/image/upload/v1717845211/fio5joa2xy0np02np7ml.png" alt="" />
                </div>
                <h2 className="mb-2 text-xl text-center font-semibold text-gray-800 ">Book order</h2>


              </div>
            </div>
            <div className="w-full border-black p-2 rounded-xl   px-4 mb-10 sm:w-1/2 lg:w-1/3 xl:w-1/6 md:mr-2 mx-10 md:mx-0 bg-opacity-50 backdrop-blur-3xl ">
              <div className="mx-auto text-center ">
                <div
                  className="inline-block mb-3 overflow-hidden text-xs text-white rounded-fullw-24 h-24">
                  <img className="object-cover w-full h-full transition-all "
                    src="https://res.cloudinary.com/dtyombve3/image/upload/v1717845211/nehjwek8orgrqdtmn0rn.png" alt="" />
                </div>
                <h2 className="mb-2 text-xl font-semibold text-gray-800 ">Get best Expert</h2>
                {/* <span className="inline-block mb-6 text-base font-medium text-blue-500 ">MBA
                                        </span> */}

              </div>
            </div>
            <div className="w-full border-black p-2 rounded-xl   px-4 mb-10 sm:w-1/2 lg:w-1/3 xl:w-1/6 md:mr-2 mx-10 md:mx-0 bg-opacity-50 backdrop-blur-3xl ">
              <div className="mx-auto text-center ">
                <div
                  className="inline-block mb-3 overflow-hidden text-xs text-white rounded-fullw-24 h-24">
                  <img className="object-cover w-full h-full transition-all "
                    src="https://res.cloudinary.com/dtyombve3/image/upload/v1717845211/adh0r84rnp5dvzhyhbf2.png" alt="" />
                </div>
                <h2 className="mb-2 text-xl font-semibold text-gray-800 ">Expert solution</h2>
                {/* <span className="inline-block mb-6 text-base font-medium text-blue-500 ">B Tech
                                        </span> */}

              </div>
            </div>
            <div className="w-full border-black p-2 rounded-xl   px-4 mb-10 sm:w-1/2 lg:w-1/3 xl:w-1/6 md:mr-2 mx-10 md:mx-0 bg-opacity-50 backdrop-blur-3xl " >
              <div className="mx-auto text-center ">
                <div
                  className="inline-block mb-3 overflow-hidden text-xs text-white  rounded-fullw-24 h-24">
                  <img className="object-cover w-full h-full transition-all "
                    src="https://res.cloudinary.com/dtyombve3/image/upload/v1717845212/as7tergislebj14fdp6w.png" alt="" />
                </div>
                <h2 className="mb-2 text-xl font-semibold text-gray-800 ">Expert analysis</h2>
                {/* <span className="inline-block mb-6 text-base font-medium text-blue-500 ">B Tech
                                        </span> */}

              </div>
            </div>
            <div className="w-full border-black p-2 rounded-xl   px-4 mb-10 sm:w-1/2 lg:w-1/3 xl:w-1/6 md:mr-2 mx-10 md:mx-0 bg-opacity-50 backdrop-blur-3xl ">
              <div className="mx-auto text-center ">
                <div
                  className="inline-block mb-3 overflow-hidden text-xs text-white rounded-fullw-24 h-24">
                  <img className="object-cover w-full h-full transition-all "
                    src="https://res.cloudinary.com/dtyombve3/image/upload/v1717845212/wl5rql02tnwncmpibvkd.png" alt="" />
                </div>
                <h2 className="mb-2 text-xl font-semibold text-gray-800 ">Solution in no time</h2>
                {/* <span
                                            className="inline-block mb-6 text-base font-medium text-blue-500 ">MBBS
                                        </span> */}

              </div>
            </div>
          </div>
        </div>
      </section>


      <div>
        <div className=" mb-5">

        </div>
        <section ref={thirdSectionRef} className={`flex items-center py-24  font-poppins ${thirdSectionInView ? 'animate__animated animate__bounceInUp fade-in' : 'fade-out'} `}>
          <div className="justify-center flex-1 px-4 py-6 mx-auto max-w-7xl lg:py-4 md:px-6">
            <div className="max-w-7xl font-bold">
              <p className="inline-block text-4xl text-black">About </p>
              <span className="inline-block">&nbsp;</span>
              <span className="inline-block">&nbsp;</span>
              <p className="inline-block text-4xl ">Us </p>
            </div>
            <div className="mb-10 mt-10 ">
              <h1 className="font-bold capitalize  " >Welcome to EzyHelp!</h1>

At EzyHelp, we connect skilled workers with people who need help with jobs like plumbing, electrical work, carpentry, and more. Our goal is to make it easy for you to find reliable professionals.

<h1 className="font-bold capitalize">Why Choose EzyHelp?</h1>
Safety: We carefully check our workers to make sure they are safe and trustworthy.
<br />
 Reliability: Our workers are skilled and committed to doing a great job.
 <br />
 Convenience: Whether you need a repair, renovation, or routine maintenance, EzyHelp makes it easy to find the right professional.
 <br />

Join us today and see how EzyHelp makes finding reliable workers simple and stress-free! 
            </div>
            <div className="grid grid-cols-1 gap-4 lg:gap-8 sm:gap-4">
              <div className="flex flex-col flex-wrap mb-0 overflow-hidden rounded lg:flex-row dark:" href="#">
                <div ref={thirdItemRef} className={`w-full overflow-hidden lg:w-1/3 h-80 ${thirdItemInView ? 'slide-in-left' : 'slide-out-left'}`}>
                  <img className="object-cover w-full h-full transition-all hover:scale-110 rounded-3xl"
                    src="https://i.postimg.cc/q7pv50zT/pexels-edmond-dant-s-4342352.jpg" alt="" />
                </div>
                <div
                  ref={secondItemRef}
                  className={`relative flex self-center flex-1 p-8 ml-0 border shadow border-black rounded-3xl bg-black bg-opacity-70 backdrop-blur-md mt-5 lg:mt-0 lg:items-center lg:-ml-12 ${secondItemInView ? 'slide-in-right' : 'slide-out-right'}`}>
                  <div>
                    <h2 className="mb-2 text-xl font-bold text-white ">Our Team</h2>
                    <p className="mb-4 text-sm text-white ">
                      Welcome to EzyHelp, your trusted partner for connecting skilled blue-collar workers with customers. Our mission is to simplify the process of finding reliable professionals for any job. We prioritize safety, reliability, and convenience to ensure a seamless experience for both customers and service providers.
                    </p>
                    <div className="flex">
                      <a href="https://x.com/ezyhelpservices?t=Rpu7adwqeJn8e4mLgf_aRg&s=09" class="inline-block mr-5 text-white hover:text-blue-500 customButtom p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-6 h-6 bi bi-facebook" viewBox="0 0 16 16">
                          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                        </svg>
                      </a>

                      <a href="https://x.com/ezyhelpservices?t=Rpu7adwqeJn8e4mLgf_aRg&s=09" className="inline-block mr-5 text-white  hover:text-blue-500 customButtom p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                          className="w-6 h-6 bi bi-twitter" viewBox="0 0 16 16">
                          <path
                            d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                        </svg>
                      </a>
                      <a href="https://x.com/ezyhelpservices?t=Rpu7adwqeJn8e4mLgf_aRg&s=09" className="inline-block mr-5 text-white  hover:text-blue-500 customButtom p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                          className="w-6 h-6 bi bi-instagram" viewBox="0 0 16 16">
                          <path
                            d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <FaqSection />
      <Gallery />
    </>
  );
}