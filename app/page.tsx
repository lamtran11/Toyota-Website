'use client';
import Image from 'next/image';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../components/share-components/Navbar';
import Hero from '../components/web-top-section/Hero';
import LineUp from '../components/web-top-section/LineUp';

export default function Home() {
  return (
    // <BrowserRouter>
    <div className='overflow-hidden'>
      <Navbar />
      <Hero />
      <LineUp />
    </div>
  );
}
