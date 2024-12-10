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
      <div className="mt-20 bg-slate-100 w-full h-auto flex justify-center items-center lg:flex-row flex-col py-10">
        <Image
          src={"/offer/main-img.png"}
          alt="the-img"
          width={1050}
          height={550}
          className="w-auto h-auto"
        />
        <div className="lg:w-[40%] w-full px-3">
          <div>
            <h1 className="text-1 lg:text-4xl text-2xl text-indigo-900 font-bold leading-relaxed">
              Unique Features Of leatest & Trending Poducts
            </h1>
            <div className="flex gap-x-3 lato items-center mt-8">
              <div className="bg-pink-500 w-3 h-3 rounded-full"></div>
              <p className="text-gray-400 font-medium">
                All frames constructed with hardwood solids and laminates
              </p>
            </div>
            <div className="flex lato items-center mt-4 gap-x-3">
              <div className="bg-blue-800 w-3 h-3 rounded-full"></div>
              <p className="text-gray-400 font-medium w-[90%] md:w-auto">
                Reinforced with double wood dowels, glue, screw - nails corner
                blocks and machine nails
              </p>
            </div>
            <div className="flex gap-x-3 lato items-center mt-4">
              <div className="bg-green-500 w-3 h-3 rounded-full"></div>
              <p className="text-gray-400 font-medium">
                Arms, backs and seats are structurally reinforced
              </p>
            </div>
            <div className="flex items-center gap-x-3">
              <p className="text-1 text-white flex justify-center items-center font-bold px-7 py-3 bg-pink-600 mt-6">
                Add to Cart
              </p>
              <div className="text-1 text-indigo-900 flex flex-col mt-7">
                <p className="font-bold text-sm">B&B Italian Sofa</p>
                <p className="text-sm">$32.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
