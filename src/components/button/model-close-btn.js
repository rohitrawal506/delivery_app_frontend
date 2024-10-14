import React from 'react';

const CloseModelButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
    //   className="absolute top-5 right-4 hover:text-gray-700 bg-gray-200 text-black font-bold py-1 px-2 rounded"
    className="rounded-lg absolute top-5 right-7 border border-gray-200 bg-white  py-1 px-2 text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
      aria-label="Close"
    >
      &times;
    </button>
  );
};

export default CloseModelButton;
