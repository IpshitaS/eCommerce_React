import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

function InstaMart() {
  const slides = [
    {
      url: 'https://www.jiomart.com/images/cms/aw_rbslider/slides/1681368683_Web_Mumbai_PremiumFruits.jpg'
    },
    {
      url: 'https://www.jiomart.com/images/cms/aw_rbslider/slides/1672856821_blockbuster.jpg'
    },
    {
      url: 'https://www.jiomart.com/images/cms/aw_rbslider/slides/1681273126_Great_Deals_On_Detergents___desktop.jpg'
    },
    {
      url: 'https://www.jiomart.com/images/cms/aw_rbslider/slides/1681494561_Pack_Your_Bags_Get_Set_Go_desktop.jpg'
    },
    {
      url: 'https://www.jiomart.com/images/cms/aw_rbslider/slides/1681452787_2.jpg'
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="text-center px-5">
      <h1 className="font-bold text-2xl">Welcome to Food Villa InstaMart</h1>
      <h3 className="text-lg">What would you like to buy today!!! 😄</h3>
      {/* /cl */}
      <div className=' h-72 w-full m-auto p-5 relative group'>
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
        ></div>
        {/* Left Arrow */}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        <div className='flex top-4 justify-center py-2'>
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className='text-2xl cursor-pointer'
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
      {/* items1 */}
      <h1 className="font-bold text-2xl p-2 mt-4">Shop From Top Categories</h1>
      <div className='w-full m-auto p-5 relative group flex '>
        <img className='hover:scale-105 duration-500 cursor-pointer' src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1681485399_1680883278_Oil_and_ghee.jpg" />
        <img className='hover:scale-105 duration-500 cursor-pointer' src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1681486104_Kitchenware.jpg" />
        <img className='hover:scale-105 duration-500 cursor-pointer' src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1681485549_1680883325_Cooking_Essentials.jpg" />
        <img className='hover:scale-105 duration-500 cursor-pointer' src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1681485762_1680901531_Dry_Fruits.jpg" />
        <img className='hover:scale-105 duration-500 cursor-pointer' src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1681483721_Furniture.jpg" />
        <img className='hover:scale-105 duration-500 cursor-pointer' src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1680261737_Speakers.jpg" />
        <img className='hover:scale-105 duration-500 cursor-pointer' src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1681486764_1680261796_Smartphones.jpg" />
        <img className='hover:scale-105 duration-500 cursor-pointer' src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1681545711_AC.jpg" />
        <img className='hover:scale-105 duration-500 cursor-pointer' src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1681505694_Trending_Towels_and_Curtains.jpg" />
        <img className='hover:scale-105 duration-500 cursor-pointer' src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1681486278_1680262560_Television.jpg" />
      </div>
      {/* items2 */}
      <h1 className="font-bold text-2xl p-2 mt-4">Home & Living</h1>
      <div className='w-full m-auto p-5 relative group flex '>
        <img className='hover:scale-105 duration-500 cursor-pointer' src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1681476184_1.jpg" />
        <img className='hover:scale-105 duration-500 cursor-pointer' src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1681476202_2.jpg" />
        <img className='hover:scale-105 duration-500 cursor-pointer' src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1681476221_3.jpg" />
        <img className='hover:scale-105 duration-500 cursor-pointer' src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1681476243_4.jpg" />
        <img className='hover:scale-105 duration-500 cursor-pointer' src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1681476267_5.jpg" />
        <img className='hover:scale-105 duration-500 cursor-pointer' src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1681476289_6.jpg" />
      </div>
    </div>
  );
}

export default InstaMart;