"use client"

import React, { createContext, useContext, useState } from 'react';

// Create a Cart Context
const CartContext = createContext();

// Create a provider component
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((i) => i.id === item.id);
            if (existingItem) {
                return prevItems.map((i) =>
                    i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
                );
            }
            return [...prevItems, { ...item, quantity: 1 }];
        });
    };

    const removeFromCart = (id) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    const decrementQuantity = (item) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((i) => i.id === item.id);
            if (existingItem) {
                if (existingItem.quantity > 1) {
                    return prevItems.map((i) =>
                        i.id === item.id ? { ...i, quantity: i.quantity - 1 } : i
                    );
                } else {
                    return prevItems.filter((i) => i.id !== item.id);
                }
            }
            return prevItems;
        });
    };

    const clearCart = () => {
        setCartItems([]);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, decrementQuantity, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

// Custom hook to use the Cart Context
export const useCart = () => {
    return useContext(CartContext);
};
