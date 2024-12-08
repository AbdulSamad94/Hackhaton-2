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
    url: "/LatestProduct/img-1.png",
  },
  {
    url: "/LatestProduct/img-2.png",
  },
  {
    url: "/LatestProduct/img-3.png",
  },
  {
    url: "/LatestProduct/img-4.png",
  },
  {
    url: "/LatestProduct/img-5.png",
  },
  {
    url: "/LatestProduct/img-6.png",
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
            <Image
              key={index}
              src={item.url}
              alt="latest-product-image"
              width={360}
              height={306}
              className="cursor-pointer"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestProducts;
