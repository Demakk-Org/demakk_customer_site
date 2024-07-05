import { Box } from "@mui/material";
import ReactLoading, { LoadingType } from "react-loading";
function Loading({ type }: { type?: LoadingType }) {
  return (
    <Box
      width={1}
      height={1}
      maxHeight={"100vh"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      zIndex={100000}
      position={"absolute"}
      top={0}
      left={0}
    >
      <ReactLoading type={type || "spin"} />
    </Box>
  );
}

export default Loading;
