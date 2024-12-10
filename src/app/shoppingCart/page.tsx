import FilterSection from "@/components/FilterSection/FilterSection";
import Image from "next/image";
import React from "react";

const shoppingCart = [
  {
    name: "Ut diam consequat",
    color: "Brown",
    size: "XL",
    img: "/shoppingCart/img-1.png",
  },
  {
    name: "Vel faucibus posuere",
    color: "Brown",
    size: "XL",
    img: "/shoppingCart/img-2.png",
  },
  {
    name: "Ac vitae vestibulum",
    color: "Brown",
    size: "XL",
    img: "/shoppingCart/img-3.png",
  },
  {
    name: "Elit massa diam",
    color: "Brown",
    size: "XL",
    img: "/shoppingCart/img-4.png",
  },
  {
    name: "Proin pharetra elementum",
    color: "Brown",
    size: "XL",
    img: "/shoppingCart/img-5.png",
  },
];

const Page = () => {
  return (
    <section className="mt-8">
      <FilterSection
        textTitle="Shopping Cart"
        textNavigation="Home . Pages ."
        pageName="Shopping Cart"
        className="hidden"
      />
      <div className="mt-16">
        {/* Main container for responsive layout */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-6">
          {/* Left Side (Products) */}
          <div className="flex-1">
            {/* Table Header for Desktop */}
            <div className="hidden lg:flex justify-between items-center text-lg font-semibold text-indigo-900 px-4">
              <p>Product</p>
              <p>Price</p>
              <p>Quantity</p>
              <p>Total</p>
            </div>
            {/* Product List */}
            <div className="flex flex-col gap-6 mt-8">
              {shoppingCart.map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-2 lg:grid-cols-4 items-center gap-4 px-4"
                >
                  {/* Product Details */}
                  <div className="flex gap-4 items-center">
                    <Image
                      src={item.img}
                      alt={item.name}
                      width={83}
                      height={87}
                    />
                    <div className="text-1">
                      <p className="font-bold text-sm">{item.name}</p>
                      <div className="text-gray-500 text-sm">
                        <p>Size: {item.size}</p>
                        <p>Color: {item.color}</p>
                      </div>
                    </div>
                  </div>
                  {/* Price */}
                  <p className="font-bold text-indigo-900 lg:justify-self-center">
                    $32.00
                  </p>
                  {/* Quantity */}
                  <div className="flex justify-start lg:justify-center items-center">
                    <Image
                      src="/shoppingCart/img-6.png"
                      alt="Quantity Control"
                      width={60}
                      height={60}
                    />
                  </div>
                  {/* Total */}
                  <p className="font-bold text-indigo-900 lg:justify-self-end">
                    $219.00
                  </p>
                </div>
              ))}
            </div>
            {/* Buttons for Cart Actions */}
            <div className="flex flex-col lg:flex-row justify-between gap-4 px-4 mt-8">
              <button className="bg-pink-500 text-white font-bold py-2 px-4 rounded-md hover:bg-pink-600">
                Update Cart
              </button>
              <button className="bg-pink-500 text-white font-bold py-2 px-4 rounded-md hover:bg-pink-600">
                Clear Cart
              </button>
            </div>
          </div>
          {/* Right Side (Cart Summary) */}
          <div className="lg:w-[30%] w-full px-4 lg:px-0">
            {/* Cart Total */}
            <h1 className="text-xl font-semibold text-indigo-900 text-center">
              Cart Total
            </h1>
            <div className="mt-5 flex justify-center items-center">
              <div className="lg:w-[371px] h-[284px] w-full flex flex-col bg-slate-100 px-8 py-4 lato">
                <div className="flex justify-between items-center mt-8">
                  <p className="font-bold text-indigo-900 text-lg">
                    Subtotals:
                  </p>
                  <p className="text-indigo-900 font-medium text-lg">£219.00</p>
                </div>
                <div className="w-full h-[2px] bg-gray-300 rounded-full my-2 "></div>
                <div className="flex justify-between items-center mt-4">
                  <p className="font-bold text-indigo-900 text-lg">Totals:</p>
                  <p className="text-indigo-900 font-medium text-lg">£325.00</p>
                </div>
                <div className="w-full h-[2px] bg-gray-300 rounded-full my-2 "></div>
                <div className="flex items-center my-5">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    width={16}
                    height={16}
                    defaultChecked
                    className="accent-green-600"
                  />
                  <p className="text-sm text-gray-400 ml-3">
                    Shipping & taxes calculated at checkout
                  </p>
                </div>
                <p className="md:w-[312px] w-full h-[40px] bg-green-500 rounded-md text-white flex justify-center items-center ">
                  Proceed to checkout
                </p>
              </div>
            </div>
            {/* Shipping Calculation */}
            <h1 className="text-xl font-semibold text-indigo-900 text-center my-7">
              Calculate Shipping
            </h1>
            <div className="w-full bg-slate-100 p-6 rounded-md shadow-md">
              <input
                type="text"
                placeholder="Country"
                className="border-b border-gray-400 outline-none w-full py-1 text-lg text-1 font-bold mb-4 bg-background"
              />
              <input
                type="text"
                placeholder="City"
                className="border-b border-gray-400 outline-none w-full py-1 text-lg mb-4 bg-background text-1 font-bold"
              />
              <input
                type="text"
                placeholder="Postal Code"
                className="border-b border-gray-400 outline-none w-full py-1 text-lg text-1 font-bold mb-4 bg-background"
              />
              <button className="bg-pink-500 text-white font-bold py-2 px-4 rounded-md w-full hover:bg-pink-600">
                Calculate Shipping
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
