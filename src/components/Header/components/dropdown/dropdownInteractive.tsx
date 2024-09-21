import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import styles from "./dropdown.module.css";
import { FaAngleDown } from "react-icons/fa6";

interface DropdownItem {
  id: number;
  headerLabel: string;
  uris?: string[];
  uri?: string;
  menuItem?: MenuItem[];
}

interface MenuItem {
  id: number;
  label: string;
  uri?: string;
  subMenu?: SubMenuItem[];
}

interface SubMenuItem {
  id: number;
  label: string;
  uri?: string;
  subSubMenu?: SubSubMenuItem[];
}

interface SubSubMenuItem {
  id: number;
  label: string;
  uri: string;
}

interface DropdownProps {
  dropdownItem: DropdownItem;
  showHeader: boolean;
  isActive: (uri: string) => boolean;
}

export const Dropdown: React.FC<DropdownProps> = ({
  dropdownItem,
  showHeader,
  isActive,
}) => {
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const [activeSubMenu, setActiveSubMenu] = useState<number | null>(null);
  const [activeSubSubMenu, setActiveSubSubMenu] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleMenuHover = (menu: number | null) => {
    setActiveMenu(menu);
  };

  const handleSubMenuHover = (submenu: number | null) => {
    setActiveSubMenu(submenu);
  };

  const handleSubSubMenuHover = (subsubmenu: number | null) => {
    setActiveSubSubMenu(subsubmenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Check if dropdown is in viewport
      if (dropdownRef.current && !isElementInViewport(dropdownRef.current)) {
        // Reset active states when dropdown is not visible
        setActiveMenu(null);
        setActiveSubMenu(null);
        setActiveSubSubMenu(null);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isElementInViewport = (el: HTMLElement) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  return (
    <div className={`hidden lg:block ${styles.navbar}`} ref={dropdownRef}>
      <div
        className={styles["nav-item"]}
        onMouseEnter={() => handleMenuHover(dropdownItem.id)}
        onMouseLeave={() => handleMenuHover(null)}
      >
        <span
          className={`flex items-center space-x-1 ${
            dropdownItem?.uris?.some((uri) => isActive(`/${uri}`)) ||
            isActive(`${dropdownItem?.uri}`)
              ? "text-green-500"
              : showHeader
              ? "text-black"
              : "text-white"
          }`}
        >
          {dropdownItem?.uris ? (
            <p>{dropdownItem.headerLabel}</p>
          ) : (
            <Link href={`${dropdownItem.uri}`}>{dropdownItem.headerLabel}</Link>
          )}
          {dropdownItem?.uris && <FaAngleDown />}
        </span>

        {activeMenu === dropdownItem.id && (
          <div
            className={`${showHeader ? "bg-slate-800" : "bg-white"} ${
              styles.dropdown
            }`}
          >
            <ul>
              {dropdownItem?.menuItem?.map((item, menuIndex) => (
                <li
                  key={menuIndex}
                  className={`${
                    showHeader
                      ? " text-white hover:text-slate-800"
                      : " text-slate-800 hover:text-white"
                  } ${
                    isActive(`/${item.uri}`)
                      ? "bg-green-500 my-0.5 first:mt-0 last:mb-0"
                      : styles["not-select-li"]
                  }`}
                  onMouseEnter={() => handleSubMenuHover(item.id)}
                  onMouseLeave={() => handleSubMenuHover(null)}
                >
                  {item.uri ? (
                    <Link
                      href={`/${item.uri}`}
                      className={`${
                        isActive(`/${item.uri}`)
                          ? showHeader
                            ? " text-white"
                            : " text-slate-800"
                          : null
                      }`}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <p>{item.label}</p>
                  )}
                  {/* Sub Menu */}
                  {activeSubMenu === item.id && item.subMenu && (
                    <div
                      className={`${showHeader ? "bg-slate-800" : "bg-white"} ${
                        styles["sub-menu"]
                      }`}
                    >
                      <ul>
                        {item.subMenu.map((subItem, subIndex) => (
                          <li
                            key={subIndex}
                            className={`${
                              showHeader
                                ? " text-white hover:text-slate-800"
                                : " text-slate-800 hover:text-white"
                            } ${
                              isActive(`/${subItem.uri}`)
                                ? "bg-green-500 my-0.5 first:mt-0 last:mb-0"
                                : styles["not-select-li"]
                            }`}
                            onMouseEnter={() =>
                              handleSubSubMenuHover(subItem.id)
                            }
                            onMouseLeave={() => handleSubSubMenuHover(null)}
                          >
                            {subItem?.uri ? (
                              <Link
                                href={`/${subItem.uri}`}
                                className={`${
                                  isActive(`/${subItem.uri}`)
                                    ? showHeader
                                      ? " text-white"
                                      : " text-slate-800"
                                    : null
                                }`}
                              >
                                {subItem.label}
                              </Link>
                            ) : (
                              <p>{subItem.label}</p>
                            )}
                            {/* Sub Sub Menu */}
                            {activeSubSubMenu === subItem.id &&
                              subItem.subSubMenu && (
                                <div
                                  className={`${
                                    showHeader ? "bg-slate-800" : "bg-white"
                                  } ${styles["sub-sub-menu"]}`}
                                >
                                  <ul>
                                    {subItem.subSubMenu.map(
                                      (subSubItem, subSubIndex) => (
                                        <li
                                          key={subSubIndex}
                                          className={`${
                                            showHeader
                                              ? " text-white hover:text-slate-800"
                                              : " text-slate-800 hover:text-white"
                                          } ${
                                            isActive(`/${subSubItem.uri}`)
                                              ? "bg-green-500 my-0.5 first:mt-0 last:mb-0"
                                              : styles["not-select-li"]
                                          }`}
                                        >
                                          <Link
                                            href={`/${subSubItem.uri}`}
                                            className={`${
                                              isActive(`/${subSubItem.uri}`)
                                                ? showHeader
                                                  ? " text-white"
                                                  : " text-slate-800"
                                                : null
                                            }`}
                                          >
                                            {subSubItem.label}
                                          </Link>
                                        </li>
                                      )
                                    )}
                                  </ul>
                                </div>
                              )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
