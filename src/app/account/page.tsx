"use client"

import React from 'react';
import { KpiCard } from './components/dashboard-kpi';
import { ArrowRightStartOnRectangleIcon, CalendarDaysIcon, CalendarIcon, CheckBadgeIcon, HomeIcon, PaperAirplaneIcon, UserIcon, XCircleIcon } from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';
import { Table } from './components/table';
import { columns, data, jeepData, productData } from './constants';
import { Card } from '@/components/productCard';
import { SquareCard } from '@/components/productCard/squareCard';
import { Header } from '@/components/Header';
import PageLayout from '@/layout/PageLayout';
import { LinkWithIcon } from '@/components/inputs/buttons/linkWithIcon';
import useAuth from '@/hooks/useAuth';


const ProfileDashboard = () => {

  const pathname = usePathname();
  const { logout } = useAuth();

  const handleClick = () => {
        console.log("clicked")
  } 

  const handleLogout = async (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    try {
      const token = await logout();
      console.log("login token...", token);
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <PageLayout title='Dashboard' imageURL="url('/assets/images/1.jpg')" >
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
                <LinkWithIcon label="My Orders" href="/account/orders" variant="primary" icon={<CalendarIcon className='w-6 h-6' />}  />
                <LinkWithIcon label="My Favourite Cars" href="/account/favourites" variant="primary" icon={<HomeIcon className='w-6 h-6' />}  />
                <LinkWithIcon label="Sign Out" onClick={handleLogout} variant="primary" icon={<ArrowRightStartOnRectangleIcon className='w-6 h-6' />} />
           </div>
         </div>
         <div className="md:w-4/5 flex flex-col flex-grow p-4">
           {/* KPI Row */}
           <div className="grid grid-cols-2  md:grid-cols-4 gap-4">
             <KpiCard title="Sales" icon={<CheckBadgeIcon className='w-8 h-8 text-green-500' />} value={1456} positiveChange={true} percentageChange={15.2} />
             <KpiCard title="Website Visitors" icon={<PaperAirplaneIcon className='w-8 h-8 text-green-500' />} value={16040} />
             <KpiCard title="Total Orders" icon={<CalendarDaysIcon className='w-8 h-8 text-green-500' />} value={4321} />
             <KpiCard title="Cancelled Orders" icon={<XCircleIcon className='w-8 h-8 text-green-500' />} value={24} positiveChange={false} percentageChange={-2.1} />
           </div>
           {/* Table */}
           <div className="mt-4 overflow-auto rounded-lg shadow-md">
           {/* <div className="container mx-auto px-4">
               </div> */}
               <div className='md:p-4'>
                   <h3 className='font-bold p-4 md:p-0 md:mb-8'>My Recent Orders</h3>
                   <Table columns={columns} data={data} />
               </div>

           </div>
           <div className="mt-4 overflow-auto rounded-lg shadow-md">

           <div className='md:p-4'>
               <h3 className='font-bold p-4 md:p-0 md:mb-8'>My Favourites</h3>
                   {productData.map((prod, key) => (
                       <Card 
                       title={prod.title} 
                       subtitle={prod.subtitle}
                       imageUrl={prod.imageUrl}
                       stats={prod.stats}
                       actions={prod.actions}
                   />
                   ))}
           </div>
           </div>
          
         </div>
       </div>
     </div>
     </PageLayout>
  );
};

export default ProfileDashboard;



// <div className='container mx-auto'>
//       <div className="flex flex-col md:flex-row justify-center md:my-8">
//         <div className="md:w-1/5 flex flex-col  items-center p-4 rounded-t-lg shadow-md">
//           <img
//             className="w-32 h-32 rounded-full object-cover"
//             src="https://via.placeholder.com/150" // Replace with your profile image placeholder
//             alt="Profile Picture"
//           />
//           <div className='my-4'>
//             <h3 className="text-xl font-bold mx-auto mb-1">John Doe</h3>
//             <p className="text-md text-gray-500">john@gmail.com</p>
//           </div>
//           <div className="flex flex-col mx-auto gap-2">
//             <ButtonIcon label="Dashboard" variant="primary" icon={<HomeIcon className='w-6 h-6' />} onClick={handleClick} isActive={pathname === '/account'} />
//             <ButtonIcon label="My Profile" variant="primary" icon={<UserIcon className='w-6 h-6' />} onClick={handleClick} />
//             <ButtonIcon label="My Orders" variant="primary" icon={<CalendarIcon className='w-6 h-6' />} onClick={handleClick} />
//             <ButtonIcon label="My Favourite Cars" variant="primary" icon={<HomeIcon className='w-6 h-6' />} onClick={handleClick} />
//             <ButtonIcon label="Sign Out" variant="primary" icon={<ArrowRightStartOnRectangleIcon className='w-6 h-6' />} onClick={handleClick} />
            
//           </div>
//         </div>
//         <div className="md:w-4/5 flex flex-col flex-grow p-4">
//           {/* KPI Row */}
//           <div className="grid grid-cols-2  md:grid-cols-4 gap-4">
//             <KpiCard title="Sales" icon={<CheckBadgeIcon className='w-8 h-8 text-green-500' />} value={1456} positiveChange={true} percentageChange={15.2} />
//             <KpiCard title="Website Visitors" icon={<PaperAirplaneIcon className='w-8 h-8 text-green-500' />} value={65} />
//             <KpiCard title="Total Orders" icon={<CalendarDaysIcon className='w-8 h-8 text-green-500' />} value={54321} />
//             <KpiCard title="Cancelled Orders" icon={<XCircleIcon className='w-8 h-8 text-green-500' />} value={3.5} positiveChange={false} percentageChange={-2.1} />
//           </div>
//           {/* Table */}
//           <div className="mt-4 overflow-auto rounded-lg shadow-md">
//           {/* <div className="container mx-auto px-4">
//               </div> */}
//               <div className='md:p-4'>
//                   <h3 className='font-bold p-4 md:p-0 md:mb-8'>My Recent Orders</h3>
//                   <Table columns={columns} data={data} />
//               </div>

//           </div>
//           <div className="mt-4 overflow-auto rounded-lg shadow-md">

//           <div className='md:p-4'>
//               <h3 className='font-bold p-4 md:p-0 md:mb-8'>My Favourites</h3>
//                   {productData.map((prod, key) => (
//                       <Card 
//                       title={prod.title} 
//                       subtitle={prod.subtitle}
//                       imageUrl={prod.imageUrl}
//                       stats={prod.stats}
//                       actions={prod.actions}
//                   />
//                   ))}
//           </div>
//           </div>
          
//         </div>
//       </div>
//     </div>