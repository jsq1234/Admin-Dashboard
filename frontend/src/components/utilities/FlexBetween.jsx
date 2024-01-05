import React from 'react';

export default function FlexBetween({ children, className }) {
  return (
    <div className={`flex justify-between items-center ${className}`}>
        {children}
    </div>
  )
}
