"use client"
import React, { createContext, useContext, useEffect, useState } from 'react';

// Create an Auth Context
const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [address, setAddress] = useState(null)

    useEffect(() => {
        // Get user data from localStorage on initial render
        if (typeof window !== 'undefined') {
            const storedUserData = localStorage.getItem('userData');
            const storedUserAddress = localStorage.getItem('addressData');
            if (storedUserData) {
                setUser(JSON.parse(storedUserData));
                setAddress(JSON.parse(storedUserAddress));
                console.log(address);
            }
        }
    }, []);

    const login = (userData) => {
        setUser(userData);
        // Save user data to localStorage
        localStorage.setItem('userData', JSON.stringify(userData));
    };

    const logout = () => {
        setUser(null);
        setAddress(null)
        // Remove user data from localStorage
        localStorage.removeItem('userData');
        localStorage.removeItem('addressData');
    };

    const setAddressData = (addressData) => {
        setAddress(addressData);
        // Save user data to localStorage
        localStorage.setItem('addressData', JSON.stringify(addressData));
    };

    return (
        <AuthContext.Provider value={{ user, address, login, logout, setAddressData }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook to use the Auth Context
export const useAuth = () => {
    return useContext(AuthContext);
};
