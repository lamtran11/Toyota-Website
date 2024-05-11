import React, { use, useState } from 'react';
import CustomButton from '../share-components/CustomButton';
import Image from 'next/image';
import CarCard from './CarCard';

export default function LineUp() {
  interface LineUpCar {
    id: string;
    src: string;
    alt: string;
  }

  const lineUpCars: LineUpCar[] = [
    {
      id: 'compact-1',
      src: '/images/homepage/compact/compact-1.png',
      alt: 'Compact Car',
    },

    {
      id: 'compact-2',
      src: '/images/homepage/compact/compact-2.png',
      alt: 'Compact Car',
    },

    {
      id: 'compact-3',
      src: '/images/homepage/compact/compact-3.png',
      alt: 'Compact Car',
    },

    {
      id: 'compact-4',
      src: '/images/homepage/compact/compact-4.png',
      alt: 'Compact Car',
    },

    {
      id: 'mini-1',
      src: '/images/homepage/minivan/mini-1.png',
      alt: 'Mini Van',
    },

    {
      id: 'mini-2',
      src: '/images/homepage/minivan/mini-2.png',
      alt: 'Mini Van',
    },
    {
      id: 'mini-3',
      src: '/images/homepage/minivan/mini-3.png',
      alt: 'Mini Van',
    },
    {
      id: 'mini-4',
      src: '/images/homepage/minivan/mini-4.png',
      alt: 'Mini Van',
    },

    {
      id: 'sedan-1',
      src: '/images/homepage/sedan/sedan-1.png',
      alt: 'Sedan Car',
    },
    {
      id: 'sedan-2',
      src: '/images/homepage/sedan/sedan-2.png',
      alt: 'Sedan Car',
    },
    {
      id: 'sedan-3',
      src: '/images/homepage/sedan/sedan-3.png',
      alt: 'Sedan Car',
    },
    {
      id: 'sedan-4',
      src: '/images/homepage/sedan/sedan-4.png',
      alt: 'Sedan Car',
    },
    {
      id: 'wagon-1',
      src: '/images/homepage/wagon/wagon-1.png',
      alt: 'Wagon Car',
    },
    {
      id: 'wagon-2',
      src: '/images/homepage/wagon/wagon-2.png',
      alt: 'Wagon Car',
    },
    {
      id: 'suv-1',
      src: '/images/homepage/suv/suv-1.png',
      alt: 'Wagon Car',
    },
    {
      id: 'suv-2',
      src: '/images/homepage/suv/suv-2.png',
      alt: 'Wagon Car',
    },
    {
      id: 'suv-3',
      src: '/images/homepage/suv/suv-3.png',
      alt: 'Wagon Car',
    },
    {
      id: 'suv-4',
      src: '/images/homepage/suv/suv-4.png',
      alt: 'Wagon Car',
    },
    {
      id: 'sport-1',
      src: '/images/homepage/sport/sport-1.png',
      alt: 'Sport Car',
    },
    {
      id: 'sport-2',
      src: '/images/homepage/sport/sport-2.png',
      alt: 'Sport Car',
    },
    {
      id: 'auto-1',
      src: '/images/homepage/autocar/auto-1.png',
      alt: 'Light Car',
    },
    {
      id: 'auto-2',
      src: '/images/homepage/autocar/auto-2.png',
      alt: 'Light Car',
    },
  ];

  const lineUpCarHeaders = [
    'コンパクト',
    'ミニバン',
    'セダン',
    'ワゴン',
    'SUV',
    'スポーツ',
    '軽自動車',
  ];

  const [clickedCar, setClickedCar] = useState<string | null>(null);

  const [hoveredCar, setHoveredCar] = useState<string | null>(null);

  const handleMouseEnter = (id: string | null) => {
    setHoveredCar(id);
  };

  const handleMouseLeave = () => {
    setHoveredCar(null);
  };

  // Recieve props from parent component
  const handleClick = (header: string) => {
    if (clickedCar === header) {
      setClickedCar(null);
    } else {
      setClickedCar(header);
    }
  };

  return (
    <div className='px-4 lg:px-8'>
      <h1 className='text-[25px] text-black font-bold py-8 lg:text-[28px]'>
        ラインアップ
      </h1>

      <div className='line_up_container'>
        {/* Render Header */}
        <div className='lineup_navbar flex flex-row pt-4 pb-6 gap-5 overflow-x-scroll text-[16px] lg:text-[24px] lg:justify-between '>
          {lineUpCarHeaders.map((header) => (
            <div
              key={header}
              className={`whitespace-nowrap ${
                clickedCar === header
                  ? 'border-b-4 border-red-600 duration-300'
                  : 'text-black'
              }`}
              onClick={() => handleClick(header)}
              style={{ cursor: 'pointer' }}
            >
              {header}
            </div>
          ))}
        </div>

        <div className='lineup_images flex flex-row py-12 w-full h-auto gap-8 overflow-x-scroll lg:gap-16'>
          {lineUpCars
            .filter((car) => {
              if (clickedCar === 'コンパクト') {
                return car.id.startsWith('compact');
              } else if (clickedCar === 'ミニバン') {
                return car.id.startsWith('mini');
              } else if (clickedCar === 'セダン') {
                return car.id.startsWith('sedan');
              } else if (clickedCar === 'ワゴン') {
                return car.id.startsWith('wagon');
              } else if (clickedCar === 'SUV') {
                return car.id.startsWith('suv');
              } else if (clickedCar === 'スポーツ') {
                return car.id.startsWith('sport');
              } else if (clickedCar === '軽自動車') {
                return car.id.startsWith('auto');
              } else {
                return car.id.startsWith('compact');
              }
            })

            // Render Car Images
            .map(({ id, src, alt }) => (
              <div
                className='w-[200px] h-[100px] lg:w-[400px] lg:h-[200px] flex-shrink-0 duration-300'
                key={id}
              >
                <Image
                  src={src}
                  width={230}
                  height={120}
                  alt={alt}
                  className='object-fit w-[200px] h-[100px] max-w-full max-h-full rounded-lg lg:hidden'
                  objectFit=''
                />
                <Image
                  src={src}
                  width={230}
                  height={120}
                  alt={alt}
                  className='object-fit w-[400px] h-[200px] max-w-full max-h-full rounded-lg hidden lg:block'
                  objectFit=''
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
