import React from 'react';

export default function Logo() {
  return (
    <div className="h-16 flex items-center">
      <svg width="300" height="80" viewBox="0 0 300 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Geometric construction lines */}
        <g transform="translate(10,15) scale(0.9)">
          {/* Main diagonal lines */}
          <path d="M0 0L50 50" stroke="#4A4A4A" strokeWidth="2"/>
          <path d="M50 0L0 50" stroke="#4A4A4A" strokeWidth="2"/>
          
          {/* Construction details */}
          <path d="M10 0L10 10" stroke="#4A4A4A" strokeWidth="1.5"/>
          <path d="M40 0L40 10" stroke="#4A4A4A" strokeWidth="1.5"/>
          <path d="M0 40L10 40" stroke="#4A4A4A" strokeWidth="1.5"/>
          <path d="M40 40L50 40" stroke="#4A4A4A" strokeWidth="1.5"/>
          
          {/* Additional grid lines */}
          <path d="M15 45L35 45" stroke="#4A4A4A" strokeWidth="1"/>
          <path d="M25 35L25 48" stroke="#4A4A4A" strokeWidth="1"/>
        </g>

        {/* Text part */}
        <g transform="translate(80,45)">
          <text fontFamily="Arial" fontWeight="600" fill="#4A4A4A" fontSize="32">
            <tspan x="0" y="0">E</tspan>
            <tspan x="25" y="0">X</tspan>
            <tspan x="50" y="0">ACT</tspan>
          </text>
          <text fontFamily="Arial" fontWeight="600" fill="#4A4A4A" fontSize="32" y="25">
            <tspan x="0">MONTAGE</tspan>
          </text>
        </g>

        {/* Green X highlight */}
        <path d="M105 45L125 45" stroke="#95C11F" strokeWidth="4" strokeLinecap="round"/>
      </svg>
    </div>
  );
}