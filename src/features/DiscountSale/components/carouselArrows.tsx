import "react-multi-carousel/lib/styles.css";
interface RightArrowProps {
  onClick: () => void;
  rest: any;
}

const RightArrow = ({ onClick, rest }: RightArrowProps) => {
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
