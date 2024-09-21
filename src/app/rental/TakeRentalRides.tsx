import { SwatchIcon } from '@heroicons/react/24/outline'
import React from 'react'
// md:max-w-lg flex-col md:flex-row md:w-full
const Card=()=>{
    return<div className='hover:scale-105 p-2 flex lg:justify-around border-2 shadow-xl py-10 rounded-2xl'>
        <div className=''>
            <img src="	https://blu-smart.com/assets/images/classicRental.png"alt='car...'/>
        </div>
        <div className='space-y-3'>
        <h1 className="text-3xl text-left ">
               <span className='bg-gradient-to-r from-green-500 to-blue-700 text-transparent bg-clip-text'>Classic </span>Rentals
              </h1>
            <p>Comfortable sedans for a long day</p>
            <div className="flex flex-col space-y-4">
        <div className="flex items-center">
          <div className=" p-2 rounded-full bg-green-100">
            <SwatchIcon className="w-6 text-green-700" />
          </div>
          <p className="ml-4">Monthly Payouts And Bonus</p>
        </div>
        <div className="flex items-center">
          <div className=" p-2 rounded-full bg-green-100">
            <SwatchIcon className="w-6 text-green-700" />
          </div>
          <p className="ml-4">Flexible Working Hours</p>
        </div>
        <div className="flex items-center">
          <div className="p-2 rounded-full bg-green-100">
            <SwatchIcon className="w-6 text-green-700" />
          </div>
          <p className="ml-4">Zero Ownership Cost</p>
        </div>
      </div>
        </div>
    </div>
}

function TakeRentalRides() {
  return (
    <div className='container mx-auto py-[90px!important] text-center md:p-0 p-10 space-y-4 '>
        <h1 className=' text-4xl bg-gradient-to-r from-green-500 to-blue-700 text-transparent bg-clip-text'>Take Rental Rides</h1>
        <p className='px-4 mx-auto max-w-5xl text-lg font-semibold text-slate-500 text-center'>Multiple Destinations? One Solution. Introducing hourly rentals. With an accommodating driver at your
             service, choose multiple destinations, to stop by for as long as you like!</p>
        <div className='flex flex-col justify-around items-center md:flex-row gap-2'>
            <Card/>
            <Card/>
        </div>
    </div>
  )
}

export default TakeRentalRides