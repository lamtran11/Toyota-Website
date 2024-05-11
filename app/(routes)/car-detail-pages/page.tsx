import react from 'react';
import Hatchback from '@/components/car-detail-pages/car-details';
import Sedan from '@/components/car-detail-pages/sedan';
import SUV from '@/components/car-detail-pages/suv';
import PickupTruck from '@/components/car-detail-pages/pickup-truck';
import CarDetails from '@/components/web-top-section/CarDetails';

export default function CarDetailPages() {
  return (
    <div className='w-full h-auto lg:grid-cols-2'>
      <Hatchback />
      {/* <PickupTruck />
      <Sedan />
      <SUV />
      <CarDetails/> */}
    </div>
  );
}
