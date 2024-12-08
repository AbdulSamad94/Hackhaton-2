import Image from "next/image";

const offer = [
  {
    name: "24/7 Support",
    img: "/offer/img-1.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
  },
  {
    name: "24/7 Support",
    img: "/offer/img-2.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
  },
  {
    name: "24/7 Support",
    img: "/offer/img-3.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
  },
  {
    name: "24/7 Support",
    img: "/offer/img-4.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
  },
];

const Offer = () => {
  return (
    <section className="mt-20">
      <h1 className="text-4xl text-center text-1 font-bold text-indigo-950">
        What Shopex Offers!
      </h1>
      <div className="flex gap-x-5 justify-center items-center lg:flex-row flex-col">
        {offer.map((item, index) => (
          <div
            className="w-[270px] h-[320px] shadow flex justify-center items-center flex-col p-6 cursor-pointer hover:scale-110 transition-all mt-10"
            key={index}
          >
            <Image src={item.img} alt={item.name} width={65} height={65} />
            <p className="text-1 font-semibold text-[22px] text-indigo-950 my-5">
              {item.name}
            </p>
            <p className="text-gray-400 font-bold text-center lato">
              {item.text}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-20 bg-slate-100 w-full h-auto flex justify-center items-center">
        <Image
          src={"/offer/unique.png"}
          alt="the-img"
          width={1050}
          height={550}
          className="w-auto h-auto"
        />
      </div>
    </section>
  );
};

export default Offer;
