import { imageStorage } from "@/firebase/firebase";
import { Avatar } from "@mui/material";
import { getDownloadURL, ref } from "firebase/storage";
import { useEffect, useState } from "react";
import { ImageType } from "./FirebaseImageUploadComponent";

function ImageFromFirebase({
  width,
  name,
  quality,
  type,
  shape,
}: {
  width: number | string;
  name: string;
  quality?: "240p" | "480p" | "720p" | "1080p";
  type?: ImageType;
  shape?: "circular" | "rounded" | "square";
}) {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    if (!name) {
      setImageUrl("/assets/images/profile.webp");
      return;
    }

    const storageRef = ref(
      imageStorage,
      `images/${type ? type + "/" : ""}${quality || "480p"}/${name}`
    );

    getDownloadURL(storageRef)
      .then((downloadURL) => {
        setImageUrl(downloadURL);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [name, quality, type]);

  return (
    <Avatar
      variant={shape || "rounded"}
      sx={{ width, aspectRatio: 1, height: "auto" }}
      src={imageUrl}
    />
  );
}

export default ImageFromFirebase;
