import React, { Component, useState } from 'react';
import CustomButton from '../share-components/CustomButton';
import Image from 'next/image';
import CarCard from './CarCard';
import Link from 'next/link';
import ShareImageProps from '../share-components/share-props';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

export default function Hero() {
  const ImageSliderList = [
    {
      id: 'land_cruiser',
      img_path_desktop: '/images/homepage/top-section/land-cruiser-desktop.png',
      img_path_mobile: '/images/homepage/top-section/land-cruiser-mobile.png',
      alt: 'land cruiser',
    },
    {
      id: 'yaris',
      img_path_desktop: '/images/homepage/top-section/yaris-desktop.png',
      img_path_mobile: '/images/homepage/top-section/yaris-mobile.png',
      alt: 'yaris',
    },
    {
      id: 'series',
      img_path_desktop: '/images/homepage/top-section/series-desktop.png',
      img_path_mobile: '/images/homepage/top-section/series-mobile.png',
      alt: 'series',
    },
    {
      id: 'corolla',
      img_path_desktop: '/images/homepage/top-section/corolla-desktop.png',
      img_path_mobile: '/images/homepage/top-section/corolla-mobile.png',
      alt: 'corolla',
    },
    {
      id: 'crown',
      img_path_desktop: '/images/homepage/top-section/crown-desktop.png',
      img_path_mobile: '/images/homepage/top-section/crown-mobile.png',
      alt: 'crown',
    },
    {
      id: 'aqua',
      img_path_desktop: '/images/homepage/top-section/aqua-desktop.png',
      img_path_mobile: '/images/homepage/top-section/aqua-mobile.png',
      alt: 'aqua',
    },
  ];

  const [currentImage, setCurrentImage] = useState(0);

  const prevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? ImageSliderList.length - 1 : prev - 1
    );
  };
  const nextImage = () => {
    setCurrentImage((prev) =>
      prev === ImageSliderList.length - 1 ? 0 : prev + 1
    );
  };

  const goToImage = (imageIndex: number) => {
    setCurrentImage(imageIndex);
  };

  return (
    <div className='flex-1 pt-24'>
      <div className='group'>
        <div className='hero_image duration-500'>
          <ShareImageProps
            src={`${ImageSliderList[currentImage].img_path_mobile}`}
            alt='hero'
            width={500}
            height={500}
            className='object-fit w-full h-full lg:hidden px-4'
          />
          <ShareImageProps
            src={`${ImageSliderList[currentImage].img_path_desktop}`}
            alt='hero'
            width={500}
            height={500}
            className='object-fit w-full h-full hidden lg:block'
          />

          {/* <div className='mobile_sliders max-w-[1400px] h-[500px] w-full m-auto py-3 px-4 relative lg:hidden'>
              <div
                style={{
                  backgroundImage: `url(${ImageSliderList[0].img_path_mobile})`,
                }}
                className='w-full h-[500px] bg-center bg-cover duration-500 object-fit'
              ></div>
            </div> */}
        </div>

        {/* Left Arrow */}
        <div className='hidden group-hover:block absolute top-[40%] lg:top-[30%] -translate-x-0 translate-y-[50%] left-5 text-3xl lg:text-5xl rounded-full p-2 text-white bg-black/20 cursor-pointer'>
          <BsChevronCompactLeft onClick={prevImage} size={30} />
        </div>

        {/* Right Arrow */}
        <div className='hidden group-hover:block absolute top-[40%] lg:top-[30%] -translate-x-0 translate-y-[50%] right-5 text-3xl lg:text-5xl rounded-full p-2 text-white bg-black/20 cursor-pointer'>
          <BsChevronCompactRight onClick={nextImage} size={30} />
        </div>

        <div className='flex top-4 py-2 justify-center'>
          {ImageSliderList.map((image, imageIndex) => (
            <div
              key={imageIndex}
              onClick={() => goToImage(imageIndex)}
              className={`text-2xl cursor-pointer ${
                currentImage === imageIndex ? 'bg-gray-600' : ''
              }`}
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>

      {/* Render Hero Content Text */}
      <div className='px-4 py-4 lg:px-8 '>
        <h1 className='hero_title text-[25px] font-bold py-4 xl:text-[28px]'>
          ヤリス - トヨタ自動車
        </h1>
        <p className='hero_subtitle text-[16px] lg:text-[18px] xl:text-[22px]'>
          ヤリスはトヨタ自動車が製造するコンパクトカーです。この車は、優れた燃費効率とスムーズな走行を提供することで知られています。ヤリスは都市部での運転に最適であり、コンパクトなボディサイズにもかかわらず、快適で広々とした室内空間を提供します。また、安全性能にも優れており、最新の安全技術を搭載しています。ヤリスはスタイリッシュで洗練された外観と、使いやすいインテリアデザインが特徴です。
        </p>

        <Link href='/car-detail-pages'>
          <CustomButton
            title='もっと車を探索する'
            containerStyles='bg-stone-700 text-white mt-10 hover:text-white hover:bg-blue-500 duration-300 text-[16px] lg:text-[25px] rounded-xl'
          />
        </Link>
      </div>
    </div>
  );
}
