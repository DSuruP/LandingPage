import React from 'react';
import { BiSolidRightArrow } from "react-icons/bi";

const Collection = () => {
  return (
    <div>
      {/* <p className='text-4xl mt-20 pl-40'>Collections</p> */}
      <p className='text-4xl mt-20 text-center'>Collections</p>
      <div className='flex md:justify-between flex-wrap md:flex-nowrap md:px-40 px-10'>
        <p className="text-gray-600 mt-4" style={{ fontFamily: 'initial', fontSize: '1.2rem' }}>
          Explore curated lists of top restaurants, cafes, pubs, and bars in Indore, based on trends</p>
        <div className="flex items-center mt-5 text-red-600">
          <p>All collections in Indore</p>
          <BiSolidRightArrow className="ml-1" />
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-2 mt-5 md:px-40 px-10 gap-6 relative" style={{ fontFamily:'revert-layer', fontSize: '1.1rem' }}>
        <div className="h-[250px] overflow-hidden rounded-md relative">
          <img src="https://b.zmtcdn.com/data/collections/1861a2246de9e8cc96569b5dc4c3405c_1685696585.jpg?output-format=webp" alt="Image 1" className="w-[300px] h-[300px]" />
          <div className='absolute bottom-0 left-0 bg-black bg-opacity-50 p-2 w-full flex items-center'>
            <p className='text-white'>12 Best Luxury Dining Places</p>
            <BiSolidRightArrow className="ml-1 text-white mt-1" />
          </div>
        </div>
        <div className="h-[250px] overflow-hidden rounded-md relative">
          <img src="https://b.zmtcdn.com/data/collections/aaccef7199995c73258750f61c1961f0_1685696893.jpg?output-format=webp" alt="Image 2" className="w-[300px] h-[300px]" />
          <div className='absolute bottom-0 left-0 bg-black bg-opacity-50 p-2 w-full flex items-center'>
            <p className='text-white'>11 Romantic Dining Places</p>
            <BiSolidRightArrow className="ml-1 text-white mt-1" />
          </div>
        </div>
        <div className="h-[250px] overflow-hidden rounded-md relative">
          <img src="https://b.zmtcdn.com/data/collections/61d06b1dc0a478a6216bcf07ff8b2d67_1685698994.jpg?output-format=webp" alt="Image 3" className="w-[300px] h-[300px]" />
          <div className='absolute bottom-0 left-0 bg-black bg-opacity-50 p-2 w-full flex items-center'>
            <p className='text-white'>17 Around Lovely Cafes</p>
            <BiSolidRightArrow className="ml-1 text-white mt-1" />
          </div>
        </div>
        <div className="h-[250px] overflow-hidden rounded-md relative">
          <img src="https://b.zmtcdn.com/data/collections/047d79ba26a7d5fec76b22ecf4a5ae02_1685698329.png?output-format=webp" alt="Image 4" className="w-[300px] h-[300px]" />
          <div className='absolute bottom-0 left-0 bg-black bg-opacity-50 p-2 w-full flex items-center'>
            <p className='text-white'>12 Local Favourite Places</p>
            <BiSolidRightArrow className="ml-1 text-white mt-1" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Collection;
