import FilterSection from "@/components/FilterSection/FilterSection";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

interface dataType {
  slug: string;
  title: string;
  image: string;
  prevPrice: string;
  currentPrice: string;
}

const Page = async () => {
  const response: dataType[] = await client.fetch(`*[_type == "productsList"]{
      "slug" : slug.current,
      title,
      image,
      prevPrice,
      currentPrice,
    }`);
  return (
    <main className="mt-10">
      <FilterSection
        textTitle={"Shop Grid Default"}
        textNavigation={"Home . Pages . "}
        pageName={"Shop Grid Default"}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 place-self-center mx-10 mt-16">
        {response.map((item, index) => (
          <Link href={`/products/${item.slug}`} key={index}>
            <div className="bg-slate-100 w-[270px] h-[280px] flex justify-center items-center">
              <Image
                src={urlFor(item.image).url()}
                alt={item.title}
                width={201}
                height={201}
              />
            </div>
            <div className="flex justify-center items-center flex-col">
              <h1 className="text-lg text-center font-bold text-1 text-indigo-950 mt-4">
                {item.title}
              </h1>
              <Image
                src={"/pagesPage/pagination.png"}
                alt="pagination-img"
                width={42}
                height={10}
                className="mt-2"
              />
              <div className="flex justify-center gap-x-3 mt-3 text-1 text-sm">
                <p className="text-indigo-900">${item.currentPrice}.00</p>
                <p className="text-red-600 line-through">
                  ${item.prevPrice}.00
                </p>
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
