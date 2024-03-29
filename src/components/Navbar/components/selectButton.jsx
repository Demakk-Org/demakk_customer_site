import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";

function SelectBotton({ icon, name, subList }) {
  const [openList, setOpenList] = useState(false);
  return (
    <Box
      width={"inherit"}
      minWidth={1}
      position={"relative"}
      onMouseOver={() => setOpenList(true)}
      onMouseLeave={() => setOpenList(false)}
    >
      <Button
        fullWidth
        color="dark"
        startIcon={icon}
        sx={{
          display: "flex",
          alignItems: "center",
          textTransform: "capitalize",
          p: "0.5rem 1.5rem",
          justifyContent: "flex-start",
          textAlign: "left",
          "&:hover": {
            bgcolor: "contrastBg.main",
          },
        }}
      >
        {name || "name here!"}
      </Button>
      {subList && openList && (
        <Box
          position={"absolute"}
          left={"100%"}
          top={0}
          bgcolor={"secondaryBg.main"}
          minWidth={250}
          p={"1rem 0"}
          borderRadius={"0 1.5rem 1.5rem 1.5rem"}
        >
          <Typography pl={"1rem"} fontWeight={"bold"}>
            {subList?.title}
          </Typography>
          {subList.list.map((list) => (
            <Button
              key={list}
              fullWidth
              color={"dark"}
              sx={{
                textTransform: "capitalize",
                display: "flex",
                textAlign: "left",
                justifyContent: "flex-start",
                p: "0.5rem 1rem",
                "&:hover": {
                  bgcolor: "contrastBg.main",
                },
              }}
            >
              {list}
            </Button>
          ))}
        </Box>
      )}
    </Box>
  );
}

export default SelectBotton;
