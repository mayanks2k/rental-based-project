import { FaEdit, FaSmile } from "react-icons/fa";
import { FaCar, FaRegCalendarDays } from "react-icons/fa6";

export const data = [
  {
    label: "Choose Vehicle & Raise the request",
    content:
      "Choose the desired Vehicle varient and submit subscription through our app or representative",
    icon: <FaCar size={40} color="#e5e7eb" />,
  },
  {
    label: "Pick a plan",
    content:
      "Choose the plan that fits your budget & requirement with options to purchase, upgrade or renew subscription & many more.",
    icon: <FaRegCalendarDays size={40} color="#e5e7eb" />,
  },
  {
    label: "Submit documents and subscribe",
    content:
      "Provide documents for identity & background verification then sign the subscription agreement to secure your reservation with ease",
    icon: <FaEdit size={40} color="#e5e7eb" />,
  },
  {
    label: "Take Possession – Own your Fleet",
    content:
      "Hassle-free convenience as we take care of every detail and get your car delivered to you, safe and sanitised.",
    icon: <FaSmile size={40} color="#e5e7eb" />,
  },
];
