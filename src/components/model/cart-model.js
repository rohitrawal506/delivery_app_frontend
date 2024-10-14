import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Swal from "sweetalert2";
import { useCart } from "src/context/cart-context"; // Import the Cart Context
import CloseModelButton from "../button/model-close-btn";



const CartModel = ({ title, setCartModelOpen }) => {
  const { cartItems, addToCart, decrementQuantity } = useCart(); // Access cart items and addToCart function

  const handleIncrementQuantity = (item) => {
    addToCart(item); // Use addToCart to update the cart
  };

  const handleDecrementQuantity = (item) => {
    decrementQuantity(item); // Use removeFromCart to decrease the quantity
  };

  const handleOutsideClick = (e, close) => {
    if (e.target?.id === "backdrop" || close) {
      setCartModelOpen(false);
    }
  };

  const handleConfirmBtn = () => {
    Swal.fire({
      icon: "success",
      title: "Order Placed Successfully",
      showConfirmButton: false,
      timer: 1500,
    //   footer: '<a href="/track-order">Track your order here.</a>'
    });
    setCartModelOpen(false)
  };

  return (
    <>
      <div
        id="backdrop"
        className="fixed inset-0 bg-black opacity-50 z-30"
        onClick={handleOutsideClick}
      />
      <div
        id="drawer-right-example"
        className="fixed top-0 right-3/4 md:right-1/3 z-40 h-screen p-6 overflow-y-auto transition-transform duration-1000 ease-in-out translate-x-full bg-white w-3/4 md:w-1/3 dark:bg-gray-800"
        tabIndex="-1"
        aria-labelledby="drawer-right-label"
      >
        <h5
          id="drawer-right-label"
          className="inline-flex items-center mb-4 text-2xl font-semibold text-gray-800 dark:text-gray-400"
        >
          {title}
        </h5>
        <CloseModelButton onClick={() => setCartModelOpen(false)} />
        {cartItems?.length === 0 ? (
          <div className="text-gray-800 text-lg font-semibold mt-4">
            No Item Available
          </div>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between mt-4">
              <img
                src="/assets/burger1.jpg"
                alt="Item Name"
                className="w-24 h-24 object-cover rounded-md"
              />
              <div className="flex-grow ml-4">
                <h2 className="text-gray-800 text-lg font-semibold">
                  {item.name}
                </h2>
                <p className="text-gray-800">Item description goes here.</p>
                <p className="text-gray-800">$25</p>
              </div>
              <div className="flex items-center">
                <button
                  onClick={() => handleDecrementQuantity(item)}
                  className="bg-gray-300 text-black font-bold py-1 px-2 rounded-l"
                >
                  -
                </button>
                <span className="mx-2 text-gray-900">{item.quantity}</span>
                <button
                  onClick={() => handleIncrementQuantity(item)}
                  className="bg-teal-400 text-black font-bold py-1 px-2 rounded-r"
                >
                  +
                </button>
              </div>
            </div>
          ))
        )}
        <div className="mt-6">
          <div className="flex justify-between text-lg font-semibold text-gray-800 underline">
            <span>Total Amount:</span>
            <span>
              $
              {cartItems
                .reduce((total, item) => total + 25 * item.quantity, 0)
                .toFixed(2)}
            </span>
          </div>
          <button
            onClick={handleConfirmBtn}
            disabled={cartItems.length === 0}
            className="w-full mt-5 bg-teal-500 text-white font-semibold py-2 rounded-md hover:bg-teal-600 transition duration-200"
          >
            Confirm Order
          </button>
        </div>
      </div>
    </>
  );
};

export default CartModel;
