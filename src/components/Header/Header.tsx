"use client"; // Add this line to mark as a Client Component

import React, { useEffect, useState, useRef } from "react";
import { dropdownOptions } from "./constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dropdown } from "./components/dropdown";
import MobileDropdown from "./components/dropdown/MobileDropdown";
import useAuth from "@/hooks/useAuth";
import UserProfile from "./components/UserProfile/UserProfile";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const [showHeader, setShowHeader] = useState(true);
  const [showBgColor, setShowBgColor] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("down");
  const headerRef = useRef(null);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const { isLoggedIn } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;
      const scrollTopDifference = currentScrollTop - lastScrollTop;

      // Determine scroll direction
      if (scrollTopDifference > 0) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }

      // Show/hide header based on scroll position
      setShowHeader(currentScrollTop <= 0 || scrollDirection === "up");

      // Change background color based on scroll position
      setShowBgColor(currentScrollTop > 0);

      // Update last scroll position
      setLastScrollTop(currentScrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop, scrollDirection]);

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <header
      ref={headerRef}
      className={`flex py-3 rounded-sm transition-all duration-300 ease-in sticky top-0 z-50 ${
        showBgColor ? "bg-white shadow-md" : "bg-transparent"
      } ${showHeader ? "opacity-100" : "opacity-0"}`}
    >
      <div className="flex flex-wrap items-center justify-between w-full">
        <Link href="/">
          <img
            src={`/assets/images/car/carlogo.png`}
            alt="logo"
            className="h-12 text-white"
          />
        </Link>

        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 
            max-lg:before:inset-0 max-lg:before:z-50 `}
        >
          {/* Cross Icon Button */}
          <button
            className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 fill-black"
              viewBox="0 0 320.591 320.591"
            >
              <path
                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                data-original="#000000"
              ></path>
              <path
                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                data-original="#000000"
              ></path>
            </svg>
          </button>

          <ul className="lg:flex gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-gradient-to-r from-green-800 to-green-600 max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
            <Link href="/" className="md:hidden">
              <img
                src="/assets/images/car/carlogo.png"
                alt="logo"
                className="h-12"
              />
            </Link>

            {dropdownOptions.map((item, index) => {
              return (
                <Dropdown
                  key={index}
                  dropdownItem={item}
                  showHeader={showBgColor}
                  isActive={isActive}
                />
              );
            })}

            <div className="lg:hidden">
              {dropdownOptions.map((item, index) => {
                return <MobileDropdown key={index} item={item} />;
              })}
            </div>
          </ul>
        </div>

        <div className="flex pace-x-5 items-center">
          {isLoggedIn ? (
            <UserProfile />
          ) : (
            <Link href="/login">
              <span
                className="text-white bg-green-500 font-medium px-4 md:px-7 p-1 md:py-2 me-5 rounded-lg
                  shadow-md active:translate-y-0.5 active:shadow-none hover:shadow-green-500"
              >
                Sign In
              </span>
            </Link>
          )}
          {/* Hamburger Icon */}
          <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <svg
              className="w-7 h-7"
              fill={showBgColor ? "#000" : "#fff"}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};
