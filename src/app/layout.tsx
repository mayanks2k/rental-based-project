"use client";

import { poppins } from "@/fonts";
import "../../styles/global.css";
import { ReactNode } from "react";
import { AuthProvider } from "../contexts/AuthContext";
import NetworkStatus from "@/components/NetworkStatus";
import { GoogleOAuthProvider } from "@react-oauth/google";

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>Car Rental App</title>
      </head>
      <body
        className={`${poppins.className} antialiased bg-white dark:bg-gray-900 dark:text-white`}
      >
        <NetworkStatus />
        <GoogleOAuthProvider
          clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || ""}
        >
          <AuthProvider>{children}</AuthProvider>
        </GoogleOAuthProvider>
      </body>
    </html>
  );
};

export default RootLayout;
