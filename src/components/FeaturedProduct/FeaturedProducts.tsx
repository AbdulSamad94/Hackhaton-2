import Image from "next/image";

const featuredProducts = [
  {
    url: "/FeaturedProduct/img-1.png",
    text: "Cantilever chair",
    dots: "/FeaturedProduct/dots.png",
    code: "Code - Y523201",
    price: "$42.00",
  },
  {
    url: "/FeaturedProduct/img-2.png",
    text: "Cantilever chair",
    dots: "/FeaturedProduct/dots.png",
    code: "Code - Y523201",
    price: "$42.00",
  },
  {
    url: "/FeaturedProduct/img-3.png",
    text: "Cantilever chair",
    dots: "/FeaturedProduct/dots.png",
    code: "Code - Y523201",
    price: "$42.00",
  },
  {
    url: "/FeaturedProduct/img-4.png",
    text: "Cantilever chair",
    dots: "/FeaturedProduct/dots.png",
    code: "Code - Y523201",
    price: "$42.00",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="mt-20">
      <h1 className="text-4xl text-center text-1 font-bold text-indigo-950">
        Featured Products
      </h1>
      <div className="mt-6 flex justify-center items-center flex-col lg:flex-row gap-4">
        {featuredProducts.map((item, index) => (
          <div
            key={index}
            className="shadow hover:bg-blue-800 flex flex-col justify-center items-center pb-4 group transition-all"
          >
            <div className="bg-slate-100 relative w-[270px] h-[236px] flex justify-center items-center">
              <Image
                src={item.url}
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
                {item.text}
              </h1>
              <div>
                <Image
                  src={item.dots}
                  alt="product-img"
                  width={270}
                  height={236}
                  className="cursor-pointer w-auto h-auto"
                />
              </div>
              <p className="text-sm text-1 text-indigo-800 my-3 group-hover:text-white">
                {item.code}
              </p>
              <p className="text-sm text-1 text-indigo-800 group-hover:text-white">
                {item.price}
              </p>
            </div>
          </div>
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
