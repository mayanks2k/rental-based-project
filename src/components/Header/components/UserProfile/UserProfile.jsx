import React, { useState } from "react";
import { FaUserCircle, FaShoppingBag, FaSignOutAlt } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { RiDashboardFill } from "react-icons/ri";
import useAuth from "@/hooks/useAuth";

const UserProfile = () => {
  const { logout } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = async () => {
    try {
      const token = await logout();
      console.log("login token...", token);
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="relative inline-block text-left">
      <div
        className={`flex items-center space-x-4 ${
          dropdownOpen ? "text-black" : "text-white"
        }`}
        onClick={toggleDropdown}
      >
        <Image
          className="w-12 h-12 rounded-full object-cover"
          src="/assets/images/profile/jhamlal_profile.jpeg" // Replace with your profile image placeholder
          alt="Profile Picture"
          width={48}
          height={48}
        />
      </div>

      {dropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <Link
              href="/account"
              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              <RiDashboardFill className="mr-3" /> Dashboard
            </Link>
            <Link
              href="/account/profile"
              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              <FaUserCircle className="mr-3" /> Profile
            </Link>
            <Link
              href="/account/orders"
              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              <FaShoppingBag className="mr-3" /> Orders
            </Link>
            <button
              onClick={handleLogout}
              className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              <FaSignOutAlt className="mr-3" /> Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
