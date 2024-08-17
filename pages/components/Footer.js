import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className=" relative bottom-0 body-font bg-black text-white">
  <div className="container px-5 py-2 mx-auto flex items-center sm:flex-row flex-col">
  <Link href={'/'} className="flex title-font font-medium items-center md:justify-start justify-center white">
  <img 
    src="https://res.cloudinary.com/dtyombve3/image/upload/v1719151842/q70mozy9xfkoukiywfbp.jpg" 
    alt="EzyHelp Logo" 
    className="w-10 h-10 rounded-full"
  />
  <span className="ml-3 text-xl">EzyHelp</span>
</Link>

    <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2020 EzyHelp —
      
    </p>
    <Link href={'/privacyPolicy/Privacy'} className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">Privacy Policy
      
    </Link>
    <Link href={'/shipping/Shipping'} className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">Shipping Policy
      
    </Link>
    <Link href={'/contact/Contact'} className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">Refund Policy
      
    </Link>
    <Link href={'/terms&conditions/TermsAndConditions'} className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">Terms And Conditions
      
    </Link>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <a className="text-white">
        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
        </svg>
      </a>
      <a href='https://x.com/ezyhelpservices?t=Rpu7adwqeJn8e4mLgf_aRg&s=09' className="ml-3 text-white">
        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
        </svg>
      </a>
      <a href='https://www.instagram.com/ezyhelp.in?igsh=b3Nxcnd1dWx6MHA=' className="ml-3 text-white">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
        </svg>
      </a>
    </span>
  </div>
</footer>
  );
};

export default Footer;
