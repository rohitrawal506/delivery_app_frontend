"use client";
import React, { useState } from "react";
import AddToCartButton from "src/components/button/add-to-cart-button";
import Layout from "src/components/layout";
import { useCart } from "src/context/cart-context"; // Import the Cart Context
const Restaurant = ({
  restaurantName,
  description,
  rating,
  location,
  image, 
}) => {
  const menuItems = {
    Menu: [
      { id: 1, name: "Pizza", rating: 4.5, price: "$10" },
      { id: 2, name: "Pasta", rating: 4.7, price: "$12" },
      { id: 3, name: "Salad", rating: 4.3, price: "$8" },
    ],
    Drinks: [
      { id: 4, name: "Coke", rating: 4.0, price: "$2" },
      { id: 5, name: "Lemonade", rating: 4.5, price: "$3" },
    ],
    Desserts: [
      { id: 6, name: "Ice Cream", rating: 4.8, price: "$5" },
      { id: 7, name: "Cake", rating: 4.6, price: "$6" },
    ],
  };

  const { cartItems, addToCart, decrementQuantity } = useCart(); // Access cart items and addToCart function
  const quantities = cartItems.reduce((acc, item) => {
    acc[item.id] = item.quantity; // Create a quantities object from cart items
    return acc;
  }, {});

  const [activeTab, setActiveTab] = useState("Menu"); // Initialize activeTab state

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleIncrementQuantity = (item) => {
    addToCart(item); // Use addToCart to update the cart
  };

  const handleDecrementQuantity = (id) => {
    decrementQuantity(id); // Use removeFromCart to decrease the quantity
  };

  return (
    <Layout>
      <div className="flex flex-col min-h-screen p-4 md:mx-40">
        <h5
          id="drawer-right-label"
          className="inline-flex items-center mb-4 text-2xl font-semibold text-gray-50 dark:text-gray-50"
        >
          Domino's
        </h5>
        <div className="flex md:w-1/2 border rounded-lg overflow-hidden shadow-lg mb-4">
          <img
            src="/assets/menu1.jpg"
            alt={restaurantName}
            className="w-32 h-auto object-cover"
          />
          <div className="p-4 w-2/3">
            <h2 className="font-bold text-xl">Domino's</h2>
            <p className="text-gray-50">Explore our menu: Pizzas, Pastas, Italian, Desserts, Beverages</p>
            <p className="text-yellow-500">Rating: 4.2 ★</p>
            <p className="text-gray-50">Location: Pakwan</p>
          </div>
        </div>

        <div className="flex space-x-4 mb-4">
          {Object.keys(menuItems).map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`px-4 py-2 rounded-md ${
                activeTab === tab
                  ? "bg-teal-300 text-black"
                  : "bg-gray-200 text-black"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {menuItems[activeTab].map((item) => (
            <div
              key={item.id}
              className="border rounded-lg overflow-hidden shadow-lg p-4"
            >
              <h3 className="font-bold text-lg">{item.name}</h3>
              <p className="text-yellow-500">Rating: {item.rating} ★</p>
              <p className="text-gray-500">{item.price}</p>
              {quantities[item.id] > 0 ? (
                <div className="flex items-center">
                  <button
                    onClick={() => handleDecrementQuantity(item)}
                    className="bg-gray-300 text-black font-bold py-1 px-2 rounded-l"
                  >
                    -
                  </button>
                  <span className="mx-2 text-gray-50">
                    {quantities[item.id]}
                  </span>
                  <button
                    onClick={() => handleIncrementQuantity(item)}
                    className="bg-teal-400 text-black font-bold py-1 px-2 rounded-r"
                  >
                    +
                  </button>
                </div>
              ) : (
                <AddToCartButton
                  label="Add to cart"
                  incrementQuantity={() => handleIncrementQuantity(item)}
                /> // Pass incrementQuantity with item ID here
              )}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Restaurant;
