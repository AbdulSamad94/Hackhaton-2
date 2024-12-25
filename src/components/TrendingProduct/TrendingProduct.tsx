import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

const rightImg = [
  {
    url: "/trendingProducts/img-3.png",
    title: "Executive Seat Chair",
    price: "$32.00",
  },
  {
    url: "/trendingProducts/img-4.png",
    title: "Executive Seat Chair",
    price: "$32.00",
  },
  {
    url: "/trendingProducts/img-5.png",
    title: "Executive Seat Chair",
    price: "$32.00",
  },
];

interface dataType {
  slug: string;
  title: string;
  image: string;
  prevPrice: string;
  currentPrice: string;
}

const TrendingProduct = async () => {
  const response: dataType[] =
    await client.fetch(`*[_type == "trendingProduct"]{
    "slug" : slug.current,
    title,
    image,
    prevPrice,
    currentPrice,
  }`);
  return (
    <section className="mt-20">
      <h1 className="text-4xl text-center text-1 font-bold text-indigo-950">
        Trending Products
      </h1>
      <div className="flex justify-center items-center gap-10 flex-col md:flex-row">
        {response.map((item, index) => (
          <div
            key={index}
            className="shadow w-[270px] h-[350px] flex justify-center items-center flex-col mt-10 cursor-pointer hover:scale-110 transition-all"
          >
            <Image
              src={urlFor(item.image).url()}
              alt={item.title}
              width={247}
              height={244}
            />
            <p className="lato font-bold text-indigo-950 my-4">{item.title}</p>
            <div className="flex justify-center items-center gap-x-2 text-1">
              <p className="text-indigo-950 text-sm">${item.currentPrice}.00</p>
              <p className="text-slate-300 text-[12px] line-through">
                ${item.prevPrice}.00
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-6 items-center mt-6 lg:flex-row flex-col">
        <div className="md:w-[420px] h-[270px] bg-pink-50 shadow p-3 py-4 relative">
          <h1 className="text-1 text-[26px] mb-3 font-semibold text-indigo-900">
            23% off in all products
          </h1>
          <Link
            href={"/products"}
            className="text-pink-500 underline lato font-semibold cursor-pointer"
          >
            Show Now
          </Link>
          <div className="flex justify-end w-full absolute bottom-3 left-2">
            <Image
              src={"/trendingProducts/img-1.png"}
              alt="bottom-img"
              width={400}
              height={400}
              className="w-auto h-auto cursor-pointer"
            />
          </div>
        </div>
        <div className="md:w-[420px] h-[270px] bg-slate-100 shadow p-3 py-4 relative">
          <h1 className="text-1 text-[26px] mb-3 font-semibold text-indigo-900">
            23% off in all products
          </h1>
          <Link
            href={"/products"}
            className="text-pink-500 underline lato font-semibold cursor-pointer"
          >
            Show Now
          </Link>
          <div className="flex justify-end w-full absolute bottom-2 left-0">
            <Image
              src={"/trendingProducts/img-2.png"}
              alt="bottom-img"
              width={700}
              height={700}
              className="w-auto h-auto cursor-pointer"
            />
          </div>
        </div>
        <div className="flex items-center justify-center flex-col gap-y-3 mb-3">
          {rightImg.map((item, index) => (
            <div className="flex gap-4" key={index}>
              <div className="w-[107px] h-[74px] bg-slate-100 flex justify-center items-center">
                <Image
                  src={item.url}
                  alt="right-img"
                  width={267}
                  height={74}
                  className="w-auto h-auto cursor-pointer"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h4 className="text-1 font-semibold text-indigo-900">
                  {item.title}
                </h4>
                <p className="text-1 font-semibold text-indigo-900 text-sm line-through">
                  {item.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingProduct;
