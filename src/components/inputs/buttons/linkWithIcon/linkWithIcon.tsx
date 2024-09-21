import React from 'react';
import Link from 'next/link';

interface LinkIconProps {
  label: string;
  href?: string; // URL for navigation
  icon?: React.ReactElement; // Optional icon component
  variant?: 'primary' | 'secondary' | 'tertiary'; // Optional variant for styling
  isActive?: boolean;
  disabled?: boolean; // Optional flag to disable the button
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export const LinkWithIcon: React.FC<LinkIconProps> = ({ label, href, onClick, icon, variant = 'primary', isActive, disabled }) => {
  const classes = `
    flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
      variant === 'primary'
        ? `${isActive ? 'bg-green-500 text-white' : 'bg-white text-gray-700'}`
        : variant === 'secondary'
        ? 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        : 'bg-transparent text-blue-500 hover:text-blue-700'
    } ${disabled ? 'cursor-not-allowed opacity-50' : ''}`;

    const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (!href) {
        e.preventDefault();
        if (onClick) {
          onClick(e);
        }
      }
    };

  return (
    <Link href={href || '#'} passHref>
      <div
        className={classes}
        role="link"
        aria-disabled={disabled}
        onClick={handleClick}
        style={{ cursor: href ? 'pointer' : 'default' }}
      >
        {icon && <span className="mr-2">{icon}</span>}
        {label}
      </div>
    </Link>
  );
};