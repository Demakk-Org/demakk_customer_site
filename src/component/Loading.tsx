import { Box } from "@mui/material";
import { useEffect } from "react";
import ReactLoading, { LoadingType } from "react-loading";
function Loading({
  loadingType,
  windowMode,
}: {
  loadingType?: LoadingType;
  windowMode?: boolean;
}) {
  let scrollTop;

  useEffect(() => {
    scrollTop = window?.scrollY;
  }, []);
  return (
    <Box
      width={1}
      height={1}
      maxHeight={windowMode ? "unset" : "100vh"}
      minHeight={windowMode ? "350px" : "100vh"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      zIndex={100000}
      position={windowMode ? "relative" : "absolute"}
      top={scrollTop || 0}
      left={0}
      bgcolor={"background.light"}
    >
      <ReactLoading type={loadingType || "spin"} />
    </Box>
  );
}

export default Loading;
