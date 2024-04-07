export enum Breakpoints {
  small = "small",
  large = "large",
  smallOther = "smallOther",
}

const carouselBreakPoints = {
  large: {
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
  },
  small: {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
      slidesToSlide: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1280 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1200, min: 600 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  },
  smallOther: {
    tablet: {
      breakpoint: { max: 1200, min: 600 },
      items: 3.5,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2.75,
      slidesToSlide: 1,
    },
  },
};

export default carouselBreakPoints;

export function getBreakpoint(type: Breakpoints): any {
  switch (type) {
    case Breakpoints.small:
      return carouselBreakPoints.small;
    case Breakpoints.large:
      return carouselBreakPoints.large;
    case Breakpoints.smallOther:
      return carouselBreakPoints.smallOther;
  }
}
