import { imageStorage } from "@/firebase/firebase";
import { Avatar } from "@mui/material";
import { getDownloadURL, ref } from "firebase/storage";
import { useEffect, useState } from "react";

function ImageFromFirebase({
  width,
  name,
  quality,
}: {
  width: number | string;
  name: string;
  quality?: "240p" | "480p" | "720p" | "1080p";
}) {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    if (!name) {
      setImageUrl("/assets/images/profile.webp");
      return;
    }

    const storageRef = ref(imageStorage, `images/${quality || "480p"}/${name}`);
    getDownloadURL(storageRef)
      .then((downloadURL) => {
        setImageUrl(downloadURL);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [name, quality]);

  return (
  
    <Avatar
      variant={"rounded"}
      sx={{ width, aspectRatio: 1, height: "auto" }}
      src={imageUrl}
    />
  );
}

export default ImageFromFirebase;
