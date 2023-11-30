import { useState } from "react";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    "https://images.unsplash.com/photo-1576748872293-f4972ceda096?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1526178613552-2b45c6c302f0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1534349735944-2b3a6f7a268f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1572584642822-6f8de0243c93?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  const prevSlide = () => {
    setCurrentSlide(currentSlide == 0 ? 3 : (prevValue) => prevValue - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide == 3 ? 0 : (prevValue) => prevValue + 1);
  };
  return (
    <div className="w-full h-screen overflow-x-hidden">
      <div className="w-screen h-[650px] relative">
        <div
          style={{
            transform: `translateX(-${currentSlide * 100}vw )`,
          }}
          className="h-full w-[400vw] flex  transition-transform duration-1000"
        >
          <img
            className="h-full object-cover w-full"
            loading="priority"
            src={data[0]}
            style={{
              WebkitMaskImage:
                "linear-gradient(to top, transparent, rgba(0, 0, 0, 1))",
            }}
            alt=""
          />
          <img
            className="h-full object-fill w-full"
            loading="priority"
            src={data[1]}
            style={{
              WebkitMaskImage:
                "linear-gradient(to top, transparent, rgba(0, 0, 0, 1))",
            }}
            alt=""
          />
          <img
            className="h-full object-fill w-full"
            loading="priority"
            src={data[2]}
            style={{
              WebkitMaskImage:
                "linear-gradient(to top, transparent, rgba(0, 0, 0, 1))",
            }}
            alt=""
          />
          <img
            className="h-full object-fill w-full"
            loading="priority"
            src={data[3]}
            style={{
              WebkitMaskImage:
                "linear-gradient(to top, transparent, rgba(0, 0, 0, 1))",
            }}
            alt=""
          />
        </div>
        <div className="absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-44">
          <div
            onClick={prevSlide}
            className="w-14 h-12 border-[1px] border-gray-700 flex  items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
          >
            <HiArrowLeft />
          </div>
          <div
            onClick={nextSlide}
            className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
          >
            <HiArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
