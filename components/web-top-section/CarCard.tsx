'use client';

import React, { useState } from 'react';
import CustomButton from '../share-components/CustomButton';
import Link from 'next/link';

const CarCard = () => {
  const [selectedButton, setSelectedButton] = useState('');

  const handleButtonClick = (buttonName: string) => {
    setSelectedButton(buttonName);
  };

  const carDetails = {
    Sedan: {
      id: 'sedan',
      image: './vios.png',
      name: 'Sedan',
      price: '$30,000',
      seats: 5,
    },
    Hatchback: {
      id: 'hatchback',
      image: './wigo.png',
      name: 'Hatchback',
      price: '$25,000',
      seats: 5,
    },
    SUV: {
      id: 'suv',
      image: './raize.png',
      name: 'SUV',
      price: '$35,000',
      seats: 7,
    },
    PickupTruck: {
      id: 'pickup',
      image: './hilux.png',
      name: 'Pickup Truck',
      price: '$40,000',
      seats: 4,
    },
  };

  // const navigate = useNavigate();

  // const handleButtonSedanClick = () => {
  //   navigate("/sedan"); // Navigate to Page 1
  // };

  // const handleButtonSUVClick = () => {
  //   navigate("/suv"); // Navigate to Page 2
  // };

  // const handleButtonHatchbackClick = () => {
  //   navigate("/hatchback"); // Navigate to Page 2
  // };

  // const handleButtonPickupTruckClick = () => {
  //   navigate("/pickuptruck"); // Navigate to Page 2
  // };

  return (
    <>
      <div className='car-card-element'>
        <div className='car-card-preview flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-16 py-10'>
          <img src='./vios.png' alt='Vios' />

          <h3>{carDetails['Sedan'].name}</h3>
          <p>Price: {carDetails['Sedan'].price}</p>
          <p>Seats: {carDetails['Sedan'].seats}</p>

          <Link className='carcard-button' href='/sedan'>
            View Details
          </Link>
        </div>

        <div className='car-card-preview flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-16 py-10'>
          <img src='./hilux.png' alt='Hatchback' />

          <h3>{carDetails['Hatchback'].name}</h3>
          <p>Price: {carDetails['Hatchback'].price}</p>
          <p>Seats: {carDetails['Hatchback'].seats}</p>

          <Link className='carcard-button' href='/hatchback'>
            View Details
          </Link>
        </div>

        <div className='car-card-preview flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-16 py-10'>
          <img src='./wigo.png' alt='Wigo' />

          <h3>{carDetails['SUV'].name}</h3>
          <p>Price: {carDetails['SUV'].price}</p>
          <p>Seats: {carDetails['SUV'].seats}</p>

          <Link className='carcard-button' href='/suv'>
            View Details
          </Link>
        </div>

        <div className='car-card-preview flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-16 py-10'>
          <img src='./raize.png' alt='Pickup Truck' />

          <h3>{carDetails['PickupTruck'].name}</h3>
          <p>Price: {carDetails['PickupTruck'].price}</p>
          <p>Seats: {carDetails['PickupTruck'].seats}</p>

          <Link className='carcard-button' href='/pickuptruck'>
            View Details
          </Link>
        </div>
      </div>
    </>
  );
};

export default CarCard;
