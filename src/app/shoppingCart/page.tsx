"use client";

import React, { useState } from "react";
import { useShoppingCart } from "use-shopping-cart";

import FilterSection from "@/components/FilterSection/FilterSection";

import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

import { X } from "lucide-react";
import { loadStripe } from "@stripe/stripe-js";

const Page = () => {
  const { cartDetails, totalPrice, removeItem, setItemQuantity, clearCart } =
    useShoppingCart();

  const [shipping, setShipping] = useState(false);
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
  );

  const handleCheckOut = async () => {
    const stripe = await stripePromise;

    if (!stripe) {
      console.error("Stripe.js has not loaded properly.");
      return;
    }

    try {
      const response = await fetch("/api/webhook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cartDetails: Object.values(cartDetails || {}) }),
      });

      if (!response.ok) {
        throw new Error("Failed to create checkout session");
      }

      const { sessionId } = await response.json();

      if (sessionId) {
        const { error } = await stripe.redirectToCheckout({ sessionId });
        if (error) {
          console.error("Error redirecting to checkout:", error);
        }
      } else {
        console.error("No session ID returned.");
      }
    } catch (error) {
      console.error("Checkout error:", error);
    }
  };

  if (cartDetails && Object.keys(cartDetails).length === 0) {
    return (
      <div className="py-40 flex justify-center items-center text-1 flex-col">
        <h1 className="text-indigo-900 text-4xl">Your Cart Is Empty</h1>
        <p className="text-center my-8 text-indigo-900">Please Add Items :)</p>
      </div>
    );
  }
  return (
    <section className="mt-8">
      <FilterSection
        textTitle="Shopping Cart"
        textNavigation="Home . Pages ."
        pageName="Shopping Cart"
        className="hidden"
      />

      <div className="mt-16 lg:px-8 px-3">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-6">
          {/* Left Side */}
          <div className="flex-1">
            {/* product detail types */}
            <div className="grid-cols-4 justify-center items-center hidden lg:grid">
              <p className="text-2xl font-bold text-indigo-900">Product</p>
              <p className="text-2xl font-bold text-indigo-900 flex justify-center">
                Price
              </p>
              <p className="text-2xl font-bold text-indigo-900 flex justify-center">
                Quantity
              </p>
              <p className="text-2xl font-bold text-indigo-900 flex justify-end">
                Total
              </p>
            </div>
            {/* Product List */}
            <div className="flex flex-col gap-6 mt-8">
              {Object.values(cartDetails || {}).map((item) => (
                <div
                  className="grid lg:grid-cols-4 justify-center items-center grid-cols-2 gap-y-10 lg:gap-0 border-b border-slate-300 py-8"
                  key={item.id}
                >
                  {/* 1 */}
                  <div className="flex gap-5 text-1 w-fit">
                    <div className="relative bg-slate-100 rounded-md">
                      {item.image && (
                        <>
                          <Image
                            src={urlFor(item.image).url()}
                            alt={item.name}
                            width={100}
                            height={200}
                            className="rounded-md w-[100px] h-[100px]"
                          />
                          <div
                            onClick={() => removeItem(item.id)}
                            className="cursor-pointer absolute -top-1 -right-1 bg-black rounded-full w-4 h-4 flex justify-center items-center"
                          >
                            <X size={12} className="fill-white text-white" />
                          </div>
                        </>
                      )}
                    </div>
                    <div>
                      <p className="text-sm font-medium">{item.name}</p>
                      <p className="text-sm text-gray-400">Color: Brown</p>
                      <p className="text-sm text-gray-400">Size: XL</p>
                    </div>
                  </div>
                  {/* 2 */}
                  <p className="font-semibold text-indigo-900 flex lg:justify-center justify-end">
                    <span className="text-indigo-900 font-medium mr-2 lg:hidden block">
                      Price:
                    </span>{" "}
                    ${item.price}.00
                  </p>
                  {/* 3 */}
                  <div className="flex lg:justify-center justify-start items-center">
                    <input
                      value={item.quantity}
                      type="number"
                      min="1"
                      onChange={(e) =>
                        setItemQuantity(item.id, parseInt(e.target.value, 10))
                      }
                      className="w-16 text-center border border-gray-300 rounded"
                    />
                  </div>
                  {/* 4 */}
                  <p className="font-semibold text-indigo-900 flex justify-end items-center">
                    <span className="text-indigo-900 font-medium mr-2 lg:hidden block">
                      Total:
                    </span>{" "}
                    ${item.price * item.quantity}.00
                  </p>
                </div>
              ))}
            </div>
            {/* Buttons */}
            <div className="flex flex-col lg:flex-row justify-between mt-8">
              <button className="bg-pink-500 text-white font-bold py-2 px-4 rounded-md hover:bg-pink-600">
                Update Cart
              </button>
              <button
                onClick={() => clearCart()}
                className="bg-pink-500 text-white font-bold py-2 px-4 rounded-md hover:bg-pink-600"
              >
                Clear Cart
              </button>
            </div>
          </div>

          {/* Right Side */}
          <div className="lg:w-[30%] w-full px-4 lg:px-0">
            {/* CartTOtla */}
            <h1 className="text-2xl font-bold text-indigo-900 text-center">
              Cart Total
            </h1>
            <div className="mt-16 flex justify-center items-center">
              <div className="lg:w-[371px] h-[284px] w-full flex flex-col bg-slate-100 px-8 py-4 lato">
                <div className="flex justify-between items-center mt-8">
                  <p className="font-bold text-indigo-900 text-lg">
                    Subtotals:
                  </p>
                  <p className="text-indigo-900 font-medium text-lg">
                    £{totalPrice}.00
                  </p>
                </div>
                <div className="w-full h-[2px] bg-gray-300 rounded-full my-2 "></div>
                <div className="flex justify-between items-center mt-4">
                  <p className="font-bold text-indigo-900 text-lg">Totals:</p>
                  <p className="text-indigo-900 font-medium text-lg">
                    $
                    {shipping && country && city && postalCode
                      ? (totalPrice || 0) + 100
                      : totalPrice || 0}
                    .00
                  </p>
                </div>
                <div className="w-full h-[2px] bg-gray-300 rounded-full my-2 "></div>
                <div className="flex items-center my-5">
                  <input
                    type="checkbox"
                    width={16}
                    height={16}
                    defaultChecked={shipping}
                    onChange={() => setShipping(!shipping)}
                    className="accent-green-600"
                  />
                  <p className="text-sm text-gray-400 ml-3">
                    Shipping & taxes calculated at checkout
                  </p>
                </div>
                <button
                  onClick={handleCheckOut}
                  className="md:w-[312px] w-full h-[40px] bg-green-500 rounded-md text-white flex justify-center items-center cusror-pointer hover:bg-green-600"
                >
                  Proceed to checkout
                </button>
              </div>
            </div>
            {/* Shipping Calculation */}
            <h1 className="text-2xl font-bold text-indigo-900 text-center my-8">
              Calculate Shipping
            </h1>
            <div className="flex justify-center items-center">
              <div className="lg:w-[371px] h-[284px] w-full flex flex-col bg-slate-100 px-8 py-8 lato">
                <input
                  type="text"
                  placeholder="Pakistan"
                  required
                  onChange={(e) => setCountry(e.target.value)}
                  className="border-b border-gray-300 outline-none w-full py-1 text-lg text-1 font-medium mb-4 bg-background"
                />
                <input
                  type="text"
                  placeholder="City"
                  required
                  onChange={(e) => setCity(e.target.value)}
                  className="border-b border-gray-300 outline-none w-full py-1 text-lg mb-4 bg-background text-1 font-medium"
                />
                <input
                  type="text"
                  placeholder="Postal Code"
                  required
                  onChange={(e) => setPostalCode(e.target.value)}
                  className="border-b border-gray-300 outline-none w-full py-1 text-lg text-1 font-medium mb-4 bg-background"
                />
                <button className="bg-pink-500 text-white font-bold py-2 px-4 rounded-md w-full hover:bg-pink-600 mt-5">
                  Calculate Shipping
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
