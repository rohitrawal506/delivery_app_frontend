import React from 'react';
// import PropTypes from 'prop-types';

const AddToCartButton = ({ onClick, label, incrementQuantity }) => {
    return (
        <button 
            className="bg-transparent text-teal-300 border
            border-teal-300 rounded-md px-4 py-2 hover:bg-teal-300 hover:text-white transition ease-in-out duration-500" 
            onClick={() => { 
                incrementQuantity();
            }}
        >
            {label}
        </button>
    );
};

// AddToCartButton.propTypes = {
//     onClick: PropTypes.func.isRequired,
//     label: PropTypes.string.isRequired,
// };

export default AddToCartButton;
