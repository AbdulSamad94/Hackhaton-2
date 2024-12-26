import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { client } from "@/sanity/lib/client";
import Link from "next/link";

const name = [
  {
    name: "New Arrival",
  },
  {
    name: "Best Seller",
  },
  {
    name: "Featured",
  },
  {
    name: "Special Offer",
  },
];

interface dataType {
  slug: string;
  title: string;
  image: string;
  prevPrice: string;
  currentPrice: string;
}

const LatestProducts = async () => {
  const response: dataType[] = await client.fetch(`*[_type == "latestProduct"]{
  "slug" : slug.current,
  title,
  image,
  prevPrice,
  currentPrice,
}`);
  return (
    <section className="mt-20">
      <h1 className="text-4xl text-center text-1 font-bold text-indigo-950">
        Latest Product
      </h1>
      <div className="flex justify-center items-center gap-14 mt-5 lg:flex-row flex-col">
        {name.map((item, index) => (
          <p
            className="hover:text-red-500 hover:underline transition-all cursor-pointer"
            key={index}
          >
            {item.name}
          </p>
        ))}
      </div>
      <div className="flex justify-center items-center mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {response.map((item, index) => (
            <Link
              href={`/products/${item.slug}`}
              key={index}
              className="px-5 md:px-0 m-auto"
            >
              <div
                className={`${
                  item.slug === "comfort-handy-craft-1"
                    ? "bg-white"
                    : "bg-slate-100"
                } md:w-[360px] h-[270px] w-[300px] flex justify-center items-center`}
              >
                <Image
                  key={index}
                  src={urlFor(item.image).url()}
                  alt="latest-product-image"
                  width={360}
                  height={306}
                  className="cursor-pointer w-[223px] h-[229px]"
                />
              </div>
              <div className="flex justify-between my-3">
                <p className="text-1 text-indigo-900 after:content-normal after:block after:w-full after:h-[2px] after:bg-slate-200">
                  {item.title}
                </p>
                <div className="flex justify-center items-center gap-x-2 text-1">
                  <p className="text-indigo-950 text-sm">
                    ${item.prevPrice}.00
                  </p>
                  <p className="text-pink-500 text-[12px] line-through mt-1">
                    ${item.currentPrice}.00
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestProducts;
