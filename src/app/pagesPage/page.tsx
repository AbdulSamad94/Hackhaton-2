import FilterSection from "@/components/FilterSection/FilterSection";
import { Heart, ShoppingCart, ZoomIn, Star } from "lucide-react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

interface dataType {
  slug: string;
  title: string;
  image: string;
  prevPrice: string;
  currentPrice: string;
}

const Page = async () => {
  const response: dataType[] = await client.fetch(`*[_type == "pagesProduct"]{
        "slug" : slug.current,
        title,
        image,
        prevPrice,
        currentPrice,
      }`);

  return (
    <main className="mt-10 overflow-hidden">
      <FilterSection
        textTitle={"Shop Products"}
        textNavigation={"Home . "}
        pageName={"Shop Products"}
      />
      <div className="space-y-10 mt-20">
        {response.map((item, index) => (
          <Link
            href={`/products/${item.slug}`}
            className="flex justify-start gap-y-14 gap-x-8 items-center lg:ml-24 cursor-pointer hover:scale-105 transition-all lg:flex-row flex-col"
            key={index}
          >
            <div>
              <Image
                src={urlFor(item.image).url()}
                alt={item.title}
                width={314}
                height={218}
              />
            </div>
            <div className="lg:w-[550px] w-full flex justify-center lg:block items-center flex-col">
              <div className="flex items-center gap-x-4">
                <h1 className="text-1 font-bold text-[19px] text-indigo-900">
                  {item.title}
                </h1>
                <div>
                  <Image
                    src={"/pagesPage/pagination.png"}
                    alt="pagination"
                    width={42}
                    height={10}
                    className="w-auto h-auto"
                  />
                </div>
              </div>
              <div className="flex items-center gap-x-4">
                <p className="text-1 text-indigo-900">
                  ${item.currentPrice}.00
                </p>
                <p className="text-red-500 text-1 line-through">
                  ${item.prevPrice}.00
                </p>
                <div className="flex gap-x-1 items-center mb-1">
                  <Star size={16} className="text-yellow-400 fill-yellow-400" />
                  <Star size={16} className="text-yellow-400 fill-yellow-400" />
                  <Star size={16} className="text-yellow-400 fill-yellow-400" />
                  <Star size={16} className="text-yellow-400 fill-yellow-400" />
                  <Star size={16} className="text-gray-200 fill-gray-200" />
                </div>
              </div>
              <p className="lato text-gray-400 text-center lg:text-start text-lg my-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                in est adipiscing in phasellus non in justo.
              </p>
              <div className="flex gap-x-16 mt-8">
                <ShoppingCart size={20} className="text-gray-500" />
                <Heart size={20} className="text-gray-500" />
                <ZoomIn size={20} className="text-gray-500" />
              </div>
            </div>
          </Link>
        ))}
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
    </main>
  );
};

export default Page;
