import React, { useState } from "react";

const MyCarousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePreviousClick = () => {
    const newIndex = currentIndex - 1;
    setCurrentIndex(newIndex < 0 ? items.length - 1 : newIndex);
  };

  const handleNextClick = () => {
    const newIndex = currentIndex + 1;
    setCurrentIndex(newIndex === items.length ? 0 : newIndex);
  };
  const goIndex = (index) => {
    setCurrentIndex(index);
  };

  const { image, title, desc } = items[currentIndex];

  return (
    <div className="md:flex m-5 px-[80px] min-h-[50vh] bg-cover bg-cTextDark w-[70wh] justify-center relative rounded-xl p-5">
      <img
        className="block md:flex w-[500px] h-[380px] rounded-2xl  ml-5	"
        src={image}
        alt={title}
      />
      <div className="m-5 p-2 min-w-[200px]">
        <h2 className="text-white text-2xl">{title}</h2>
        <p className="text-white text-xl">{desc}</p>
      </div>

      <button
        className="absolute top-[50%] -translate-x-0 translate-y[-50%] left-0  bg-cDarkGrey rounded-full text-3xl text-white px-2 m-2"
        onClick={handlePreviousClick}
      >
        <i className=" fa-solid fa-caret-left"></i>
      </button>
      <button
        className="absolute top-[50%] -translate-x-0 translate-y[-50%] right-0  bg-cDarkGrey rounded-full text-3xl text-white px-2 m-2"
        onClick={handleNextClick}
      >
        <i className=" fa-solid fa-caret-right"></i>
      </button>
      <div className="absolute bottom-0 ">
        {items.map((item, index) => {
          return (
            <button
              className="m-1 hover:pointer"
              onClick={() => {
                goIndex(index);
              }}
            >
              <i className=" text-white text-xs hover:pointer fa-solid fa-circle"></i>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default MyCarousel;
