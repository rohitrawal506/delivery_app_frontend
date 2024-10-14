import Link from 'next/link';
import React from 'react';

const Logo = () => {
    return (
        <Link  href={"/home"}>
            <img
                src="/assets/food-max-logo-zip-file/png/logo-no-background.png"
                alt="Logo"
                className="h-11 mr-2"
            />
        </Link>
    );
};

export default Logo;
