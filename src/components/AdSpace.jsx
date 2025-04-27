import React from 'react';

const AdSpace = ({ position }) => {
  const getAdClass = () => {
    switch (position) {
      case 'header':
        return 'w-full h-[90px] mb-4';
      case 'sidebar':
        return 'w-[300px] h-[600px]';
      case 'between-content':
        return 'w-full h-[250px] my-4';
      case 'footer':
        return 'w-full h-[90px] mt-4';
      default:
        return '';
    }
  };

  return (
    <div 
      className={`
        bg-gray-100 dark:bg-gray-800 
        rounded-lg 
        flex items-center justify-center
        ${getAdClass()}
      `}
    >
      <div className="text-sm text-gray-400 dark:text-gray-500">
        Advertisement Space
      </div>
    </div>
  );
};

export default AdSpace;