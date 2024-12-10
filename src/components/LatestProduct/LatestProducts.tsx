import Image from "next/image";

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
const images = [
  {
    id: 1,
    url: "/LatestProduct/img-1.png",
    text: "Comfort Handy Craft",
    price: "$42.00",
    prevPrice: "$62.00",
  },
  {
    id: 2,
    url: "/LatestProduct/img-2.png",
    text: "Comfort Handy Craft",
    price: "$42.00",
    prevPrice: "$62.00",
  },
  {
    id: 3,
    url: "/LatestProduct/img-3.png",
    text: "Comfort Handy Craft",
    price: "$42.00",
    prevPrice: "$62.00",
  },
  {
    id: 4,
    url: "/LatestProduct/img-4.png",
    text: "Comfort Handy Craft",
    price: "$42.00",
    prevPrice: "$62.00",
  },
  {
    id: 5,
    url: "/LatestProduct/img-5.png",
    text: "Comfort Handy Craft",
    price: "$42.00",
    prevPrice: "$62.00",
  },
  {
    id: 6,
    url: "/LatestProduct/img-6.png",
    text: "Comfort Handy Craft",
    price: "$42.00",
    prevPrice: "$62.00",
  },
];
const LatestProducts = () => {
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
          {images.map((item, index) => (
            <div key={index} className="px-5 md:px-0 m-auto">
              <div
                className={`${
                  item.id === 2 ? "bg-white" : "bg-slate-100"
                } md:w-[360px] h-[270px] w-[300px] flex justify-center items-center`}
              >
                <Image
                  key={index}
                  src={item.url}
                  alt="latest-product-image"
                  width={360}
                  height={306}
                  className="cursor-pointer w-[223px] h-[229px]"
                />
              </div>
              <div className="flex justify-between my-3">
                <p className="text-1 text-indigo-900 after:content-normal after:block after:w-full after:h-[2px] after:bg-slate-200">
                  {item.text}
                </p>
                <div className="flex justify-center items-center gap-x-2 text-1">
                  <p className="text-indigo-950 text-sm">{item.price}</p>
                  <p className="text-pink-500 text-[12px] line-through text-xs">
                    {item.prevPrice}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestProducts;
