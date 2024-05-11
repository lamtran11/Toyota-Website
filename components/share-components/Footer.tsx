import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { footerLinks } from '@/constants';

const Footer = () => {
  return (
    <footer className='flex flex-col text-black-100 mt-5 border-t border-gray-100'>
      {/* 1 */}
      {/* Logo + About, Company, Socials */}
      <div className='flex max-md:flex-col flex-wrap justify-between gap-5 px-8 lg:px-16 py-10'>
        <div className='flex flex-col justify-start items-start gap-6'>
          <Image
            src='/images/navbar/toyota.svg'
            alt='logo'
            width={118}
            height={18}
            className='object-contain w-[30px] h-[30px]'
          />
          <p className='text-base text-gray-700'>
            Toyota 2024 <br /> All rights reserved &copy;
          </p>
        </div>

        {/* // */}
        {/* Footer Links */}
        <div className='footer__links'>
          {footerLinks.map((link) => (
            <div key={link.title} className='footer__link'>
              <h3 className='font-bold'>{link.title}</h3>
              {link.links.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className='text-gray-500'
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
        {/* Footer Links */}
      </div>
      {/* Logo + About, Company, Socials */}

      {/* // */}
      {/* @2024 CarHub. All rights reserved. */}
      <div className='flex justify-between items-center flex-wrap mt-10 border-t border-gray-200 px-8 lg:px-16 py-6'>
        <p>@2024 Toyota. All rights reserved.</p>

        <div className='footer__copyrights-link py-4 flex gap-8'>
          <a
            href='/https://global.toyota/en/privacy-notice/'
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-500'
          >
            プライバシーポリシー
          </a>
          <a
            href='https://global.toyota/en/terms-of-use/'
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-500 px-4'
          >
            利用規約
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
