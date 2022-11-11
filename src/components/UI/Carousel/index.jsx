import { useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import cls from "./Carousel.module.scss";

import { LeftArrow, RightArrow } from "../Icons";

const Carousel = ({ images = [] }) => {
  const CarouselRef = useRef();

  return (
    <div className={cls.carousel}>
      <Slider
        className={cls.carousel}
        dots={true}
        infinite={true}
        arrows={false}
        ref={CarouselRef}
        adaptiveHeight={true}
        customPaging={() => <span className={cls.carousel__dots}></span>}
        appendDots={(dots) => (
          <span className={cls.carousel__controls}>
            <button
              className={cls.carousel__arrows}
              onClick={() => CarouselRef?.current?.slickPrev()}
            >
              <LeftArrow />
            </button>
            <ul className={cls.carousel__dotsList}>{dots}</ul>
            <button
              className={cls.carousel__arrows}
              onClick={() => CarouselRef?.current?.slickNext()}
            >
              <RightArrow />
            </button>
          </span>
        )}
      >
        {images.length > 0 &&
          images.map((image, index) => (
            <div key={index}>
              <Image
                src={image}
                layout="responsive"
                objectFit="cover"
                priority={true}
                placeholder="blur"
                alt={image}
              />
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default Carousel;
