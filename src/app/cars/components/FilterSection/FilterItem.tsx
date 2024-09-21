// src/app/cars/components/FilterItem/FilterItem.tsx
"use client";
import React, { useState, useEffect } from "react";
import styles from "./Checkbox.module.css";

type FilterItemProps = {
  item: string;
  category: string;
  onFilterChange: (category: string, value: string) => void;
  checked: boolean; // New prop to control initial checked state
};

const FilterItem: React.FC<FilterItemProps> = ({
  item,
  category,
  onFilterChange,
  checked,
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  useEffect(() => {
    setIsChecked(checked);
  }, []);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    onFilterChange(category, item);
  };

  return (
    <div className="flex items-center space-x-2 mb-2">
      <input
        type="checkbox"
        id={`${item}`}
        className={`${styles.checkboxGreen} ${
          isChecked ? styles.checkboxGreenChecked : ""
        }`}
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <label className="text-sm lg:text-base" htmlFor={`${item}`}>{item}</label>
    </div>
  );
};

export default FilterItem;
