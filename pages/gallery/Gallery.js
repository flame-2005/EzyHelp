import React from 'react'

const Gallery = () => {
  return (
    <div>
      <section id='gallery' className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="flex w-full mb-20 flex-wrap">
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">Our Gallery</h1>
      <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">Explore our gallery to see the exceptional work completed by EzyHelp&apos;s skilled professionals, showcasing our commitment to quality and craftsmanship in every project.</p>
    </div>
    <div className="flex flex-wrap md:-m-2 -m-1">
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://res.cloudinary.com/dtyombve3/image/upload/v1718014181/k4w2n5oz4xhr2dqyvpk6.webp"/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://res.cloudinary.com/dtyombve3/image/upload/v1718014171/mxtepx6n2owhtplasym0.webp"/>
        </div>
        <div className="md:p-2 p-1 w-full">
          <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://res.cloudinary.com/dtyombve3/image/upload/v1718014169/ujbuajge54asmic3xq6r.webp"/>
        </div>
      </div>
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-full">
          <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://res.cloudinary.com/dtyombve3/image/upload/v1718014168/fyddbkir8cckouvhkvh5.webp"/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://res.cloudinary.com/dtyombve3/image/upload/v1718014165/knvtwadzfoang6vskfwv.webp"/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://res.cloudinary.com/dtyombve3/image/upload/v1718014165/wekuctxowvfini7ckjks.webp"/>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Gallery
