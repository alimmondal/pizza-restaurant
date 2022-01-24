import styles from "../styles/Slider.module.css"

import { React, useEffect, useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import ShopNowBtn from "./ShopNowBtn";
// import { Link } from "react-router-dom";
import pizzaMan1 from '../public/img/pizzaMan1.png'
import pizzaMan2 from '../public/img/pizzaMan2.png'
import pizzaMan3 from '../public/img/pizzaMan3.png'
import pizzaMan4 from '../public/img/pizzaMan5.png'
import Image from "next/image";

const Slider = () => {
  const SliderData = [
    {
      title: "The Best Pizza",
      subtitle: "Quality Matters.",
      img: pizzaMan1,
    },
    {
      title: "Find The Best",
      subtitle: "With 30% Off",
      img: pizzaMan4,
    },
    {
      title: "Best Breakfast",
      subtitle: "Comfort For long day",
      img: pizzaMan2,
    },
    {
      title: "Best Seasoned",
      subtitle: "Enjoy your summer.",
      img: pizzaMan3,
    },
  ];

  const [current, setCurrent] = useState(0);
  const length = SliderData.length;
  const [auto, setauto] = useState(true);

  const intervaltime = 6000;
  let slideinterval;
  const nextslide = () => {
    clearInterval(slideinterval);
    slideinterval = setInterval(nextslide, intervaltime);
    setTimeout(() => setCurrent(current === length - 1 ? 0 : current + 1));
  };

  const prevslide = () => {
    clearInterval(slideinterval);
    slideinterval = setInterval(nextslide, intervaltime);
    setTimeout(() => setCurrent(current === 0 ? length - 1 : current - 1));
  };

  useEffect(() => {
    setauto(true);
    if (auto) {
      slideinterval = setInterval(nextslide, intervaltime);
    }
    return () => {
      setauto(false);
      clearInterval(slideinterval);
    };
  });

  return (
    <div className="slider">
      {SliderData.map((slide, index) => {
        return (
          <div
            key={index}
            className={index === current ? "slide current" : "slide"}
          >
            <div className="slideContent">
              <h1 className="titleslider">{slide.title}</h1>
              <h3 className="subtitleslider">{slide.subtitle}</h3>
              {/* <div className="content">
                {" "}
                <ShopNowBtn />
              </div> */}
            </div>
            <div className="imgContainer">
              <Image src={slide.img} layout="fill" alt="" />
            </div>

            <div className="content">
              {" "}
              <ShopNowBtn />
            </div>
          </div>
        );
      })}
      <IoIosArrowForward className="next" size="32" onClick={nextslide} />
      <IoIosArrowBack className="prev" size="32" onClick={prevslide} />
    </div>
  );
};

export default Slider;
