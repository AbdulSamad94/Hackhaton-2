import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

interface dataType {
  slug: string;
  title: string;
  image: string;
  prevPrice: string;
  currentPrice: string;
}

const TopCategories = async () => {
  const response: dataType[] = await client.fetch(`*[_type == "TogCategories"]{
    "slug" : slug.current,
    title,
    image,
    currentPrice,
  }`);
  return (
    <section className="mt-20">
      <h1 className="text-4xl text-center text-1 font-bold text-indigo-950">
        Top Categories
      </h1>
      <div className="flex flex-col lg:flex-row justify-center items-center mt-10">
        {response.map((item, index) => (
          <div
            className="relative flex justify-center items-center flex-col"
            key={index}
          >
            <Image
              src={"/topProduct/back-img.png"}
              alt="backimg"
              width={500}
              height={500}
              className="w-auto h-auto rounded-full"
            />
            <div className="group w-[272px] h-[272px] bg-slate-50 flex justify-center items-center absolute hover:top-6  top-[30px] right-[39px] flex-col z-10 rounded-full transition-all">
              <Image
                src={urlFor(item.image).url()}
                alt="top-categories-img"
                width={269}
                height={345}
                className="cursor-pointer w-auto h-auto z-10"
              />
              <p
                className={`group-hover:flex hidden transition-all absolute bottom-7 text-sm bg-green-500 w-[94px] h-[29px] justify-center items-center text-1 text-white z-10 cursor-pointer`}
              >
                View Shop
              </p>
            </div>
            <h1 className="text-1 text-lg font-medium text-indigo-900">
              {item.title}
            </h1>
            <p className="text-1 text-indigo-900 text-sm">
              ${item.currentPrice}.00
            </p>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center mt-10">
        <Image
          src={"/topProduct/pagination.png"}
          alt="pagination"
          width={46}
          height={12}
        />
      </div>
      <div className="bg-[url('/topProduct/background-img.png')] bg-cover bg-center md:h-96 w-full mt-10 flex justify-center items-center flex-col py-8">
        <h1 className="sm:text-4xl text-2xl text-center text-1 font-bold text-indigo-900 md:w-[40%] leading-relaxed">
          Get Leatest Update By Subscribe 0ur Newslater
        </h1>
        <p className="text-1 text-sm sm:text-base text-white flex justify-center items-center font-bold sm:px-12 py-3 bg-pink-500 mt-6 px-4">
          Shop Now
        </p>
      </div>
      <div className="flex justify-center items-center mt-14">
        <Image
          src={"/topProduct/brands.png"}
          alt="brands-img"
          width={904}
          height={93}
          className="cursor-pointer"
        />
      </div>
    </section>
  );
};

export default TopCategories;
