'use client';
import React, { useState } from 'react';

const technologies = [
  {
    title: '自動運転技術',
    description: 'トヨタは自動運転技術の開発に力を入れています。',
  },
  {
    title: '電気自動車',
    description: 'トヨタの電気自動車は環境にやさしいです。',
  },
  {
    title: 'ハイブリッド車',
    description: 'トヨタのハイブリッド車は燃費が良いです。',
  },
  {
    title: 'コネクテッドカー',
    description: 'トヨタはコネクテッドカーの開発にも力を入れています。',
  }, // Add new technology
  {
    title: '人工知能',
    description: 'トヨタは人工知能を活用した技術開発にも取り組んでいます。',
  }, // Add new technology
  {
    title: 'ロボット工学',
    description: 'トヨタはロボット工学を活かした技術開発にも取り組んでいます。',
  }, // Add new technology
];

const Technology = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className='p-4 rounded-lg shadow'>
    <h2 className='text-l font-bold mb-4 lg:text-2xl'>{title}</h2>
    <p className='lg:text-[22px]'>{description}</p>
  </div>
);

function ToyotaTechnologies() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  return (
    <div className='flex flex-col items-center justify-center bg-gray-100 pt-36 px-4 pb-6'>
      <h1 className='text-2xl font-bold mb-8 lg:text-4xl'>
        トヨタのテクノロジー
      </h1>
      <div className='grid grid-cols-2 gap-4 lg:gap-8 cursor-pointer'>
        {technologies.map((technology, index) => (
          <div className='hover:bg-gray-700 hover:text-gray-100'>
            <Technology key={technology.title} {...technology} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ToyotaTechnologies;
