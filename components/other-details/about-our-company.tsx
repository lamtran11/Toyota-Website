'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import SmallArrow from '../share-components/arrow';
import clsx from 'clsx';

interface Section {
  id: string;
  title: string;
  content: string;
}

interface Props {
  title: string;
}

const AboutOurCompany: React.FC<Props> = (props) => {
  const [selectedSection, setSelectedSection] = useState<string | null>(null);

  const toyotaSections: Section[] = [
    {
      id: 'history',
      title: '歴史',
      content:
        'トヨタ自動車の歴史は、豊かな革新と世界的な成長の物語です。創業以来、トヨタは産業の発展に不可欠な技術と価値を提供してきました。',
    },
    {
      id: 'product-lineup',
      title: '製品ラインナップ',
      content:
        'トヨタは、幅広い車両を提供しています。セダン、SUV、トラック、ハイブリッドなど、さまざまなニーズに対応しています。',
    },
    {
      id: 'technological-innovation',
      title: '技術革新',
      content:
        'トヨタは、安全性、燃費効率、自動運転技術などの革新に積極的に取り組んでいます。',
    },
    {
      id: 'global-impact',
      title: 'グローバルな影響',
      content:
        'トヨタは世界中で重要な役割を果たしています。製造拠点、パートナーシップ、地域社会への貢献など、その活動は多岐にわたります。',
    },
    {
      id: 'corporate-social-responsibility',
      title: '企業の社会的責任',
      content:
        'トヨタは、持続可能性、地域社会への貢献、慈善活動などの分野で積極的な役割を果たしています。',
    },
    {
      id: 'future-outlook',
      title: '将来の展望',
      content:
        'トヨタは、持続可能な未来に向けて積極的に取り組んでいます。次世代技術や長期的な戦略について、今後の展望をご紹介します。',
    },
  ];

  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<string | null>(null);

  const handleMouseEnter = (index: string) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const sectionClickHandler = (id: string) => {
    if (activeSection === id) {
      setActiveSection(null);
    } else {
      setActiveSection(id);
    }
  };

  return (
    <div className=' bg-gray-100 pt-36 lg:flex flex-row'>
      <div className='about_us_header px-4 lg:w-1/2 xl:w-1/3 2xl:w-1/3 lg:px-8'>
        <h1 className='text-4xl font-bold text-center mb-8 lg:text-start'>
          トヨタ自動車
        </h1>

        <p className='text-lg text-center mb-8 lg:text-[24px]'>
          トヨタ自動車は、日本を代表する自動車メーカーです。創業以来、革新的な技術と高品質な車両を提供しています。
        </p>

        <p className='text-lg text-center mt-8 pb-8 lg:text-[24px]'>
          当社は、持続可能なモビリティの実現に向けて、環境に配慮した車両の開発に取り組んでいます。
        </p>
      </div>

      <div className='about_us_contents bg-gray-300'>
        {toyotaSections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className={` ${
              activeSection === section.id ? 'bg-gray-600' : 'bg-gray-300'
            }
          
            hover:bg-gray
              `}
            onClick={() => sectionClickHandler(section.id)}
          >
            <h2
              // className={`text-[22px] font-semibold cursor-pointer py-6 px-4 lg:text-[26px] `}
              className={clsx(
                `text-[22px] font-semibold cursor-pointer py-6 px-4 lg:text-[26px]`,
                {
                  'text-white': activeSection === section.id,
                  'text-[#101828]': activeSection !== section.id,
                }
              )}
            >
              {section.title}
            </h2>

            <hr className='border-b border-gray-400 px-4' />

            <div
              className={clsx(
                'duration-300 overflow-hidden animate__animated animate__fadeIn ',
                {
                  'max-h-0': activeSection !== section.id,
                  'max-h-[300px] ': activeSection == section.id,
                }
              )}
            >
              <div
                className={`text-gray-700
                lg:text-[24px] px-4 py-4 ${
                  activeSection === section.id ? 'text-white' : 'text-[#101828]'
                }`}
              >
                {section.content}
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default AboutOurCompany;
