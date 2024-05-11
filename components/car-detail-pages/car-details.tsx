import React from 'react';
import CarBar from '../web-top-section/CarBar';
import ShareImageProps from '../share-components/share-props';

// Define an array of car data
const cars = [
  {
    name: 'TIS COROLLA ALTIS 1.8G',
    description: 'チャンピオンの味わいを持つ標準',
    origin: 'タイ',
    style: 'セダン',
    fuel: 'ガソリン',
    price: '725.000.000 VNĐから',
    imageSrc: '/images/car-details/wigo.png',
    altText: 'wigo',
  },
  {
    name: 'TOYOTA HILUX',
    description: '頑丈なデザインと高いパフォーマンス',
    origin: 'タイ',
    style: 'ピックアップトラック',
    fuel: 'ディーゼル',
    price: '800.000.000 VNĐから',
    imageSrc: '/images/car-details/hilux.png',
    altText: 'hilux',
  },
  {
    name: 'TOYOTA VIOS 1.5G',
    description: '快適な都市向けセダン、経済的で信頼性が高い',
    origin: 'タイ',
    style: 'セダン',
    fuel: 'ガソリン',
    price: '800.000.000 VNĐから',
    imageSrc: '/images/car-details/vios.png',
    altText: 'vios',
  },
  {
    name: 'TOYOTA RAIZE',
    description: 'コンパクトでスタイリッシュ、都市生活に最適なSUV',
    origin: '日本',
    style: 'SUV',
    fuel: 'ガソリン',
    price: '900.000.000 VNĐから',
    imageSrc: '/images/car-details/raize.png',
    altText: 'raize',
  },
];

// Define a component for rendering each car
const CarInfo = ({
  name,
  description,
  origin,
  style,
  fuel,
  price,
  imageSrc,
  altText,
  isFirst,
}: {
  name: string;
  description: string;
  origin: string;
  style: string;
  fuel: string;
  price: string;
  imageSrc: string;
  altText: string;
  isFirst: boolean;
}) => (
  <div className={`car_container pt-36 gap-4 px-4 lg:px-8 lg:object-cover`}>
    <ShareImageProps
      src={imageSrc}
      alt={altText}
      width={500}
      height={500}
      className='h-full w-full border-8 border-t-0 border-r-0 border-red-600 object-fit'
    />

    {/* Render Car Details Contents */}
    <div className='p-4 lg:text-[22px] '>
      <h2 className='text-2xl font-bold mb-2 lg:text-[28px]'>{name}</h2>
      <p className='text-xl font-medium mb-2'>{description}</p>
      <ul className='list-disc list-inside text-gray-700 mb-4'>
        <li className='mb-1'>座席数: 5席</li>
        <li className='mb-1'>原産地: {origin}</li>
        <li className='mb-1'>スタイル: {style}</li>
        <li className='mb-1'>燃料: {fuel}</li>
      </ul>
      <p className='text-xl font-medium mb-2'>価格: {price}</p>
    </div>
  </div>
);

const Page = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
      {cars.map((car, index) => (
        <CarInfo isFirst={false} key={index} {...car} />
      ))}
    </div>
  );
};

export default Page;
