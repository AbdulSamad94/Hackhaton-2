import { ChevronDown } from "lucide-react";

const navLinks = [
  {
    name: "Home",
    icon: <ChevronDown size={16} />,
  },
  {
    name: "Pages",
  },
  {
    name: "Products",
  },
  {
    name: "Blog",
  },
  {
    name: "Shop",
  },
  {
    name: "Contact",
  },
];
const Navbar = () => {
  return (
    <nav className="flex justify-center items-end gap-x-8 flex-wrap gap-y-2 ml-10 lato">
      {navLinks.map((item, index) => (
        <p
          className="flex gap-x-1 items-center justify-center hover:text-pink-500 transition-all"
          key={index}
        >
          {item.name}
          {item.icon}
        </p>
      ))}
    </nav>
  );
};

export default Navbar;
