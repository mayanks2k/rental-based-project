import React from "react";
interface CarRendtalExpProps {
  tagLine: string;
  paragraph: string;
  icon?:'icon1'|'icon2'|'icon3'
}
interface IconSwitchProps {
    iconName: 'icon1' | 'icon2' | 'icon3';
  }
const IconSwitch: React.FC<IconSwitchProps> = ({ iconName }) => {
    switch (iconName) {
      case 'icon1':
        return <svg
        className="w-16 h-16  bg-green-500 text-gray-800 border-4 rounded "
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          fill="#059669"
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m7.171 12.906-2.153 6.411 2.672-.89 1.568 2.34 1.825-5.183m5.73-2.678 2.154 6.411-2.673-.89-1.568 2.34-1.825-5.183M9.165 4.3c.58.068 1.153-.17 1.515-.628a1.681 1.681 0 0 1 2.64 0 1.68 1.68 0 0 0 1.515.628 1.681 1.681 0 0 1 1.866 1.866c-.068.58.17 1.154.628 1.516a1.681 1.681 0 0 1 0 2.639 1.682 1.682 0 0 0-.628 1.515 1.681 1.681 0 0 1-1.866 1.866 1.681 1.681 0 0 0-1.516.628 1.681 1.681 0 0 1-2.639 0 1.681 1.681 0 0 0-1.515-.628 1.681 1.681 0 0 1-1.867-1.866 1.681 1.681 0 0 0-.627-1.515 1.681 1.681 0 0 1 0-2.64c.458-.361.696-.935.627-1.515A1.681 1.681 0 0 1 9.165 4.3ZM14 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
        />
      </svg>;
      case 'icon2':
        return <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 172 172"
        style={{ fill: '#26e07f' }}
      >
        <g fill="none" fillRule="nonzero">
          <path d="M0,172v-172h172v172z" fill="none" />
          <g fill="#1fb141">
            <path d="M21.5,21.5v129h64.5v-32.25v-64.5v-32.25zM86,53.75c0,17.7805 14.4695,32.25 32.25,32.25c17.7805,0 32.25,-14.4695 32.25,-32.25c0,-17.7805 -14.4695,-32.25 -32.25,-32.25c-17.7805,0 -32.25,14.4695 -32.25,32.25zM118.25,86c-17.7805,0 -32.25,14.4695 -32.25,32.25c0,17.7805 14.4695,32.25 32.25,32.25c17.7805,0 32.25,-14.4695 32.25,-32.25c0,-17.7805 -14.4695,-32.25 -32.25,-32.25z"></path>
          </g>
        </g>
      </svg>;
      case 'icon3':
        return  <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 172 172"
        style={{ fill: '#26e07f' }}
      >
        <path d="M0,172v-172h172v172z" fill="none" />
        <path fill="#1fb141" d="M21.5,21.5v129h64.5v-32.25v-64.5v-32.25zM86,53.75c0,17.7805 14.4695,32.25 32.25,32.25c17.7805,0 32.25,-14.4695 32.25,-32.25c0,-17.7805 -14.4695,-32.25 -32.25,-32.25c-17.7805,0 -32.25,14.4695 -32.25,32.25zM118.25,86c-17.7805,0 -32.25,14.4695 -32.25,32.25c0,17.7805 14.4695,32.25 32.25,32.25c17.7805,0 32.25,-14.4695 32.25,-32.25c0,-17.7805 -14.4695,-32.25 -32.25,-32.25z" />
      </svg>;
      default:
        return null;
    }
  };


const CardComponent: React.FC<CarRendtalExpProps> = ({
  tagLine,
  paragraph,
    icon='icon1'
}) => {
  return (
    <div className="p-4">
      <div>
        {icon&&<IconSwitch iconName={icon} />}
      </div>
      <div>
        <h5 className="block py-1 mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          {tagLine}
        </h5>
        <p className="leading-relaxed">{paragraph}</p>
      </div>
    </div>
  );
};

function CarRentalExperience() {
  const item = [
    {
      tagLine: "First Class Services",
      paragraph:
        "Where luxury meets exceptional care, creating unforgettable moments and exceeding your every expectation",
    },
    {
      tagLine: "24/7 road assistance",
      paragraph:
        "Reliable support when you need it most, keeping you on the move with confidence and peace of mind.",
    },
    {
      tagLine: "Free Pick-Up & Drop-Off",
      paragraph:
        "Enjoy free pickup and drop-off services, adding an extra layer of ease to your car rental experience.",
    },
  ];
  return (
    <div
      className="lg:py-20"
      style={{
        backgroundImage:
          "url('https://www.madebydesignesia.com/themes/rentaly/images/background/3.jpg')",
      }}
    >
      <div className="container text-white mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 py-10 bg-cover bg-center">
        <div className="text-6xl p-4 md:col-span-3 lg:col-span-1 font-mono text-white">
          Let's Your Adventure Begin
        </div>
        {item.map((item) => {
          return (
            <CardComponent
              key={item.tagLine}
              tagLine={item.tagLine}
              paragraph={item.paragraph}
            />
          );
        })}
      </div>
    </div>
  );
}

export default CarRentalExperience;
