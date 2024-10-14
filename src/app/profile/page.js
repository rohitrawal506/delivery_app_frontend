"use client";
import React, { useState, useEffect } from "react";
import Layout from "src/components/layout";

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState({
    fullName: false,
    email: false,
    address: false,
    phone: false,
  });

  const [profile, setProfile] = useState({
    image: "/assets/profile.png", // Replace with actual image path
    fullName: "John Doe",
    email: "john.doe@example.com",
    address: "123 Main St, Anytown, USA",
    phone: "(123) 456-7890",
  });

  const handleDoubleClick = (field) => {
    setIsEditing((prev) => ({ ...prev, [field]: true }));
  };

  const handleChange = (e, field) => {
    setProfile((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleBlur = (field) => {
    setIsEditing((prev) => ({ ...prev, [field]: false }));
  };

  const handleClickOutside = (event) => {
    if (event.target.closest(".editable-field") === null) {
      setIsEditing({
        fullName: false,
        email: false,
        address: false,
        phone: false,
      });
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <Layout>
      <div className="flex flex-row items-center justify-evenly p-16 bg-teal-300 shadow-md rounded-lg w-1/2 mx-auto my-10">
        <img
          src={profile.image}
          alt="Profile"
          className="w-40 h-40 rounded-full mr-4 bg-white"
        />
        <div className="flex flex-col">
          <div className="mb-4">
            <label className="block text-gray-700">Full Name:</label>
            <span
              onDoubleClick={() => handleDoubleClick("fullName")}
              className="cursor-pointer border-b border-gray-300 text-gray-700"
            >
              {isEditing.fullName ? (
                <input
                  type="text"
                  value={profile.fullName}
                  onChange={(e) => handleChange(e, "fullName")}
                  onBlur={() => handleBlur("fullName")}
                  className="border rounded p-1 w-full editable-field"
                />
              ) : (
                profile.fullName
              )}
            </span>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email:</label>
            <span
              onDoubleClick={() => handleDoubleClick("email")}
              className="cursor-pointer border-b border-gray-300 text-gray-700"
            >
              {isEditing.email ? (
                <input
                  type="email"
                  value={profile.email}
                  onChange={(e) => handleChange(e, "email")}
                  onBlur={() => handleBlur("email")}
                  className="border rounded p-1 w-full editable-field"
                />
              ) : (
                profile.email
              )}
            </span>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Address:</label>
            <span
              onDoubleClick={() => handleDoubleClick("address")}
              className="cursor-pointer border-b border-gray-300 text-gray-700"
            >
              {isEditing.address ? (
                <input
                  type="text"
                  value={profile.address}
                  onChange={(e) => handleChange(e, "address")}
                  onBlur={() => handleBlur("address")}
                  className="border rounded p-1 w-full editable-field"
                />
              ) : (
                profile.address
              )}
            </span>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Phone:</label>
            <span
              onDoubleClick={() => handleDoubleClick("phone")}
              className="cursor-pointer border-b border-gray-300 text-gray-700"
            >
              {isEditing.phone ? (
                <input
                  type="text"
                  value={profile.phone}
                  onChange={(e) => handleChange(e, "phone")}
                  onBlur={() => handleBlur("phone")}
                  className="border rounded p-1 w-full editable-field"
                />
              ) : (
                profile.phone
              )}
            </span>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProfilePage;
