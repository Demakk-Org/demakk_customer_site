import Carousel from "react-multi-carousel";
import carouselBreakPoints from "@/data/carouselBreakPoints";
import "react-multi-carousel/lib/styles.css";

function CarouselContainer({ children, type, restprops }) {
  return (
    <Carousel
      {...restprops}
      swipeable={false}
      draggable={true}
      showDots={false}
      responsive={carouselBreakPoints[type]}
      ssr={true}
      infinite={true}
      autoPlay={true}
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
