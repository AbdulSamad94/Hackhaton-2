import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

interface dataType {
  slug: string;
  title: string;
  image: string;
  currentPrice: string;
}

const FeaturedProducts = async () => {
  const response: dataType[] =
    await client.fetch(`*[_type == "featuredProduct"]{
  "slug" : slug.current,
  title,
  image,
  currentPrice
}`);

  return (
    <section className="mt-20">
      <h1 className="text-4xl text-center text-1 font-bold text-indigo-950">
        Featured Products
      </h1>
      <div className="mt-6 flex justify-center items-center flex-col lg:flex-row gap-4">
        {response.map((item, index) => (
          <Link
            href={`/products/${item.slug}`}
            key={index}
            className="cursor-pointer shadow hover:bg-blue-800 flex flex-col justify-center items-center pb-4 group transition-all"
          >
            <div className="bg-slate-100 relative w-[270px] h-[236px] flex justify-center items-center">
              <Image
                src={urlFor(item.image).url()}
                alt="product-img"
                width={270}
                height={236}
                className="cursor-pointer lg:w-auto lg:h-auto w-[200px] h-[170px]"
              />
              <p
                className={`group-hover:flex hidden transition-all absolute bottom-2 text-sm bg-green-500 w-[94px] h-[29px] justify-center items-center text-1 text-white z-10`}
              >
                View Detail
              </p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h1 className="lato text-lg text-pink-600 font-semibold my-3 group-hover:text-white">
                {item.title}
              </h1>
              <div>
                <Image
                  src="/FeaturedProduct/dots.png"
                  alt="product-img"
                  width={270}
                  height={236}
                  className="cursor-pointer w-auto h-auto"
                />
              </div>
              <p className="text-sm text-1 text-indigo-800 my-3 group-hover:text-white">
                Code - Y523201
              </p>
              <p className="text-sm text-1 text-indigo-800 group-hover:text-white">
                ${item.currentPrice}.00
              </p>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-center items-center mt-6">
        <Image
          src={"/FeaturedProduct/pagination1.png"}
          alt="pagination"
          width={60}
          height={10}
        />
      </div>
    </section>
  );
};

export default FeaturedProducts;
