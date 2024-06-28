import Carousel from "react-multi-carousel";
import carouselBreakPoints, {
  Breakpoints,
  getBreakpoint,
} from "@/data/carouselBreakPoints";
import "react-multi-carousel/lib/styles.css";
import React, { ReactNode, useState } from "react";
import "../styles/Home.module.css";
import { Typography } from "@mui/material";

interface CarouselContainerProps {
  children: ReactNode;
  type: Breakpoints;
  animate?: boolean;
  infinite?: boolean;
  currentSlide: number;
  setCurrentSlide: Function;
}

function CarouselContainer({
  children,
  type,
  animate,
  infinite,
  setCurrentSlide,
  currentSlide,
}: CarouselContainerProps) {
  const handleSlideChange = (nextSlide: number) => {
    setCurrentSlide(nextSlide);
  };

  return (
    <Carousel
      swipeable={true}
      draggable={true}
      showDots={false}
      responsive={getBreakpoint(type)}
      ssr={false}
      infinite={infinite}
      autoPlay={animate}
      autoPlaySpeed={3000}
      customTransition="react-multi-carousel-track "
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item"
      afterChange={handleSlideChange}
    >
      {children}
    </Carousel>
  );
}

export default CarouselContainer;
