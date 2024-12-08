import FilterSection from "@/components/FilterSection/FilterSection";
import Image from "next/image";
import { Star, Heart, ArrowRight } from "lucide-react";

const products = [
  {
    id: "1",
    name: "Vel elit euismod",
    price: "$26.00 ",
    prevPrice: "$42.00",
    img: "/pagesPage/img-1.png",
    stars: 5,
    rating: "(22)",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis suscipit, quia veniam minima facere ex!",
  },
  {
    id: "2",
    name: "Ultricies condimentum imperdiet",
    price: "$26.00 ",
    prevPrice: "$42.00",
    img: "/pagesPage/img-2.png",
    stars: 5,
    rating: "(22)",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis suscipit, quia veniam minima facere ex!",
  },
  {
    id: "3",
    name: "Vitae suspendisse sed",
    price: "$26.00 ",
    prevPrice: "$42.00",
    img: "/pagesPage/img-3.png",
    stars: 5,
    rating: "(22)",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis suscipit, quia veniam minima facere ex!",
  },
  {
    id: "4",
    name: "Sed at fermentum",
    price: "$26.00 ",
    prevPrice: "$42.00",
    img: "/pagesPage/img-4.png",
    stars: 5,
    rating: "(22)",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis suscipit, quia veniam minima facere ex!",
  },
  {
    id: "5",
    name: "Fusce pellentesque at",
    price: "$26.00 ",
    prevPrice: "$42.00",
    img: "/pagesPage/img-5.png",
    stars: 5,
    rating: "(22)",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis suscipit, quia veniam minima facere ex!",
  },
  {
    id: "6",
    name: "Vestibulum magna laoreet",
    price: "$26.00 ",
    prevPrice: "$42.00",
    img: "/pagesPage/img-6.png",
    stars: 5,
    rating: "(22)",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis suscipit, quia veniam minima facere ex!",
  },
  {
    id: "7",
    name: "Sollicitudin amet orci",
    price: "$26.00 ",
    prevPrice: "$42.00",
    img: "/pagesPage/img-7.png",
    stars: 5,
    rating: "(22)",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis suscipit, quia veniam minima facere ex!",
  },
  {
    id: "8",
    name: "Ultrices mauris sit",
    price: "$26.00 ",
    prevPrice: "$42.00",
    img: "/pagesPage/img-8.png",
    stars: 5,
    rating: "(22)",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis suscipit, quia veniam minima facere ex!",
  },
  {
    id: "9",
    name: "Pellentesque condimentum ac",
    price: "$26.00 ",
    prevPrice: "$42.00",
    img: "/pagesPage/img-9.png",
    stars: 5,
    rating: "(22)",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis suscipit, quia veniam minima facere ex!",
  },
  {
    id: "10",
    name: "Lectus vulputate faucibus",
    price: "$26.00 ",
    prevPrice: "$42.00",
    img: "/pagesPage/img-10.png",
    stars: 5,
    rating: "(22)",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis suscipit, quia veniam minima facere ex!",
  },
  {
    id: "11",
    name: "Purus risus, ut",
    price: "$26.00 ",
    prevPrice: "$42.00",
    img: "/pagesPage/img-11.png",
    stars: 5,
    rating: "(22)",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis suscipit, quia veniam minima facere ex!",
  },
  {
    id: "4",
    name: "Sed at fermentum",
    price: "$26.00 ",
    prevPrice: "$42.00",
    img: "/pagesPage/img-4.png",
    stars: 5,
    rating: "(22)",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis suscipit, quia veniam minima facere ex!",
  },
];

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
  return products.map((product) => ({
    id: product.id,
  }));
}

const Page = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const data = products.find((e) => e.id === id);
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
            <Image src={`${data?.img}`} alt="img" width={151} height={155} />
          </div>
          {/* Right-Image */}
          <div className="lg:w-[395px] lg:h-[502px] bg-slate-100 flex justify-center items-center shadow mx-4">
            <Image
              src={`${data?.img}`}
              alt="main-img"
              width={375}
              height={487}
            />
          </div>
        </div>
        {/* Right-Side-Text */}
        <div className="lg:w-[40%] w-full flex flex-col justify-center items-center lg:block mt-10 lg:mt-0">
          <h1 className="text-4xl text-indigo-900 font-bold text-1">
            {data?.name}
          </h1>
          <div className="flex gap-x-1 items-center mt-2">
            {Array.from({ length: data.stars }).map((_, i) => (
              <Star
                key={`star-${i}`}
                size={12}
                className="text-yellow-400 fill-yellow-400"
              />
            ))}
            <span className="text-1 text-indigo-900">{data.rating}</span>
          </div>
          <div className="flex items-center gap-x-4 mt-4">
            <p className="text-1 text-indigo-900">{data.price}</p>
            <p className="text-red-500 text-1 line-through">{data.prevPrice}</p>
          </div>
          <p className="text-1 text-indigo-900 mt-4 font-semibold">Color</p>
          <p className="text-1 text-gray-400 mt-4 text-center lg:text-start mx-4 lg:mx-0">
            {data.text}
          </p>
          <div className="flex  items-center mt-6 ml-8">
            <p className="text-1 text-indigo-900 text-lg">Add To Cart</p>
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
