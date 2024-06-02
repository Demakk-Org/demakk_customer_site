import { Box } from "@mui/material";
import ReactLoading, { LoadingType } from "react-loading";
function Loading({ type }: { type?: LoadingType }) {
  return (
    <Box
      width={1}
      height={1}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      zIndex={1}
      position={"relative"}
    >
      <ReactLoading type={type || "spin"} />
    </Box>
  );
}

export default Loading;
