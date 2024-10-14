"use client";
import React, { useContext, useState } from "react";
import Link from "next/link";
import LoginModel from "./model/login-model";
import RegisterModel from "./model/register-model";
import CartModel from "./model/cart-model";
import AddressModel from "./model/address-model";
import { useAuth } from "src/context/auth-context";
import Logo from "./logo";
import AddressDisplay from "./address";
import Footer from "./footer";

const Layout = ({ children }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginModel, setLoginModelOpen] = useState(false);
  const [registerModel, setRegisterModelOpen] = useState(false);
  const [cartModel, setCartModelOpen] = useState(false);
  const [addressModel, setAddressModelOpen] = useState(false);
  const { user, logout, address } = useAuth();
  const isLoggedIn = user;

  return (
      <div className="flex flex-col min-h-screen">
        <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
          <div className="flex items-center">
            <Logo/>
            <AddressDisplay onClick={()=>setAddressModelOpen(true)} address={address}/>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="focus:outline-none"
            >
              <img src="/icons/light-menu.svg" alt="Menu" />
            </button>
          </div>
          <div
            className={`flex items-center  ${
              menuOpen
                ? "max-md:absolute max-md:right-4 max-md:top-16 max-md:bg-gray-500 max-md:flex-col max-md:p-2 max-md:rounded-lg max-md:border max-md:space-y-2 max-md:border-gray-600"
                : "hidden  space-x-4"
            } md:flex`}
          >
            <span onClick={() => setMenuOpen(false)}>
              <img src="/icons/light-search.svg" alt="Search" />
            </span>
            <Link href="/offers" onClick={() => setMenuOpen(false)}>
              <img src="/icons/light-offer.svg" alt="Offers" />
            </Link>
            <span>
              <img
                src="/icons/light-cart.svg"
                alt="Cart"
                onClick={() => {
                  setCartModelOpen(true), setMenuOpen(false);
                }}
              />
            </span>
            <div className="relative">
              {isLoggedIn ? (
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="focus:outline-none"
                >
                  <img src="/icons/light-profile.svg" alt="Profile" />
                </button>
              ) : (
                <button
                  onClick={() => {
                    setLoginModelOpen(true), setMenuOpen(false);
                  }}
                  className="text-teal-300 font-semibold"
                >
                  Login
                </button>
              )}
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg">
                  <Link
                    href="/profile"
                    className="block px-4 py-2"
                    onClick={() => setMenuOpen(false)}
                  >
                    Profile
                  </Link>
                  <Link
                    href="/track-order"
                    className="block px-4 py-2"
                    onClick={() => setMenuOpen(false)}
                  >
                    Track Order
                  </Link>
                  <span onClick={()=> {logout(), setDropdownOpen(false)}} className="block px-4 py-2">
                    Logout
                  </span>
                </div>
              )}
            </div>
          </div>
        </nav>

        {loginModel && (
          <LoginModel
            setLoginModelOpen={setLoginModelOpen}
            setRegisterModelOpen={setRegisterModelOpen}
            title="Login"
            buttonLabel="Login"
          />
        )}

        {registerModel && (
          <RegisterModel
            setLoginModelOpen={setLoginModelOpen}
            setRegisterModelOpen={setRegisterModelOpen}
            title="Register"
            buttonLabel="Register"
          />
        )}

        {cartModel && (
          <CartModel setCartModelOpen={setCartModelOpen} title={"Cart"} />
        )}

        {addressModel && (
          <AddressModel
            setAddressModelOpen={setAddressModelOpen}
            title={"Add Address"}
            buttonLabel={"Add Address"}
          />
        )}

        <main className="flex-grow">{children}</main>

        <Footer/>
      </div>
  );
};

export default Layout;
