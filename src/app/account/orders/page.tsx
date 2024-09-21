"use client"

import React from 'react';
import { ArrowRightStartOnRectangleIcon, CalendarDaysIcon, CalendarIcon, CheckBadgeIcon, HomeIcon, PaperAirplaneIcon, UserIcon, XCircleIcon } from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';
import PageLayout from '@/layout/PageLayout';
import { LinkWithIcon } from '@/components/inputs/buttons/linkWithIcon';
import { Table } from '../components/table';
import { columns } from '../constants';
import { completedOrdersData, myOrdersData } from './constants';


const ProfileDashboard = () => {

  const pathname = usePathname();

  const handleClick = () => {
        console.log("clicked")
  } 

  return (
    <PageLayout title='My Orders' imageURL="url('/assets/images/1.jpg')" >
       <div className='container mx-auto'>
       <div className="flex flex-col md:flex-row justify-center md:my-8">
         <div className="md:w-1/5 flex flex-col  items-center p-4 rounded-t-lg shadow-md">
           <img
             className="w-32 h-32 rounded-full object-cover"
             src="/assets/images/profile/jhamlal_profile.jpeg" // Replace with your profile image placeholder
             alt="Profile Picture"
           />
           <div className='flex flex-col items-center my-4'>
             <h3 className="text-xl font-bold mx-auto mb-1">Jhamlal Chelse</h3>
             <p className="text-md text-gray-500">jaxon@gmail.com</p>
           </div>
           <div className="flex flex-col mx-auto gap-2">
                <LinkWithIcon label="Dashboard" href="/account" variant="primary" icon={<HomeIcon className='w-6 h-6' />} isActive={pathname === '/account'}  />
                <LinkWithIcon label="My Profile" href="/account/profile" variant="primary" icon={<UserIcon className='w-6 h-6' />} isActive={pathname === '/account/profile'}  />
                <LinkWithIcon label="My Orders" href="/account/orders" variant="primary" icon={<CalendarIcon className='w-6 h-6' />} isActive={pathname === '/account/orders'}  />
                <LinkWithIcon label="My Favourite Cars" href="/account/favourites" variant="primary" icon={<HomeIcon className='w-6 h-6' />}  />
                <LinkWithIcon label="Sign Out" href="/logout" variant="primary" icon={<ArrowRightStartOnRectangleIcon className='w-6 h-6' />} />
            
           </div>
         </div>
         <div className="md:w-4/5 flex flex-col flex-grow p-4">
           {/* KPI Row */}
           
           {/* Table */}
           <div className="mt-4 overflow-auto rounded-lg shadow-md">
           {/* <div className="container mx-auto px-4">
               </div> */}
               <div className='md:p-4'>
                   <h3 className='font-bold p-4 md:p-0 md:mb-8'>Scheduled Orders</h3>
                   <Table columns={columns} data={myOrdersData} />
               </div>

           </div>

           <div className="mt-4 overflow-auto rounded-lg shadow-md">
           {/* <div className="container mx-auto px-4">
               </div> */}
               <div className='md:p-4'>
                   <h3 className='font-bold p-4 md:p-0 md:mb-8'>Completed Orders</h3>
                   <Table columns={columns} data={completedOrdersData} />
               </div>

           </div>
          
         </div>
       </div>
     </div>
     </PageLayout>
  );
};

export default ProfileDashboard;

