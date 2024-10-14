import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import CloseModelButton from "../button/model-close-btn";
import { useAuth } from "src/context/auth-context";

const AddressModel = ({ setLoginModelOpen, setRegisterModelOpen, setAddressModelOpen, title, buttonLabel }) => {
    const { setAddressData } = useAuth(); 
    
    const handleOutsideClick = (e, close) => {
        if (e.target?.id === "backdrop" || close) {
            setAddressModelOpen(false);
        }
    };

  const handleLoginClick = () => {
    setAddressModelOpen(false);
  };

  const formik = useFormik({
    initialValues: {
      streetAddress: '',
      city: '',
      state: '',
      country: '',
      postalCode: '',
      latitude: '',
      longitude: '',
    },
    validationSchema: Yup.object({
      streetAddress: Yup.string().required('Street address is required'),
      city: Yup.string().required('City is required'),
      state: Yup.string().required('State is required'),
      country: Yup.string().required('Country is required'),
      postalCode: Yup.string().required('Postal code is required'),
      latitude: Yup.number().required('Latitude is required').nullable(),
      longitude: Yup.number().required('Longitude is required').nullable(),
    }),
    onSubmit: async (values) => {
      try {
        setAddressData(values)

        // const response = await axios.post('/api/register', values);
        // console.log('Registration successful:', response.data);
        setAddressModelOpen(false);
      } catch (error) {
        console.error('Registration error:', error);
      }
    },
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        formik.setFieldValue('latitude', position.coords.latitude);
        formik.setFieldValue('longitude', position.coords.longitude);
      }, (error) => {
        console.error('Error getting location:', error);
      });
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  return (
    <>
      <div
        id="backdrop"
        className="fixed inset-0 bg-black opacity-50 z-30"
        onClick={handleOutsideClick}
      />
      <div
        id="drawer-right-example"
        className="fixed top-0 left-0 z-40 h-screen p-6 overflow-y-auto transition-transform duration-1000 ease-in-out bg-white w-96 dark:bg-gray-800"
        tabIndex="-1"
        aria-labelledby="drawer-right-label"
      >
        <h5
          id="drawer-right-label"
          className="inline-flex items-center mb-4 text-2xl font-semibold text-gray-500 dark:text-gray-400"
        >
          {title}
        </h5>

        <CloseModelButton onClick={() => setAddressModelOpen(false)} />

        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="streetAddress" className="block text-sm font-medium text-gray-700">Street Address</label>
            <input
              id="streetAddress"
              name="streetAddress"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.streetAddress}
              className="mt-1 block w-full border border-gray-300 text-gray-700 rounded-md shadow-sm focus:ring-teal-300 focus:border-teal-300 p-2"
            />
            {formik.touched.streetAddress && formik.errors.streetAddress ? (
              <div className="text-red-600 text-sm">{formik.errors.streetAddress}</div>
            ) : null}
          </div>
          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
            <input
              id="city"
              name="city"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.city}
              className="mt-1 block w-full border border-gray-300 text-gray-700 rounded-md shadow-sm focus:ring-teal-300 focus:border-teal-300 p-2"
            />
            {formik.touched.city && formik.errors.city ? (
              <div className="text-red-600 text-sm">{formik.errors.city}</div>
            ) : null}
          </div>
          <div>
            <label htmlFor="state" className="block text-sm font-medium text-gray-700">State</label>
            <input
              id="state"
              name="state"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.state}
              className="mt-1 block w-full border border-gray-300 text-gray-700 rounded-md shadow-sm focus:ring-teal-300 focus:border-teal-300 p-2"
            />
            {formik.touched.state && formik.errors.state ? (
              <div className="text-red-600 text-sm">{formik.errors.state}</div>
            ) : null}
          </div>
          <div>
            <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
            <input
              id="country"
              name="country"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.country}
              className="mt-1 block w-full border border-gray-300 text-gray-700 rounded-md shadow-sm focus:ring-teal-300 focus:border-teal-300 p-2"
            />
            {formik.touched.country && formik.errors.country ? (
              <div className="text-red-600 text-sm">{formik.errors.country}</div>
            ) : null}
          </div>
          <div>
            <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">Postal Code</label>
            <input
              id="postalCode"
              name="postalCode"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.postalCode}
              className="mt-1 block w-full border border-gray-300 text-gray-700 rounded-md shadow-sm focus:ring-teal-300 focus:border-teal-300 p-2"
            />
            {formik.touched.postalCode && formik.errors.postalCode ? (
              <div className="text-red-600 text-sm">{formik.errors.postalCode}</div>
            ) : null}
          </div>
          <div>
            <label htmlFor="latitude" className="block text-sm font-medium text-gray-700">Latitude</label>
            <input
              id="latitude"
              name="latitude"
              type="number"
              onChange={formik.handleChange}
              value={formik.values.latitude}
              className="mt-1 block w-full border border-gray-300 text-gray-700 rounded-md shadow-sm focus:ring-teal-300 focus:border-teal-300 p-2"
            />
            {formik.touched.latitude && formik.errors.latitude ? (
              <div className="text-red-600 text-sm">{formik.errors.latitude}</div>
            ) : null}
          </div>
          <div>
            <label htmlFor="longitude" className="block text-sm font-medium text-gray-700">Longitude</label>
            <input
              id="longitude"
              name="longitude"
              type="number"
              onChange={formik.handleChange}
              value={formik.values.longitude}
              className="mt-1 block w-full border border-gray-300 text-gray-700 rounded-md shadow-sm focus:ring-teal-300 focus:border-teal-300 p-2"
            />
            {formik.touched.longitude && formik.errors.longitude ? (
              <div className="text-red-600 text-sm">{formik.errors.longitude}</div>
            ) : null}
          </div>
          <button type="submit" className="w-full bg-teal-300 text-white font-semibold py-2 rounded-md hover:bg-teal-600 transition duration-200">
            {buttonLabel}
          </button>
        </form>
      </div>
    </>
  );
};

export default AddressModel;
