"use client";
import React, { useState } from "react";
import Layout from "src/components/layout";

const TrackOrder = () => {
  const [orders] = useState([
    {
      id: 1,
      restaurant: "Dominos",
      status: "Pending",
      items: ["Pizza", "Coke"],
      time: "2024-04-01 12:30 PM",
      driverId: "D123",
      estimatedTime: "30 mins",
    },
    // {
    //   id: 2,
    //   restaurant: "Lazeez Desi Tadka",
    //   status: "In Transit",
    //   items: ["Butter Chicken", "Naan"],
    //   time: "2024-04-01 1:00 PM",
    //   driverId: "D124",
    //   estimatedTime: "15 mins",
    // },
    // {
    //   id: 3,
    //   restaurant: "Monginis Cake Shop",
    //   status: "Pending",
    //   items: ["Chocolate Cake"],
    //   time: "2024-04-01 1:30 PM",
    //   driverId: "D125",
    //   estimatedTime: "N/A",
    // },
  ]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [cartModelOpen, setCartModelOpen] = useState(null);

  const handleOrderClick = (order) => {
    setSelectedOrder(order);
  };

  const handleCloseModal = () => {
    setSelectedOrder(null);
  };

  return (
    <Layout>
      <section className="py-8 antialiased md:py-16 md:mx-40">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <h2 className="text-xl font-semibold text-gray-50 dark:text-white sm:text-2xl">
            Track Orders
          </h2>
          <div className="mt-6 sm:mt-8 lg:flex lg:gap-8">
            <div className="w-full divide-y divide-gray-200 overflow-hidden lg:max-w-xl xl:max-w-2xl">
              {orders.map((order) => (
                <div
                  key={order.id}
                  className="space-y-4 p-6 cursor-pointer rounded-lg border border-gray-200 dark:divide-gray-700 dark:border-gray-700"
                  onClick={() => handleOrderClick(order)}
                >
                  <div className="flex items-center gap-6">
                    <a href="#" className="h-14 w-14 shrink-0">
                      <img
                        className="h-full w-full dark:hidden"
                        src="/favicon_io/android-chrome-192x192.png"
                        alt="imac image"
                      />
                      {/* <img
                        className="hidden h-full w-full dark:block"
                        src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg"
                        alt="imac image"
                      /> */}
                    </a>
                    <a
                      href="#"
                      className="min-w-0 flex-1 font-medium text-gray-50 hover:underline dark:text-white"
                    >
                      Order from: {order.restaurant}
                    </a>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-sm font-normal text-gray-50 dark:text-gray-400">
                      <span className="font-medium text-gray-50 dark:text-white">
                        Status:
                      </span>{" "}
                      {order.status}
                    </p>
                    <p className="text-sm font-normal text-gray-50 dark:text-gray-400">
                      <span className="font-medium text-gray-50 dark:text-white">
                        Order Time:
                      </span>{" "}
                      {order.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 grow sm:mt-8 lg:mt-0">
              <div className="space-y-6 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Order Details
                </h3>

                <ol className="relative ms-3 border-s border-gray-200 dark:border-gray-700">
                  <li className="mb-10 ms-6">
                    <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-green-300 ring-1 ring-green-300">
                      ✓
                    </span>
                    <h4 className="mb-0.5 text-base font-semibold text-gray-900 dark:text-white">
                      Order placed
                    </h4>
                    <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                      Receipt #647563
                    </p>
                  </li>

                  <li className="mb-10 ms-6">
                    <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-orange-300 ring-1 ring-orange-300">
                      !
                    </span>
                    <h4 className="mb-0.5 text-base font-semibold text-gray-900 dark:text-white">
                      Order backed
                    </h4>
                    <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                      Products in the courier's warehouse
                    </p>
                  </li>

                  <li className="mb-10 ms-6 text-primary-700 dark:text-primary-500">
                    <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-orange-300 ring-1 ring-orange-300">
                      !
                    </span>
                    <h4 className="mb-0.5 font-semibold text-gray-900 dark:text-white">
                      Out for delivery
                    </h4>
                    <p className="text-sm text-gray-900 dark:text-white">
                      Products being delivered
                    </p>
                  </li>

                  <li className="mb-10 ms-6 text-primary-700 dark:text-primary-500">
                    <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-orange-300 ring-1 ring-orange-300">
                      !
                    </span>
                    <h4 className="mb-0.5 text-base font-semibold text-gray-900 dark:text-white">
                      Delivered
                    </h4>
                    <p className="text-sm text-gray-900 dark:text-white">
                      Products delivered to the courier - DHL Express
                    </p>
                  </li>
                </ol>

                <div className="gap-4 sm:flex sm:items-center">
                  <button
                    type="button"
                    className="w-full rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                  >
                    Cancel the order
                  </button>

                  <button
                    type="button"
                    onClick={() => setCartModelOpen(true)} // Function to open the modal
                    className="w-full rounded-lg border border-gray-200 bg-teal-300 px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-teal-400 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                  >
                    Order details
                  </button>

                  {cartModelOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 text-gray-800">
                      <div className="bg-white rounded-lg p-6 shadow-lg">
                        <h2 className="text-lg font-semibold">Order Details</h2>
                        <div className="mt-4">
                          <p>
                            <strong>Item:</strong> Product Name
                          </p>
                          <p>
                            <strong>Quantity:</strong> 2
                          </p>
                          <p>
                            <strong>Price:</strong> $50.00
                          </p>
                          <p>
                            <strong>Time of Order Placed:</strong> 2023-10-01
                            10:00 AM
                          </p>
                          <p>
                            <strong>Restaurent Name:</strong> John Doe
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={()=>setCartModelOpen(false)}
                          className="w-full mt-5 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TrackOrder;
