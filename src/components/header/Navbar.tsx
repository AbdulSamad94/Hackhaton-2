import { ChevronDown } from "lucide-react";
import Link from "next/link";

const navLinks = [
  {
    name: "Home",
    link: "/",
    icon: <ChevronDown size={16} />,
  },
  {
    name: "Pages",
    link: "/pagesPage",
  },
  {
    name: "Products",
    link: "/products",
  },
  {
    name: "Blog",
    link: "/blog",
  },
  {
    name: "Shop",
    link: "/products",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];
const Navbar = () => {
  return (
    <nav className="flex justify-center items-end gap-x-8 flex-wrap gap-y-2 ml-10 lato">
      {navLinks.map((item, index) => (
        <Link
          href={`${item.link}`}
          className="flex gap-x-1 items-center justify-center cursor-pointer hover:text-pink-500 transition-all"
          key={index}
        >
          {item.name}
          {item.icon}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
