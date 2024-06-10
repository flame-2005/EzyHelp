import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { useInView } from 'react-intersection-observer';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

export default function App() {
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger animation once
        threshold: 0.2, // Trigger when 50% of section is in view
      });
  return (
    <>
    <div ref={ref} className={`ont-poppins mt-5 ${inView ? 'animate__animated animate__bounceInUp fade-in' : 'fade-out'} `}>

    
     <div class="text-center font-bold">
  <p class="inline-block text-4xl text-black mb-4">Our</p>
  <span class="inline-block">&nbsp;</span>
  <span class="inline-block">&nbsp;</span>
  <p class="inline-block text-4xl text-custom-orange">Reviews</p>
</div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
       
        modules={[FreeMode, Pagination]}
        className="mySwiper1"
      >

        <SwiperSlide
        >

<div class="w-full border inset-0 bg-opacity-50 backdrop-blur-2xl border-gray-200 rounded-lg shadow "
>
    <div class="flex justify-end px-4 pt-4">
      
    
    </div>
    <div class="flex flex-col items-center pb-4"
     >
        <img class="w-40 h-40 mb-3 rounded-full shadow-lg cover bg-custom-orange" src="https://res.cloudinary.com/dtyombve3/image/upload/v1710583111/Group_4_1_1_kctsdz.png" alt="Bonnie image"/>
        <h5 class="mb-1 text-xl font-medium text-custom-orange">Suguna - student, NITK Surathkal</h5>
        <span class="text-sm ">The campus delivery service provided by Changepay has been a lifesaver for me. </span>
       
    </div>
</div>
</SwiperSlide>
        <SwiperSlide
        >

<div class="w-full border inset-0 bg-opacity-50 backdrop-blur-2xl border-gray-200 rounded-lg shadow "
>
    <div class="flex justify-end px-4 pt-4">
      
    
    </div>
    <div class="flex flex-col items-center pb-4"
     >
        <img class="w-40 h-40 mb-3 rounded-full shadow-lg cover bg-custom-orange " src="https://res.cloudinary.com/dtyombve3/image/upload/v1710583111/Group_4_1_1_kctsdz.png" alt="Bonnie image"/>
        <h5 class="mb-1 text-xl font-medium text-custom-orange">Suguna - student, NITK Surathkal</h5>
        <span class="text-sm ">The campus delivery service provided by Changepay has been a lifesaver for me. </span>
       
    </div>
</div>
</SwiperSlide>
        <SwiperSlide
        >

<div class="w-full border inset-0 bg-opacity-50 backdrop-blur-2xl border-gray-200 rounded-lg shadow "
>
    <div class="flex justify-end px-4 pt-4">
      
    
    </div>
    <div class="flex flex-col items-center pb-4"
     >
        <img class="w-40 h-40 mb-3 rounded-full shadow-lg cover bg-custom-orange" src="https://res.cloudinary.com/dtyombve3/image/upload/v1710583111/Group_4_1_1_kctsdz.png" alt="Bonnie image"/>
        <h5 class="mb-1 text-xl font-medium text-custom-orange">Suguna - student, NITK Surathkal</h5>
        <span class="text-sm ">The campus delivery service provided by Changepay has been a lifesaver for me. </span>
       
    </div>
</div>
</SwiperSlide>
        <SwiperSlide
        >

<div class="w-full border inset-0 bg-opacity-50 backdrop-blur-2xl border-gray-200 rounded-lg shadow "
>
    <div class="flex justify-end px-4 pt-4">
      
    
    </div>
    <div class="flex flex-col items-center pb-4"
     >
        <img class="w-40 h-40 mb-3 rounded-full shadow-lg cover bg-custom-orange" src="https://res.cloudinary.com/dtyombve3/image/upload/v1710583111/Group_4_1_1_kctsdz.png" alt="Bonnie image"/>
        <h5 class="mb-1 text-xl font-medium text-custom-orange">Suguna - student, NITK Surathkal</h5>
        <span class="text-sm ">The campus delivery service provided by Changepay has been a lifesaver for me. </span>
       
    </div>
</div>
</SwiperSlide>
        <SwiperSlide
        >

<div class="w-full border inset-0 bg-opacity-50 backdrop-blur-2xl border-gray-200 rounded-lg shadow "
>
    <div class="flex justify-end px-4 pt-4">
      
    
    </div>
    <div class="flex flex-col items-center pb-4"
     >
        <img class="w-40 h-40 mb-3 rounded-full shadow-lg cover bg-custom-orange" src="https://res.cloudinary.com/dtyombve3/image/upload/v1710583111/Group_4_1_1_kctsdz.png" alt="Bonnie image"/>
        <h5 class="mb-1 text-xl font-medium text-custom-orange">Suguna - student, NITK Surathkal</h5>
        <span class="text-sm ">The campus delivery service provided by Changepay has been a lifesaver for me. </span>
       
    </div>
</div>
</SwiperSlide>
        <SwiperSlide
        >

<div class="w-full border inset-0 bg-opacity-50 backdrop-blur-2xl border-gray-200 rounded-lg shadow "
>
    <div class="flex justify-end px-4 pt-4">
      
    
    </div>
    <div class="flex flex-col items-center pb-4"
     >
        <img class="w-40 h-40 mb-3 rounded-full shadow-lg cover bg-custom-orange" src="https://res.cloudinary.com/dtyombve3/image/upload/v1710583111/Group_4_1_1_kctsdz.png" alt="Bonnie image"/>
        <h5 class="mb-1 text-xl font-medium text-custom-orange">Suguna - student, NITK Surathkal</h5>
        <span class="text-sm ">The campus delivery service provided by Changepay has been a lifesaver for me. </span>
       
    </div>
</div>
</SwiperSlide>
        <SwiperSlide
        >

<div class="w-full border inset-0 bg-opacity-50 backdrop-blur-2xl border-gray-200 rounded-lg shadow "
>
    <div class="flex justify-end px-4 pt-4">
      
    
    </div>
    <div class="flex flex-col items-center pb-4"
     >
        <img class="w-40 h-40 mb-3 rounded-full shadow-lg cover bg-custom-orange" src="https://res.cloudinary.com/dtyombve3/image/upload/v1710583111/Group_4_1_1_kctsdz.png" alt="Bonnie image"/>
        <h5 class="mb-1 text-xl font-medium text-custom-orange">Suguna - student, NITK Surathkal</h5>
        <span class="text-sm ">The campus delivery service provided by Changepay has been a lifesaver for me. </span>
       
    </div>
</div>
</SwiperSlide>
        <SwiperSlide
        >

<div class="w-full border inset-0 bg-opacity-50 backdrop-blur-2xl border-gray-200 rounded-lg shadow "
>
    <div class="flex justify-end px-4 pt-4">
      
    
    </div>
    <div class="flex flex-col items-center pb-4"
     >
        <img class="w-40 h-40 mb-3 rounded-full shadow-lg cover bg-custom-orange" src="https://res.cloudinary.com/dtyombve3/image/upload/v1710583111/Group_4_1_1_kctsdz.png" alt="Bonnie image"/>
        <h5 class="mb-1 text-xl font-medium text-custom-orange">Suguna - student, NITK Surathkal</h5>
        <span class="text-sm ">The campus delivery service provided by Changepay has been a lifesaver for me. </span>
       
    </div>
</div>
</SwiperSlide>
        <SwiperSlide
        >

<div class="w-full border inset-0 bg-opacity-50 backdrop-blur-2xl border-gray-200 rounded-lg shadow "
>
    <div class="flex justify-end px-4 pt-4">
      
    
    </div>
    <div class="flex flex-col items-center pb-4"
     >
        <img class="w-40 h-40 mb-3 rounded-full shadow-lg cover bg-custom-orange" src="https://res.cloudinary.com/dtyombve3/image/upload/v1710583111/Group_4_1_1_kctsdz.png" alt="Bonnie image"/>
        <h5 class="mb-1 text-xl font-medium text-custom-orange">Suguna - student, NITK Surathkal</h5>
        <span class="text-sm ">The campus delivery service provided by Changepay has been a lifesaver for me. </span>
       
    </div>
</div>
</SwiperSlide>
        <SwiperSlide
        >

<div class="w-full border inset-0 bg-opacity-50 backdrop-blur-2xl border-gray-200 rounded-lg shadow "
>
    <div class="flex justify-end px-4 pt-4">
      
    
    </div>
    <div class="flex flex-col items-center pb-4"
     >
        <img class="w-40 h-40 mb-3 rounded-full shadow-lg cover bg-custom-orange" src="https://res.cloudinary.com/dtyombve3/image/upload/v1710583111/Group_4_1_1_kctsdz.png" alt="Bonnie image"/>
        <h5 class="mb-1 text-xl font-medium text-custom-orange ">Suguna - student, NITK Surathkal</h5>
        <span class="text-sm ">The campus delivery service provided by Changepay has been a lifesaver for me. </span>
       
    </div>
</div>
</SwiperSlide>
        <SwiperSlide>

<div class="w-full  border border-gray-200 rounded-lg shadow inset-0 bg-opacity-50 backdrop-blur-2xl">
    <div class="flex justify-end px-4 pt-4">
      
    
    </div>
    <div class="flex flex-col items-center pb-4pb-10">
        <img class="w-40 h-40 mb-3 rounded-full shadow-lg" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image"/>
        <h5 class="mb-1 text-xl font-medium text-custom-orange">Bonnie Green</h5>
        <span class="text-sm  text-gray-600">Visual Designer</span>
       
    </div>
</div>
</SwiperSlide>
        <SwiperSlide>

<div class="w-full  border border-gray-200 rounded-lg shadow inset-0 bg-opacity-50 backdrop-blur-2xl">
    <div class="flex justify-end px-4 pt-4">
      
    
    </div>
    <div class="flex flex-col items-center pb-4pb-10">
        <img class="w-40 h-40 mb-3 rounded-full shadow-lg" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image"/>
        <h5 class="mb-1 text-xl font-medium text-custom-orange">Bonnie Green</h5>
        <span class="text-sm  text-gray-600">Visual Designer</span>
       
    </div>
</div>
</SwiperSlide>
        <SwiperSlide>

<div class="w-full  border border-gray-200 rounded-lg shadow inset-0 bg-opacity-50 backdrop-blur-2xl">
    <div class="flex justify-end px-4 pt-4">
      
    
    </div>
    <div class="flex flex-col items-center pb-4pb-10">
        <img class="w-40 h-40 mb-3 rounded-full shadow-lg" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image"/>
        <h5 class="mb-1 text-xl font-medium text-custom-orange">Bonnie Green</h5>
        <span class="text-sm  text-gray-600">Visual Designer</span>
       
    </div>
</div>
</SwiperSlide>
        <SwiperSlide>

<div class="w-full  border border-gray-200 rounded-lg shadow inset-0 bg-opacity-50 backdrop-blur-2xl">
    <div class="flex justify-end px-4 pt-4">
      
    
    </div>
    <div class="flex flex-col items-center pb-4pb-10">
        <img class="w-40 h-40 mb-3 rounded-full shadow-lg" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image"/>
        <h5 class="mb-1 text-xl font-medium text-custom-orange">Bonnie Green</h5>
        <span class="text-sm  text-gray-600">Visual Designer</span>
       
    </div>
</div>
</SwiperSlide>
        <SwiperSlide>

<div class="w-full  border border-gray-200 rounded-lg shadow inset-0 bg-opacity-50 backdrop-blur-2xl">
    <div class="flex justify-end px-4 pt-4">
      
    
    </div>
    <div class="flex flex-col items-center pb-4pb-10">
        <img class="w-40 h-40 mb-3 rounded-full shadow-lg" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image"/>
        <h5 class="mb-1 text-xl font-medium text-custom-orange">Bonnie Green</h5>
        <span class="text-sm  text-gray-600">Visual Designer</span>
       
    </div>
</div>
</SwiperSlide>
        <SwiperSlide>

<div class="w-full  border border-gray-200 rounded-lg shadow inset-0 bg-opacity-50 backdrop-blur-2xl">
    <div class="flex justify-end px-4 pt-4">
      
    
    </div>
    <div class="flex flex-col items-center pb-4pb-10">
        <img class="w-40 h-40 mb-3 rounded-full shadow-lg" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image"/>
        <h5 class="mb-1 text-xl font-medium text-custom-orange">Bonnie Green</h5>
        <span class="text-sm  text-gray-600">Visual Designer</span>
       
    </div>
</div>
</SwiperSlide>
        <SwiperSlide>

<div class="w-full  border border-gray-200 rounded-lg shadow inset-0 bg-opacity-50 backdrop-blur-2xl">
    <div class="flex justify-end px-4 pt-4">
      
    
    </div>
    <div class="flex flex-col items-center pb-4pb-10">
        <img class="w-40 h-40 mb-3 rounded-full shadow-lg" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image"/>
        <h5 class="mb-1 text-xl font-medium text-custom-orange">Bonnie Green</h5>
        <span class="text-sm  text-gray-600">Visual Designer</span>
       
    </div>
</div>
</SwiperSlide>
        <SwiperSlide>

<div class="w-full  border border-gray-200 rounded-lg shadow inset-0 bg-opacity-50 backdrop-blur-2xl">
    <div class="flex justify-end px-4 pt-4">
      
    
    </div>
    <div class="flex flex-col items-center pb-4pb-10">
        <img class="w-40 h-40 mb-3 rounded-full shadow-lg" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image"/>
        <h5 class="mb-1 text-xl font-medium text-custom-orange">Bonnie Green</h5>
        <span class="text-sm  text-gray-600">Visual Designer</span>
       
    </div>
</div>
</SwiperSlide>
      </Swiper>
      </div>
    </>
  );
}
