import { AdvancedImage } from "@cloudinary/react";
import { CloudinaryImage } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { Box, BoxProps, SxProps, Theme } from "@mui/material";

import { responsive } from "@cloudinary/react";
import { byRadius } from "@cloudinary/url-gen/actions/roundCorners";

interface ImageFromCloudinaryProps extends BoxProps {
  publicId: string;
  qualityWidth: number | string;
  borderRadius: number;
}

function ImageFromCloudinary(props: ImageFromCloudinaryProps) {
  const { publicId, qualityWidth, borderRadius } = props;
  const image = new CloudinaryImage(publicId, {
    cloudName: "dov9kdlci",
  })
    .resize(fill().width(qualityWidth).height(qualityWidth))
    .roundCorners(byRadius(borderRadius));

  return (
    <Box {...props}>
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
