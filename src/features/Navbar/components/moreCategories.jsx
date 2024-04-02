import { Box } from "@mui/material";
import SelectBotton from "./selectButton";

function MoreCategories() {
  return (
    <Box
      id="more-product-container"
      position={"absolute"}
      width={"auto"}
      minWidth={200}
      top={"100%"}
      left={0}
      pt={"0.5rem"}
      zIndex={1000}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        bgcolor={"background.lightOpaque"}
        width={"max-content"}
        borderRadius={"1.5rem"}
        overflow={"hidden"}
      >
        <SelectBotton name={"Home Improvement & Lighting"} />
        <SelectBotton name={"Men's Clothing"} />
        <SelectBotton name={"Furniture"} />
        <SelectBotton name={"Accessories"} />
        <SelectBotton name={"Hair Extainsions and Wigs"} />
        <SelectBotton name={"Automotive and Motorcycles"} />
      </Box>
      <Box
        id={"after-container"}
        sx={{
          position: "absolute",
          width: "12px",
          height: "12px",
          transform: "rotate(45deg)",
          left: "25%",
          top: 2,
          background: "secondaryBg.main",
        }}
      />
    </Box>
  );
}

export default MoreCategories;
