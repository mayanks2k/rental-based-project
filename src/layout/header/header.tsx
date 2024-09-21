"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { Header } from '@/components/Header';

// Interface for header props
interface HeaderProps {
  title: string;
  imageURL: string;
}

export const HeaderBGImg: React.FC<HeaderProps> = ({ title, imageURL }) => {
  return (
      <div
        className="bg-cover bg-center bg-fixed h-52 md:h-6 px-2 sm:px-5 md:px-10 lg:px-32"
        style={{ backgroundImage: `${imageURL}` }}
      >
        <Header />
        <h2 className="text-center text-5xl text-white font-bold mt-8 mb-2">
          {title}
        </h2>
      </div>
  )
}
