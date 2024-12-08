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
        {/* Container with responsive layout */}
        <div className="flex flex-col lg:flex-row">
          {/* Left Side */}
          <div className="flex-1">
            <div className="hidden lg:flex justify-around items-center text-xl font-semibold text-1 text-indigo-900">
              <p>Product</p>
              <p>Price</p>
              <p>Quanity</p>
              <p>Total</p>
            </div>
            {shoppingCart.map((item, index) => (
              <div
                className="mt-8 grid lg:grid-cols-4 grid-cols-2 items-center gap-y-4"
                key={index}
              >
                <div className="flex gap-x-2 items-center lg:ml-16 ml-4">
                  <div>
                    <Image
                      src={item.img}
                      alt={item.name}
                      width={83}
                      height={87}
                    />
                  </div>
                  <div>
                    <p className="font-bold text-sm">{item.name}</p>
                    <div className="text-gray-400 text-sm">
                      <p>{item.size}</p>
                      <p>{item.color}</p>
                    </div>
                  </div>
                </div>
                <p className="font-bold text-1 text-indigo-900 lg:ml-24 ml-4">
                  $32.00
                </p>
                <div className="lg:ml-24 ml-4">
                  <Image
                    src={"/shoppingCart/img-6.png"}
                    alt="kuch bi"
                    width={60}
                    height={60}
                    className="w-auto h-auto"
                  />
                </div>
                <div className="font-bold text-1 text-indigo-900 lg:ml-28 ml-4">
                  $219.00
                </div>
              </div>
            ))}
            <div className="flex flex-col lg:flex-row justify-between mx-4 lg:mx-10">
              <p className="text-1 text-white flex justify-center items-center font-bold px-4 h-[41px] bg-pink-500 mt-6">
                Update Cart
              </p>
              <p className="text-1 text-white flex justify-center items-center font-bold px-4 h-[41px] bg-pink-500 mt-6">
                Clear Cart
              </p>
            </div>
          </div>
          {/* Right Side */}
          <div className="lg:w-[30%] w-full lg:mr-7">
            <h1 className="text-xl font-semibold text-1 text-indigo-900 text-center">
              Cart Total
            </h1>
            <div className="mt-5 flex justify-center">
              <Image
                src={"/shoppingCart/img-7.png"}
                alt="img"
                width={371}
                height={284}
              />
            </div>
            <h1 className="text-xl font-semibold text-1 text-indigo-900 text-center my-7">
              Calculate Shipping
            </h1>
            <div className="w-full lg:w-[371px] h-auto bg-slate-100 p-8 mx-auto">
              <input
                type="text"
                placeholder="Bangladesh"
                className="border-b border-slate-400 outline-none bg-background w-full h-10 text-1"
              />
              <input
                type="text"
                placeholder="Mirpur - Dhaka"
                className="border-b border-slate-400 outline-none bg-background w-full h-10 text-1 mt-5"
              />
              <input
                type="text"
                placeholder="Postal Code"
                className="border-b border-slate-400 outline-none bg-background w-full h-10 text-1 mt-5"
              />
              <p className="text-1 text-white flex justify-center items-center font-bold w-full lg:w-[179px] h-[41px] bg-pink-500 mt-6 mx-auto">
                Calculate Shipping
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
