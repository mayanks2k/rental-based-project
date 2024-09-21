"use client";

import React, { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Footer } from "../components/footer";
import { HeaderBGImg } from "./header";
import useAuth from "@/hooks/useAuth";
import Loader from "@/components/Loader/Loader";

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
  imageURL: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  title,
  imageURL,
}) => {
  // const pathname = usePathname();
  // const router = useRouter();
  // const { isLoggedIn } = useAuth();

  // useEffect(() => {
  //   if (!isLoggedIn) {
  //     router.push("/login");
  //   } else {
  //     console.log(pathname);
  //     router.push(pathname || "/");
  //   }
  // }, [isLoggedIn, router]);
  // if (!isLoggedIn) {
  //   return <Loader show={true} />;
  // }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <HeaderBGImg title={title} imageURL={imageURL} />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default PageLayout;
