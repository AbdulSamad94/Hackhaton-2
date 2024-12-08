import Image from "next/image";

const featuredProducts = [
  {
    url: "/FeaturedProduct/img-1.png",
  },
  {
    url: "/FeaturedProduct/img-2.png",
  },
  {
    url: "/FeaturedProduct/img-3.png",
  },
  {
    url: "/FeaturedProduct/img-4.png",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="mt-20">
      <h1 className="text-4xl text-center text-1 font-bold text-indigo-950">
        Featured Products
      </h1>
      <div className="mt-6 flex justify-center items-center flex-col lg:flex-row">
        {featuredProducts.map((item, index) => (
          <Image
            key={index}
            src={item.url}
            alt="product-img"
            width={270}
            height={361}
            className="cursor-pointer"
          />
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
