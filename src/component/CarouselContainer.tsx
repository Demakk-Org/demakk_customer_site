import Carousel from "react-multi-carousel";
import carouselBreakPoints, {
  Breakpoints,
  getBreakpoint,
} from "@/data/carouselBreakPoints";
import "react-multi-carousel/lib/styles.css";
import React, { ReactNode } from "react";

interface CarouselContainerProps {
  children: ReactNode;
  type: Breakpoints;
  animate?: boolean;
  infinite?: boolean;
}

function CarouselContainer({
  children,
  type,
  animate,
  infinite,
}: CarouselContainerProps) {
  return (
    <Carousel
      swipeable={false}
      draggable={true}
      showDots={false}
      responsive={getBreakpoint(type)}
      ssr={false}
      infinite={infinite}
      autoPlay={animate}
      autoPlaySpeed={3000}
      customTransition="all 0.5s"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {children}
    </Carousel>
  );
}

export default CarouselContainer;
