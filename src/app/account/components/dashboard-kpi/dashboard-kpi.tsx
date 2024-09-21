import React from 'react';

interface KpiCardProps {
  title: string;
  icon?: React.ReactElement;
  value: number;
  percentageChange?: number; // Optional percentage change
  positiveChange?: boolean; // Optional flag for positive change
}

export const KpiCard: React.FC<KpiCardProps> = ({ title, icon, value, percentageChange, positiveChange }) => {
  const getChangeColor = () => {
    if (percentageChange) {
      return positiveChange ? 'text-green-500' : 'text-red-500';
    }
    return 'text-gray-500';
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className='flex my-2'>
        {icon && <span className="mr-2">{icon}</span>}
        <h3 className="text-lg font-medium mb-2">{title}</h3>
      </div>
      <p className="text-4xl font-semibold">{value.toLocaleString()}</p>
      {percentageChange && (
        <p className={`mt-2 text-sm ${getChangeColor()}`}>
          {percentageChange.toFixed(1)}% {positiveChange ? 'increase' : 'decrease'}
        </p>
      )}
    </div>
  );
};
