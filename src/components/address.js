import React from 'react';

const AddressDisplay = ({ address, onClick }) => {
    return (
        <div className="text-white ml-4 flex items-center underline cursor-pointer" onClick={onClick}>
            <img src="/icons/light-location.svg" alt="Location" />
            {address?.streetAddress}, {address?.city}
        </div>
    );
};

export default AddressDisplay;
