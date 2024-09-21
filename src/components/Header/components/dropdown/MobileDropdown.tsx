import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Link from "next/link";

export interface DropdownItem {
  id: number;
  headerLabel: string;
  uris?: string[];
  uri?: string;
  menuItem?: MenuItem[];
}

export interface MenuItem {
  id: number;
  label: string;
  uri?: string;
  menuSubItem?: SubMenuItem[];
}

export interface SubMenuItem {
  id: number;
  label: string;
  uri?: string;
}

interface DropdownProps {
  item: DropdownItem;
}

interface MenuProps {
  menuItems: DropdownItem["menuItem"];
}

const SubMenu: React.FC<MenuProps> = ({ menuItems }) => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <ul className="pl-4 my-2">
      {menuItems?.map((subItem) => (
        <li key={subItem.id}>
          <div className="flex justify-between items-center my-2">
            {subItem?.uri ? (
              <Link
                href={`/${subItem.uri}`}
                className="text-white hover:underline"
              >
                {subItem.label}
              </Link>
            ) : (
              <button
                onClick={() => setOpen(open === subItem.id ? null : subItem.id)}
                className="w-full text-left flex items-center justify-between focus:outline-none"
              >
                <span className="text-slate-400">{subItem.label}</span>
                {subItem.menuSubItem && (
                  <span className="ml-2">
                    {open === subItem.id ? <FaChevronUp /> : <FaChevronDown />}
                  </span>
                )}
              </button>
            )}
          </div>
          {open === subItem.id && subItem.menuSubItem && (
            <ul className="pl-4">
              {subItem.menuSubItem.map((nestedItem) => (
                <li key={nestedItem.id}>
                  <Link
                    href={`/${nestedItem.uri}`}
                    className="block py-1 text-slate-400 hover:underline"
                  >
                    {nestedItem.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

const MobileDropdown: React.FC<DropdownProps> = ({ item }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="border-b text-base">
      <div className="flex justify-between items-center">
        {item.uris ? (
          <button
            onClick={() => setOpen(!open)}
            className="w-full mt-4 text-left py-1.5 px-2 font-semibold border-b-0.5 border-gray-200 flex items-center justify-between focus:outline-none"
          >
            <span>{item.headerLabel}</span>
            <span className="ml-2">
              {open ? <FaChevronUp /> : <FaChevronDown />}
            </span>
          </button>
        ) : (
          <Link
            href={`${item.uri}`}
            className="w-full mt-4 first:mt-0 text-white text-left pt-4 pb-1 md:pt-7 md:pb-2 px-1
            font-semibold border-b-0.5 border-gray-200 flex items-center justify-between"
          >
            {item.headerLabel}
          </Link>
        )}
      </div>
      {open && item.menuItem && <SubMenu menuItems={item.menuItem} />}
    </div>
  );
};

export default MobileDropdown;
