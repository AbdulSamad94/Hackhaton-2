"use client";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Mail, ChevronDown, Heart, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { FiPhoneCall } from "react-icons/fi";
import { useShoppingCart } from "use-shopping-cart";

const nav = [
  {
    name: "English",
    icon: <ChevronDown size={16} />,
  },
  {
    name: "USD",
    icon: <ChevronDown size={16} />,
  },
  {
    name: "WhiteList",
    icon: <Heart size={16} />,
  },
];

const TopBar = () => {
  const { cartCount } = useShoppingCart();
  return (
    <div className="bg-purple-700 w-full h-[44px] flex justify-center items-center text-white text-1 text-xs md:text-base px-4">
      <div className="flex justify-between items-center w-full max-w-[1200px] flex-wrap">
        <div className="flex justify-center items-center flex-wrap gap-x-2 md:gap-x-4 md:gap-y-2">
          <div className="flex items-center">
            <Mail size={15} />
            <p className="ml-2 font-semibold hidden sm:block">
              mhhasanul@gmail.com
            </p>
          </div>
          <div className="flex items-center">
            <FiPhoneCall />
            <p className="font-semibold ml-3 hidden sm:block">(12345)67890</p>
          </div>
        </div>
        <div className="flex justify-center items-center lg:gap-x-4 gap-x-1 flex-wrap gap-y-2">
          {nav.map((item, index) => (
            <p
              className="flex items-center gap-x-1 font-semibold text-center"
              key={index}
            >
              {item.name}
              {item.icon}
            </p>
          ))}
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <Link className="relative" href={"/shoppingCart"}>
            <ShoppingCart size={20} className="ml-5" />
            <div className="w-4 h-4 bg-black rounded-full absolute top-3 -right-2 text-[10px] flex justify-center items-center text-center">
              {cartCount}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
