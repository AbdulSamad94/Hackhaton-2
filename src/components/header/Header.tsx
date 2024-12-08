import { Search } from "lucide-react";
import TopBar from "./TopBar";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="w-full bg-white">
      <div>
        <TopBar />
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-[1200px] mx-auto mt-5 px-4">
        <div className="flex flex-col md:flex-row justify-center md:justify-start items-center flex-wrap gap-4 text-center">
          <h1 className="font-bold text-indigo-950 text-3xl sm:text-4xl text-center cursor-pointer text-1">
            Hekto
          </h1>
          <Navbar />
        </div>
        <div className="flex items-center mt-4 md:mt-0">
          <input
            type="text"
            className="w-full md:w-[270px] h-10 border-2 border-slate-200 outline-none px-3 text-sm"
          />
          <div className="bg-pink-500 flex justify-center items-center w-12 h-10 -ml-1">
            <Search className="text-white" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
