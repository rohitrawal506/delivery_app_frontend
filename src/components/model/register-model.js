import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import CloseModelButton from "../button/model-close-btn";

const RegisterModel = ({ setLoginModelOpen, setRegisterModelOpen, title, buttonLabel }) => {
  const handleOutsideClick = (e, close) => {
    if (e.target?.id === "backdrop" || close) {
      setRegisterModelOpen(false);
    }
  };

  const handleLoginClick = () => {
    // Save current form values to localStorage
    setLoginModelOpen(true);
    setRegisterModelOpen(false);
  };

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      phoneNumber: '',
      role: 'user', // Default role
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('First name is required'),
      lastName: Yup.string().required('Last name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
      phoneNumber: Yup.string().required('Phone number is required'),
      role: Yup.string().required('Role is required'),
    }),
    onSubmit: async (values) => {
      try {
        // Save data to localStorage
        localStorage.setItem('userData', JSON.stringify(values));
        
        // const response = await axios.post('/api/register', values);
        // console.log('Registration successful:', response.data);
        setRegisterModelOpen(false);
      } catch (error) {
        console.error('Registration error:', error);
      }
    },
  });

  return (
    <>
      <div
        id="backdrop"
        className="fixed inset-0 bg-black opacity-50 z-30"
        onClick={handleOutsideClick}
      />
      <div
        id="drawer-right-example"
        className="fixed top-0 right-96 z-40 h-screen p-6 overflow-y-auto transition-transform duration-300 ease-in-out translate-x-full bg-white w-96 dark:bg-gray-800"
        tabIndex="-1"
        aria-labelledby="drawer-right-label"
      >
        <h5
          id="drawer-right-label"
          className="inline-flex items-center mb-4 text-2xl font-semibold text-gray-500 dark:text-gray-400"
        >
          {title}
        </h5>

        <CloseModelButton onClick={() => setRegisterModelOpen(false)} />

        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.firstName}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm text-gray-700 focus:ring-teal-300 focus:border-teal-300 p-2"
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <div className="text-red-600 text-sm">{formik.errors.firstName}</div>
            ) : null}
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.lastName}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm text-gray-700 focus:ring-teal-300 focus:border-teal-300 p-2"
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <div className="text-red-600 text-sm">{formik.errors.lastName}</div>
            ) : null}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm text-gray-700 focus:ring-teal-300 focus:border-teal-300 p-2"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-600 text-sm">{formik.errors.email}</div>
            ) : null}
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm text-gray-700 focus:ring-teal-300 focus:border-teal-300 p-2"
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-red-600 text-sm">{formik.errors.password}</div>
            ) : null}
          </div>
          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              id="phoneNumber"
              name="phoneNumber"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.phoneNumber}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm text-gray-700 focus:ring-teal-300 focus:border-teal-300 p-2"
            />
            {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
              <div className="text-red-600 text-sm">{formik.errors.phoneNumber}</div>
            ) : null}
          </div>
          <div>
            <label htmlFor="role" className="block text-sm font-medium text-gray-700">Role</label>
            <select
              id="role"
              name="role"
              onChange={formik.handleChange}
              value={formik.values.role}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm text-gray-700 focus:ring-teal-300 focus:border-teal-300 p-2"
            >
              <option value="user">User</option>
              <option value="driver">Driver</option>
            </select>
            {formik.touched.role && formik.errors.role ? (
              <div className="text-red-600 text-sm">{formik.errors.role}</div>
            ) : null}
          </div>
          <button type="submit" className="w-full bg-teal-300 text-white font-semibold py-2 rounded-md hover:bg-teal-600 transition duration-200">
            {buttonLabel}
          </button>
        </form>
          <p className="mt-4 text-center text-teal-300">
            Already have an account?{" "}
            <button onClick={handleLoginClick} className="text-blue-500 hover:underline">
              Login
            </button>
          </p>
      </div>
    </>
  );
};

export default RegisterModel;
