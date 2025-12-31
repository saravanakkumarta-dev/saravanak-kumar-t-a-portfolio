import React from 'react';

const SkipLink = () => {
  return (
    <a 
      href="#hero"
      className="absolute top-4 left-4 z-[100] -translate-y-[150%] focus:translate-y-0 bg-blue-600 text-white px-4 py-2 rounded-md font-medium transition-transform duration-200"
    >
      Skip to main content
    </a>
  );
};

export default SkipLink;