import { AdvancedImage } from "@cloudinary/react";
import { CloudinaryImage } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { Box } from "@mui/material";

import {
  lazyload,
  accessibility,
  responsive,
  placeholder,
} from "@cloudinary/react";

function ImageFromCloudinary({
  publicId,
  width,
  height,
}: {
  publicId: string;
  width: number | string;
  height: number | string;
}) {
  const image = new CloudinaryImage(publicId, {
    cloudName: "dov9kdlci",
  }).resize(fill().width(150).height(150));

  return (
    <Box
      width={width}
      height={height}
      // sx={{
      //   aspectRatio: 1,
      // }}
    >
      <AdvancedImage
        cldImg={image}
        width={"inherit"}
        height={"inherit"}
        plugins={[responsive()]}
      />
    </Box>
  );
}

export default ImageFromCloudinary;
