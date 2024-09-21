import React from "react";
import { FaCarAlt } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa6";
import { MdCategory } from "react-icons/md";
import { CarRendtalExpProps } from "./constants";

interface IconSwitchProps {
  iconName: "icon1" | "icon2" | "icon3";
}

const IconSwitch: React.FC<IconSwitchProps> = ({ iconName }) => {
  switch (iconName) {
    case "icon1":
      return (
        <FaTrophy
          fill="#4ade80"
          size={60}
          className="border-[4px] p-1 rounded border-green-50"
        />
      );
    case "icon2":
      return (
        <MdCategory
          fill="#4ade80"
          size={60}
          className="border-[4px] p-1 rounded border-green-50"
        />
      );
    case "icon3":
      return (
        <FaCarAlt
          fill="#4ade80"
          size={60}
          className="border-[4px] p-1 rounded border-green-50"
        />
      );
    default:
      return null;
  }
};

const Card: React.FC<CarRendtalExpProps> = ({
  tagLine,
  paragraph,
  icon = "icon1",
}) => {
  return (
    <div className="flex flex-col justify-start">
      <div>{icon && <IconSwitch iconName={icon} />}</div>
      <div className="my-4">
        <h5 className="py-1 mb-2 text-xl text-left font-semibold">{tagLine}</h5>
        <p className="text-left text-gray-300">{paragraph}</p>
      </div>
    </div>
  );
};

export default Card;
