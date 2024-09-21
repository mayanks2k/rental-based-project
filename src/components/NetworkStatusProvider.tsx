"use client"

import React, { useEffect } from 'react';
import useNetwork from '@/hooks/useNetwork';
import { toast, Toaster } from 'sonner';

const NetworkStatusProvider = ({ children }: { children: React.ReactNode }) => {
  const isOnline = useNetwork();

  useEffect(() => {
    if (!isOnline) {
      console.log("Offline now");
      toast.error("You are offline", { 
        duration: 5000,
        position: "top-center", 
      });
    } else {
      console.log("Online now");
      toast.success("You are online now.", { 
        duration: 5000,
        position: "top-center", 
      });
    }
  }, [isOnline]);

  return (
    <div className={`bg-blue-100 text-gray-800 dark:text-white`}>
      <main>
        {children}
      </main>
      <Toaster richColors />
    </div>
  );
}

export default NetworkStatusProvider;