import { imageStorage } from "@/firebase/firebase";
import styled from "@emotion/styled";
import { CloudUpload } from "@mui/icons-material";
import { Button, Grid, TextField } from "@mui/material";
import imageCompression from "browser-image-compression";
import { ref, uploadBytes } from "firebase/storage";
import { useState } from "react";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export enum ImageType {
  user = "User",
  product = "Product",
  productCategory = "Product Category",
  deal = "Deal",
}

export function getImageType(type: string) {}

function FirebaseImageUploadComponent({ type }: { type?: ImageType }) {
  const [product, setProduct] = useState("");

  async function handleImageUpload(e: any) {
    const imageFiles = e.files;

    const option = {
      maxSizeMB: 1,
      useWebWorker: true,
    };

    const option1 = { ...option, maxWidthOrHeight: 240 };
    const option2 = { ...option, maxWidthOrHeight: 480 };
    const option3 = { ...option, maxWidthOrHeight: 720 };
    const option4 = { ...option, maxWidthOrHeight: 1080 };

    Array.from(imageFiles).forEach(async (imageFile: any) => {
      try {
        let compressedFile240 = imageCompression(imageFile, option1);
        let compressedFile480 = imageCompression(imageFile, option2);
        let compressedFile720 = imageCompression(imageFile, option3);
        let compressedFile1080 = imageCompression(imageFile, option4);

        const [file240, file480, file720, file1080] = await Promise.all([
          compressedFile240,
          compressedFile480,
          compressedFile720,
          compressedFile1080,
        ]);

        const storage240Ref = ref(
          imageStorage,
          `images/${type || "product"}/240p/${product + imageFile.name}`
        );
        const storage480Ref = ref(
          imageStorage,
          `images/${type || "product"}/480p/${product + imageFile.name}`
        );
        const storage720Ref = ref(
          imageStorage,
          `images/${type || "product"}/720p/${product + imageFile.name}`
        );
        const storage1080Ref = ref(
          imageStorage,
          `images/${type || "product"}/1080p/${product + imageFile.name}`
        );

        Promise.all([
          uploadBytes(storage240Ref, file240),
          uploadBytes(storage480Ref, file480),
          uploadBytes(storage720Ref, file720),
          uploadBytes(storage1080Ref, file1080),
        ])
          .then(() => {
            console.log("Upload completed");
          })
          .catch((error) => {
            console.log(error.message);
          });
      } catch (error) {
        console.log(error);
        return;
      }
    });
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <TextField
          placeholder="Product Id"
          fullWidth
          value={product}
          onChange={({ target }) => setProduct(target.value)}
        />
      </Grid>
      <Grid item xs={6} display={"flex"} alignItems={"center"}>
        <Button
          fullWidth
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          startIcon={<CloudUpload />}
          sx={{ height: "100%" }}
        >
          Upload file
          <VisuallyHiddenInput
            type="file"
            accept="image/*"
            multiple
            onChange={({ target }) => handleImageUpload(target)}
          />
        </Button>
      </Grid>
    </Grid>
  );
}

export default FirebaseImageUploadComponent;
