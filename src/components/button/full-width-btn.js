import React from 'react';

const FullWidthButton = ({ label, onClick, className }) => {
  return (
    <button className="bg-transparent text-gray-800 border
    border-gray-800 rounded-md px-4 py-2 hover:bg-gray-800 hover:text-white transition ease-in-out duration-500" onClick={onClick}>
      {label}
    </button>
  );
};

export default FullWidthButton;
