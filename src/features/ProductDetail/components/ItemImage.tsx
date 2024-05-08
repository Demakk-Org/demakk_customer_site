import React, { useState } from "react";
import Box from "@mui/material/Box";
import useProductStore from "@/store/product";
import CarouselContainer from "@/component/CarouselContainer";
import { Breakpoints } from "@/data/carouselBreakPoints";

interface ColredImageProps {
  singleItemImages: string;
  setMainImage: Function;
}

const ItemImage = ({ singleItemImages, setMainImage }: ColredImageProps) => {
  const { product } = useProductStore();

  // const [singleItemImages, setMainImage] = useState("");

  const [zoomWidth, setZoomWidth] = useState<number | null>(null);
  const [imgPosition, setImgPosition] = useState({ top: 0, left: 0 });

  const handleMouseEnter = () => {
    setZoomWidth(200);
  };

  const handleMouseLeave = () => {
    setZoomWidth(null);
    setImgPosition({ top: 0, left: 0 });
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const imgContElem = event.currentTarget;
    const imgElem = imgContElem.querySelector(".imgElem");

    if (imgElem) {
      const imgWidth = imgElem.clientWidth;
      const imgHeight = imgElem.clientHeight;

      const objLeft = imgContElem.offsetLeft;
      const objTop = imgContElem.offsetTop;

      const xpos = event.clientX - objLeft;
      const ypos = event.clientY - objTop;

      const newImgPosition = {
        top: -(
          ((imgHeight - imgContElem.clientHeight) * ypos) /
          imgContElem.clientHeight
        ),
        left: -(
          ((imgWidth - imgContElem.clientWidth) * xpos) /
          imgContElem.clientWidth
        ),
      };

      setImgPosition(newImgPosition);
    }
  };

  const changeHeight = () => {
    const imgContElem = document.querySelector(".img-cont");

    // if (imgContElem) {
    //   imgContElem.height = imgContElem.clientHeight + 'px';
    // }
  };

  React.useEffect(() => {
    changeHeight();
    window.addEventListener("resize", changeHeight);
    return () => {
      window.removeEventListener("resize", changeHeight);
    };
  }, []);

  return (
    <>
      <Box
        className="img-cont"
        width={1}
        position="relative"
        display={{ xs: "none", sm: "grid" }}
        overflow={"hidden"}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        borderRadius={".5rem"}
        sx={{ aspectRatio: 1, mb: "2rem" }}
      >
        <Box
          component={"img"}
          className="imgElem"
          position={"absolute"}
          width={1}
          display={"block"}
          src={
            singleItemImages ||
            product?.images.imageUrls[product.images.primary]
          }
          alt={"image of the product"}
          sx={{
            width: zoomWidth ? `${zoomWidth}%` : "100%",
            position: "relative",
            top: `${imgPosition.top}px`,
            left: `${imgPosition.left}px`,
            "&:hover": {
              cursor: "pointer",
            },
          }}
        />

        <Box
          position={"absolute"}
          width={1}
          height={1}
          top={0}
          left={0}
          sx={{ bgcolor: "background.productBg" }}
        ></Box>
      </Box>

      <Box width={1} minHeight={"100px"} maxWidth={"400px"} mt={"1rem"}>
        {product?.getProductForCard().images._id && (
          <CarouselContainer type={Breakpoints.productItemImagesCarousel}>
            {product?.images.imageUrls.map((singleItemImages) => (
              <Box
                component="img"
                key={singleItemImages}
                src={singleItemImages}
                width={1}
                sx={{
                  "&:hover": {
                    border: ".1rem solid black",
                  },
                  aspectRatio: 1,
                  objectFit: "contain",
                }}
                onMouseEnter={() => setMainImage(singleItemImages)}
              />
            ))}
          </CarouselContainer>
        )}
      </Box>
    </>
  );
};

export default ItemImage;
