import React, { useState } from "react";
import Box from "@mui/material/Box";
import CarouselContainer from "@/component/CarouselContainer";
import { Breakpoints } from "@/data/carouselBreakPoints";
import { Stack, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ImageFromFirebase from "@/component/ImageFromFirebase";
import { GetProductForPage, IProductForPage } from "@/model/productModel";

interface ItemImageProps {
  previewImage: string;
  setPreviewImage: Function;
  product: GetProductForPage | null;
}

const ProductItemImages = ({
  previewImage,
  setPreviewImage,
  product,
}: ItemImageProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isCarouselImageSelected, setIsCarouselImageSelected] = useState(0);

  const [zoomWidth, setZoomWidth] = useState<number | null>(null);
  const [imgPosition, setImgPosition] = useState({ top: 0, left: 0 });

  const handleMouseEnter = () => {
    setZoomWidth(150);
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

  React.useEffect(() => {
    handleMouseEnter;
  }, []);

  function handleCarouselImageSelection(image: string, index: any) {
    setPreviewImage(image);
    setIsCarouselImageSelected(index);
  }

  return (
    <Box width={1}>
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
        sx={{ aspectRatio: 1, mb: "1rem" }}
      >
        <Box
          width={zoomWidth ? `${zoomWidth}%` : "100%"}
          height={zoomWidth ? `${zoomWidth}%` : "100%"}
          className="imgElem"
          position={"absolute"}
          display={"block"}
          sx={{
            top: `${imgPosition.top}px`,
            left: `${imgPosition.left}px`,
            "&:hover": {
              cursor: "pointer",
            },
          }}
        >
          <ImageFromFirebase
            name={
              previewImage ||
              (product?.images.imageUrls[product.images.primary] ?? "")
            }
            width={1}
            quality={"720p"}
            borderRadius={"1rem"}
          />
        </Box>

        <Box
          position={"absolute"}
          width={1}
          height={1}
          top={0}
          left={0}
          sx={{ bgcolor: "background.productBg" }}
        ></Box>
      </Box>

      <Box position={"relative"} width={1}>
        {product?.getProductForPage().images.imageUrls && (
          <CarouselContainer
            type={Breakpoints.productItemImagesCarousel}
            currentSlide={currentSlide}
            setCurrentSlide={setCurrentSlide}
          >
            {product?.images.imageUrls.map((image, index) => {
              return (
                <Box
                  width={1}
                  key={index}
                  position={"relative"}
                  // onMouseEnter={() => setPreviewImage(image)}
                  onMouseEnter={() =>
                    handleCarouselImageSelection(image, index)
                  }
                  sx={{
                    border:
                      isCarouselImageSelected === index
                        ? "1px solid black"
                        : "none",
                    borderRadius:
                      isCarouselImageSelected === index ? "4px" : "none",

                    aspectRatio: 1,
                  }}
                >
                  <ImageFromFirebase
                    name={image}
                    width={1}
                    borderRadius={".5rem"}
                  />

                  <Box
                    position={"absolute"}
                    width={1}
                    height={1}
                    top={0}
                    left={0}
                    sx={{
                      bgcolor: "background.productBg",
                      borderRadius: ".5rem",
                    }}
                  ></Box>
                </Box>
              );
            })}
          </CarouselContainer>
        )}
        <Box display={{ sm: "none" }} top={0} left={0} width={1} height={1}>
          <Box
            position={"absolute"}
            top="10px"
            left="10px"
            sx={{ bgcolor: "background.transparent", borderRadius: "16px" }}
          >
            <Typography
              color={"text.primary"}
              p={"4px 16px"}
              fontSize={".8rem"}
            >
              beautiful (5 answers)
            </Typography>
          </Box>
          <Stack
            position={"absolute"}
            direction={"row"}
            spacing={2}
            bottom="30px"
            left="10px"
          >
            <Typography
              color={"text.primary"}
              p={"4px 16px"}
              fontSize={".8rem"}
              sx={{
                bgcolor: "background.transparent",
                borderRadius: "16px",
              }}
            >
              {Math.floor(currentSlide + 1)}/{product?.images.imageUrls.length}
            </Typography>
            <Typography
              color={"text.primary"}
              p={"4px 16px"}
              fontSize={".8rem"}
              sx={{
                bgcolor: "background.transparent",
                borderRadius: "16px",
              }}
            >
              gray
            </Typography>
          </Stack>
          <Stack
            position={"absolute"}
            alignItems={"center"}
            spacing={".3rem"}
            direction={"row"}
            p={"4px 8px"}
            sx={{
              bgcolor: "background.transparent",
              borderRadius: "16px",
              bottom: "30px",
              right: "10px",
            }}
          >
            <FavoriteBorderIcon
              sx={{ color: "text.primary", fontSize: "18px" }}
            />
            <Typography color={"text.primary"} fontSize={".8rem"}>
              2415
            </Typography>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductItemImages;
