import FilterSection from "@/components/FilterSection/FilterSection";
import Image from "next/image";
import { Star, Heart, ArrowRight } from "lucide-react";
import { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import AddToCartButton from "@/components/ShoppingCartComponents/AddToCart";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

interface dataType {
  slug: string;
  title: string;
  image: string;
  prevPrice: string;
  currentPrice: string;
}

const relatedProducts = [
  {
    name: "Mens Fashion Wear",
    stars: 4,
    emptyStar: 1,
    price: "$43.00",
    img: "/dynamic/img-2.png",
  },
  {
    name: "Womens Fashion",
    stars: 5,
    emptyStar: 0,
    price: "$67.00",
    img: "/dynamic/img-3.png",
  },
  {
    name: "Wolx dummy Fashion",
    stars: 4,
    emptyStar: 1,
    price: "$67.00",
    img: "/dynamic/img-4.png",
  },
  {
    name: "Top Wall Digital Clock",
    stars: 3,
    emptyStar: 2,
    price: "$51.00",
    img: "/dynamic/img-5.png",
  },
];

export async function generateStaticParams() {
  const products: dataType[] = await client.fetch(`*[_type == "productsList"]{
      "slug": slug.current
    }`);

  return products.map((product) => ({
    id: product.slug,
  }));
}

export const metadata: Metadata = {
  title: "Product Details",
};

const Page = async ({ params }: PageProps) => {
  const { id } = await params;
  const response: dataType[] =
    await client.fetch(`*[_type == "productsList"|| _type == "pagesProduct"|| _type == "featuredProduct"|| _type == "latestProduct"|| _type == "TogCategories"|| _type == "trendingProduct"]{
        "slug" : slug.current,
        title,
        image,
        prevPrice,
        currentPrice,
      }`);

  const data = response.find((e) => e.slug === id);

  if (!data) {
    return (
      <div className="text-center mt-20">
        <h1 className="text-2xl font-semibold text-red-500">
          Product not found!
        </h1>
        <p className="text-gray-600">
          The product you are looking for does nott exist.
        </p>
      </div>
    );
  }

  return (
    <section className="mt-8">
      <FilterSection
        textTitle="Product Details"
        textNavigation="Home . Pages . "
        pageName="Products Detail"
        className="hidden"
      />

      <div className="mt-16 flex justify-center items-center gap-x-10 lg:flex-row flex-col">
        {/*Left side Images */}
        <div className="flex justify-start gap-6 lg:flex-row flex-col-reverse">
          {/* LeftImage */}
          <div className="w-[176px] h-[180px] bg-slate-100 flex justify-center items-center shadow m-auto lg:m-0">
            <Image
              src={urlFor(data.image).url()}
              alt="img"
              width={151}
              height={155}
            />
          </div>
          {/* Right-Image */}
          <div className="lg:w-[395px] lg:h-[502px] bg-slate-100 flex justify-center items-center shadow mx-4">
            <Image
              src={urlFor(data.image).url()}
              alt="main-img"
              width={375}
              height={487}
            />
          </div>
        </div>
        {/* Right-Side-Text */}
        <div className="lg:w-[40%] w-full flex flex-col justify-center items-center lg:block mt-10 lg:mt-0">
          <h1 className="text-4xl text-indigo-900 font-bold text-1">
            {data.title}
          </h1>
          <div className="flex gap-x-1 items-center">
            <Star size={16} className="text-yellow-400 fill-yellow-400" />
            <Star size={16} className="text-yellow-400 fill-yellow-400" />
            <Star size={16} className="text-yellow-400 fill-yellow-400" />
            <Star size={16} className="text-yellow-400 fill-yellow-400" />
            <Star size={16} className="text-yellow-400 fill-yellow-400" />
            <span className="text-1 text-indigo-900 mt-1">(22)</span>
          </div>
          <div className="flex items-center gap-x-4 mt-4">
            <p className="text-1 text-indigo-900">${data.currentPrice}.00</p>
            {data.prevPrice && (
              <p className="text-red-500 text-1 line-through">
                ${data.prevPrice}.00
              </p>
            )}
          </div>
          <p className="text-1 text-indigo-900 mt-4 font-semibold">Color</p>
          <p className="text-1 text-gray-400 mt-4 text-center lg:text-start mx-4 lg:mx-0">
            {data.title}
          </p>
          <div className="flex items-center mt-6 ml-8 hover:underline px-4 py-2 transition-all cursor-pointer w-48 justify-center rounded-md">
            <AddToCartButton product={data} />
            <Heart className="text-indigo-900 ml-4 mb-1" size={18} />
          </div>
          <div className="text-1 text-indigo-900 mt-5 space-y-3 font-semibold">
            <p>Categories</p>
            <p>Tags</p>
            <p className="flex gap-x-3 items-center">
              Share{" "}
              <span className="mt-1">
                <Image
                  src="/dynamic/img-1.png"
                  width={80}
                  height={70}
                  alt="social-media-apps"
                  className="w-auto h-auto"
                />
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="mt-20 bg-slate-100 w-full lg:px-20 px-4 text-1 py-20 ">
        <div className="font-bold text-2xl flex justify-start items-center text-indigo-900 gap-x-20 lg:flex-row flex-col gap-y-8">
          <h1 className="underline cursor-pointer">Description</h1>
          <h1 className="cursor-pointer">Additional Info</h1>
          <h1 className="cursor-pointer">Reviews</h1>
          <h1 className="cursor-pointer">Video</h1>
        </div>
        <h1 className="font-bold text-2xl text-indigo-900 lg:mt-10 mt-20 text-center lg:text-start">
          Various Temper.
        </h1>
        <p className="text-gray-400 font-semibold mt-5 leading-loose text-center lg:text-start">
          Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor
          ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris
          varius ac est bibendum. Scelerisque a, risus ac ante. Velit
          consectetur neque, elit, aliquet. Non varius proin sed urna, egestas
          consequat laoreet diam tincidunt. Magna eget faucibus cras justo,
          tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla
          lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui,
          massa viverr .
        </p>
        <h1 className="font-bold text-2xl text-indigo-900 mt-10 text-center lg:text-start">
          More Details
        </h1>
        <p className="text-gray-400 flex gap-x-4 mt-4 font-semibold text-center lg:text-start">
          <ArrowRight className="text-gray-800 w-auto h-auto" />
          Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam
          arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc
          nec. Dui, massa viverr .
        </p>
        <p className="text-gray-400 flex gap-x-4 mt-4 font-semibold text-center lg:text-start">
          <ArrowRight className="text-gray-800 w-auto h-auto" />
          Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam
          arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc
          nec. Dui, massa viverr .
        </p>
        <p className="text-gray-400 flex gap-x-4 mt-4 font-semibold text-center lg:text-start">
          <ArrowRight className="text-gray-800 w-auto h-auto" />
          Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam
          arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc
          nec. Dui, massa viverr .
        </p>
        <p className="text-gray-400 flex gap-x-4 mt-4 font-semibold text-center lg:text-start">
          <ArrowRight className="text-gray-800 w-auto h-auto" />
          Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam
          arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc
          nec. Dui, massa viverr .
        </p>
      </div>
      <div className="mt-20">
        <h1 className="text-4xl text-center text-1 font-bold text-indigo-950">
          Related Products
        </h1>
        <div className="flex justify-center items-center gap-7 mt-10 lg:flex-row flex-col">
          {relatedProducts.map((item, index) => (
            <div
              key={index}
              className="hover:scale-90 transition-all cusror-pointer"
            >
              <Image src={item.img} alt={item.name} width={270} height={340} />
              <div className="flex justify-between items-center">
                <h1 className="text-1 font-semibold text-indigo-900 my-4">
                  {item.name}
                </h1>
                <div className="flex gap-x-1">
                  {Array.from({ length: item.stars }).map((_, i) => (
                    <Star
                      key={`star-${i}`}
                      size={12}
                      className="text-yellow-400 fill-yellow-400"
                    />
                  ))}
                  {Array.from({ length: item.emptyStar }).map((_, i) => (
                    <Star
                      key={`star-${i}`}
                      size={12}
                      className="text-gray-400 fill-gray-400"
                    />
                  ))}
                </div>
              </div>
              <p className="text-1 text-indigo-900">{item.price}</p>
            </div>
          ))}
        </div>
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

export default Page;
