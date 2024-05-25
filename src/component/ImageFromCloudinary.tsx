import { AdvancedImage } from "@cloudinary/react";
import { CloudinaryImage } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";

function ImageFromCloudinary({
  publicId,
  width,
}: {
  publicId: string;
  width: string;
}) {
  const image = new CloudinaryImage(publicId, {
    cloudName: "dov9kdlci",
  }).resize(fill().width(150));

  return <AdvancedImage cldImg={image} width={width} height={width} />;
}

export default ImageFromCloudinary;
