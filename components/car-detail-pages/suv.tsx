import React from 'react';
import CarBar from '../web-top-section/CarBar';
import ShareImageProps from '../share-components/share-props';

const Page = () => {
  return (
    <>
      <CarBar />
      <div className='sedan-container pt-16 padding-x gap-8 max-md:flex-col flex-wrap justify-between px-4'>
        <ShareImageProps
          src='/images/car-details/raize.png'
          alt='raize'
          width={500}
          height={500}
          className='h-full w-full border-8 border-t-0 border-r-0 border-red-600 object-fit'
        />
        <div className='p-4 rounded-lg'>
          <h2 className='text-2xl font-bold mb-2'>TOYOTA RAIZE</h2>{' '}
          <p className='text-xl font-medium mb-2'>
            コンパクトでスタイリッシュ、都市生活に最適なSUV
          </p>{' '}
          {/* <a className='text-blue-600 hover:underline'>仕様を見る</a>{' '} */}
          {/* <a className='text-blue-600 hover:underline ml-4'>車両を比較する</a>{' '} */}
          <ul className='list-disc list-inside text-gray-700 mb-4'>
            {' '}
            <li className='mb-1'>座席数: 5席</li>{' '}
            <li className='mb-1'>原産地: 日本</li>{' '}
            <li className='mb-1'>スタイル: SUV</li>{' '}
            <li className='mb-1'>燃料: ガソリン</li>{' '}
          </ul>{' '}
          <p className='text-xl font-medium mb-2'>価格: 900.000.000° VNĐから</p>{' '}
        </div>
      </div>
    </>
  );
};

export default Page;
