const carouselBreakPoints = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
    slidesToSlide: 2,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1280 },
    items: 2,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1200, min: 600 },
    items: 3.25,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3.25,
    slidesToSlide: 1,
  },
};

export default carouselBreakPoints;
