
import React from 'react';

export function SectionTitle({ 
  title, 
  subtitle, 
  centered = false,
  light = false 
}) {
  return (
    <div className={`space-y-2 mb-10 ${centered ? 'text-center' : ''}`}>
      <h2 className={`heading-lg ${light ? 'text-white' : ''}`}>{title}</h2>
      {subtitle && (
        <p className={`text-lg ${light ? 'text-gray-200' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      )}
      <div className={`h-1 w-20 bg-gradient-to-r from-[#0F62FE] to-cimage-accent rounded-full ${centered ? 'mx-auto' : ''}`} />
    </div>
  );
}