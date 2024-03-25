import "react-multi-carousel/lib/styles.css";

const RightArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;
  // onMove means if dragging or swiping in progress.
  return (
    <button {...rest} onClick={() => onClick()}>
      Right
    </button>
  );
};

export { RightArrow };
