
import React from 'react';

export function CimageCard({ 
  children, 
  className = "", 
  glass = false, 
  hover = false,
  dark = false
}) {
  return (
    <div 
      className={`
        rounded-xl overflow-hidden ${className}
        ${glass ? (dark ? 'glass-card-dark' : 'glass-card') : 'bg-white dark:bg-gray-800 shadow-md border border-gray-100 dark:border-gray-700'}
        ${hover ? 'card-hover' : ''}
      `}
    >
      {children}
    </div>
  );
}

export function CimageCardHeader({ children, className = "" }) {
  return <div className={`p-6 ${className}`}>{children}</div>;
}

export function CimageCardContent({ children, className = "" }) {
  return <div className={`px-6 py-4 ${className}`}>{children}</div>;
}

export function CimageCardFooter({ children, className = "" }) {
  return <div className={`p-6 pt-0 ${className}`}>{children}</div>;
}

export function CimageCardTitle({ children, className = "" }) {
  return <h3 className={`text-xl font-display font-semibold mb-2 ${className}`}>{children}</h3>;
}

export function CimageCardDescription({ children, className = "" }) {
  return <p className={`text-gray-600 dark:text-gray-300 ${className}`}>{children}</p>;
}