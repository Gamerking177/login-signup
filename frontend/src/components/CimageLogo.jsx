import React from 'react';

const CimageLogo = ({ className = "", size = 'md' }) => {
  const sizeClasses = {
    'sm': 'h-8 w-auto',
    'md': 'h-12 w-auto',
    'lg': 'h-16 w-auto'
  };
  
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <img 
        src="https://www.cimage.in/content/themes/qeducato/inc/assets/images/logoc.png" 
        alt="CIMAGE Logo" 
        className={`object-contain ${sizeClasses[size]}`}
      />
    </div>
  );
};

export default CimageLogo;