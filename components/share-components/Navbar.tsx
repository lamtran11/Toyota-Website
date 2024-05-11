import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CustomButton from './CustomButton';

const Navbar = () => {
  return (
    <div className='w-full pl-4 fixed z-10 bg-white xl:left-0 xl:z-10 lg:px-8'>
      <div className='max-w-[1440px] mx-auto flex justify-between py-4 '>
        <div>
          <Link href='/' className='flex'>
            <Image
              src='/images/navbar/toyota.svg'
              alt='Car Hub Logo'
              width={50}
              height={18}
              className='object-contain lg:hidden'
            />
            <Image
              src='/images/navbar/toyota.svg'
              alt='Car Hub Logo'
              width={100}
              height={18}
              className='object-contain hidden lg:block xl:block'
            />
          </Link>
        </div>

        <div className='flex flex-row px-4 py-3 gap-6 xl:gap-10 2xl:gap-14 font-bold lg:text-[26px] lg:py-4 lg:font-bold items-center'>
          <Link href='/other-details'>
            <CustomButton
              title=' トヨタ会社'
              btnType='button'
              containerStyles='text-black hover:text-red duration-500 hover:bg-gray-200'
            />
          </Link>

          <Link href='/technology'>
            <CustomButton
              title='トヨタの技術'
              btnType='button'
              containerStyles='text-black hover:text-red duration-500 hover:bg-gray-200'
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
