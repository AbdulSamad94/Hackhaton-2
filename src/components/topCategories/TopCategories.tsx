import Image from "next/image";

const topProducts = [
  {
    url: "/topProduct/img-1.png",
  },
  {
    url: "/topProduct/img-2.png",
  },
  {
    url: "/topProduct/img-3.png",
  },
  {
    url: "/topProduct/img-4.png",
  },
];

const TopCategories = () => {
  return (
    <section className="mt-20">
      <h1 className="text-4xl text-center text-1 font-bold text-indigo-950">
        Top Categories
      </h1>
      <div className="flex flex-col lg:flex-row justify-center items-center mt-10">
        {topProducts.map((item, index) => (
          <Image
            key={index}
            src={item.url}
            alt="top-categories-img"
            width={269}
            height={345}
            className="cursor-pointer"
          />
        ))}
      </div>
      <div className="flex justify-center items-center mt-10">
        <Image
          src={"/topProduct/pagination.png"}
          alt="pagination"
          width={46}
          height={12}
        />
      </div>
      <div className="bg-[url('/topProduct/subscribe-img.png')] bg-cover bg-center h-64 w-full mt-10"></div>
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

export default TopCategories;
