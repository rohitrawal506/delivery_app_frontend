"use client";
import React, { useState } from "react";
import Link from "next/link";
import Layout from "src/components/layout";

const Home = () => {
  const menuItems = [
    {
      name: "Dominos",
      rating: 4.5,
      description: "Pizzas, Pastas, Italian, Desserts, Beverages",
      image: "/assets/menu1.jpg",
    },
    {
      name: "Lazeez Desi Tadka",
      rating: 4.7,
      description: "Indian, Chinese, Mughlai Ghatkopar Vikhroli",
      image: "/assets/menu2.jpg",
    },
    {
      name: "Monginis Cake Shop",
      rating: 4.3,
      description: " Bakery, Desserts, Snacks",
      image: "/assets/menu3.jpg",
    },
    {
      name: "Eat Pubjab",
      rating: 4.8,
      description: "Paneer, lassi, butter milk",
      image: "/assets/menu4.jpg",
    },
    {
      name: "Dakshini",
      rating: 4.2,
      description: "South indian, Dhosa, idli",
      image: "/assets/menu5.jpg",
    },
  ];

  return (
      <Layout>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4 flex-grow md:mx-40">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={`/restaurent/${item.name}`}
              className="border rounded-lg overflow-hidden shadow-lg h-64 cursor-pointer"
            >
              {" "}
              {/* Set a fixed height for all cards */}
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-32 object-cover"
              />
              <div className="p-4">
                <h2 className="font-bold text-lg">{item.name}</h2>
                <p className="text-yellow-500">Rating: {item.rating} ★</p>
                <p className="text-gray-50">{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </Layout>
  );
};

export default Home;
