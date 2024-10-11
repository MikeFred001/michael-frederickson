import React from 'react';

export default function Divider({ reversed = false }: { reversed: boolean; }) {
  return (
    <div className={`relative w-full h-[100px] ${reversed ? 'bg-gray-200' : 'bg-gray-100'}`}>
      <div
        className={`
          absolute top-0 left-0 w-full h-full border-t-[100px] border-t-transparent border-r-[100vw]
          ${reversed ? 'border-r-gray-100' : 'border-r-gray-200'}
        `}
      />
    </div>
  );
}
