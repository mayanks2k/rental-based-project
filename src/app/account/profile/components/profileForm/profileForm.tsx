"use client";
import React, { useState } from "react";
interface NavItemProps {
  title: string;
  index: number;
  active: boolean;
  setActive: (index: number) => void;
}

const NavItem: React.FC<NavItemProps> = ({
  title,
  index,
  active,
  setActive,
}) => {
  return (
    <button
      className={`bg-white inline-block py-1  font-semibold ${
        active
          ? "border-b-[3px] border-green-500 text-slate-900"
          : "border-b-[3px] border-white text-slate-400"
      }`}
      onClick={() => setActive(index)}
    >
      {title}
    </button>
  );
};
interface ToggleHandleFormProps {
  title: string;
  notificationText: string;
}

export const ToggleHandleForm: React.FC<ToggleHandleFormProps> = ({
  title,
  notificationText,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="border space-y-2 p-4 rounded">
      <div className="flex justify-between">
        <h1>{title}</h1>
        <label className="flex cursor-pointer select-none items-center">
          <div className="relative">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
              className="sr-only"
            />
            <div
              className={`block h-6 w-10 rounded-full  ${
                isChecked ? "bg-green-400" : "bg-slate-400"
              }`}
            ></div>
            <div
              className={`dot absolute  top-1/2 transform -translate-y-1/2 left-0.5 h-4 w-4 rounded-full transition ${
                isChecked ? "translate-x-full bg-gray-100" : "bg-gray-100"
              }`}
            ></div>
          </div>
        </label>
      </div>
      <p className="text-gray-400">{notificationText}</p>
    </div>
  );
};

export const ProfileForm = () => {
  const [active, setActive] = useState<number>(1);
  const handleSetActive = (index: number) => {
    setActive(index);
  };
  const [isOpen, setIsOpen] = useState(false);
  const [isTimeOpen, setIsTimeOpen] = useState(false);
  const toggleFormItem = [
    {
      itemLable: "Discount Notifications",
      itemSummary: "You'll get notification while new discount available.",
    },
    {
      itemLable: "Daily Reports",
      itemSummary: "We will send you a report everyday.",
    },
    {
      itemLable: "New Product Notification",
      itemSummary: "You'll get notification while new product available.",
    },
    {
      itemLable: "Monthly Reports",
      itemSummary: "We will send you a report each month.",
    },
  ];

  return (
    <div className="min-h-screen  flex items-start justify-center font-semibold text-sm">
      <div className="bg-white p-8 rounded-md shadow-md w-full max-w-4xl">
        <nav className=" flex justify-between pb-4">
          <div className="flex space-x-4">
            <NavItem
              title="Home"
              index={1}
              active={active === 1}
              setActive={handleSetActive}
            />
            <NavItem
              title="Notification"
              index={2}
              active={active === 2}
              setActive={handleSetActive}
            />
          </div>
        </nav>
        <div>
          {active == 1 && (
            <form className="grid gap-2 md:grid-cols-2">
              <div className="mb-4">
                <label className="block text-gray-700" htmlFor="username">
                  Username
                </label>
                <input
                  className="w-full mt-2 p-2 border-2 border-gray-300 rounded-md focus:border-green-300 focus:ring-2 focus:ring-green-200 focus:bg-green-100 focus:outline-none"
                  type="text"
                  id="username"
                  placeholder="Enter username"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700" htmlFor="email">
                  Email Address
                </label>
                <input
                  className="w-full mt-2 p-2 border-2 border-gray-300 rounded-md focus:border-green-300 focus:ring-2 focus:ring-green-200 focus:bg-green-100 focus:outline-none"
                  type="email"
                  id="email"
                  placeholder="Enter email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700" htmlFor="password">
                  New Password
                </label>
                <input
                  className="w-full mt-2 p-2 border-2 border-gray-300 rounded-md focus:border-gray-300 focus:outline-none"
                  type="password"
                  id="password"
                  placeholder="***********"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700"
                  htmlFor="reenter-password"
                >
                  Re-enter Password
                </label>
                <input
                  className="w-full mt-2 p-2 border-2 border-gray-300 rounded-md focus:border-gray-300 focus:outline-none"
                  type="password"
                  id="reenter-password"
                  placeholder="**********"
                />
              </div>
              <div className="mb-4 relative">
                <label className="block text-gray-700" htmlFor="language">
                  Language
                </label>
                <p className="text-slate-400">Select your prefered language.</p>
                <div
                  className="w-full mt-2 py-2 border border-gray-300 rounded-md cursor-pointer"
                  onMouseEnter={() => setIsOpen(true)}
                  onMouseLeave={() => setIsOpen(false)}
                >
                  <div
                    className="px-2 flex justify-between items-center"
                    style={{ color: `${isOpen ? "#22C55E" : ""}` }}
                  >
                    <span>Select Language</span>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </div>
                  {isOpen && (
                    <ul className="absolute w-full bg-white border border-gray-300 rounded-md mt-2  shadow-lg z-10">
                      <li className="p-2 hover:text-white hover:bg-green-400">
                        English
                      </li>
                      <li className="p-2 hover:text-white hover:bg-green-400">
                        France
                      </li>
                      <li className="p-2 hover:text-white hover:bg-green-400">
                        German
                      </li>
                      <li className="p-2 hover:text-white hover:bg-green-400">
                        Japan
                      </li>
                    </ul>
                  )}
                </div>
              </div>
              <div className="mb-4 relative">
                <label className="block text-gray-700" htmlFor="language">
                  Hour Format
                </label>
                <p className="text-slate-400">Select your Time.</p>
                <div
                  className="w-full mt-2 py-2 border border-gray-300 rounded-md cursor-pointer"
                  onMouseEnter={() => setIsTimeOpen(true)}
                  onMouseLeave={() => setIsTimeOpen(false)}
                >
                  <div
                    className="px-2 flex justify-between items-center"
                    style={{ color: `${isOpen ? "#22C55E" : ""}` }}
                  >
                    <span>Select Language</span>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </div>
                  {isTimeOpen && (
                    <ul className="absolute w-full bg-white border border-gray-300 rounded-md mt-2  shadow-lg z-10">
                      <li className="p-2 hover:text-white hover:bg-green-400">
                        12-Hours
                      </li>
                    </ul>
                  )}
                </div>
              </div>

              <div className="md:col-span-2 mt-6">
                <button
                  className="bg-green-500 hover:shadow-green-300 hover:shadow-lg text-white text-sm font-semibold px-4 py-2 rounded-md"
                  type="submit"
                >
                  Update profile
                </button>
              </div>
            </form>
          )}
        </div>

        {active == 2 && (
          <div className="grid gap-2 md:grid-cols-2">
            {toggleFormItem.map((item, index) => {
              return (
                <ToggleHandleForm
                  title={item.itemLable}
                  notificationText={item.itemSummary}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
