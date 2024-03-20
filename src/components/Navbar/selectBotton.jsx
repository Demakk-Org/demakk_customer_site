import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";

function SelectBotton({ icon, name, subList }) {
  const [openList, setOpenList] = useState(false);
  return (
    <Box
      width={1}
      position={"relative"}
      onMouseOver={() => setOpenList(true)}
      onMouseLeave={() => setOpenList(false)}
    >
      <Button
        fullWidth
        color="dark"
        startIcon={icon || "icon here"}
        sx={{
          display: "flex",
          alignItems: "center",
          textTransform: "capitalize",
          p: "0.5rem 1.5rem",
          justifyContent: "flex-start",
          borderRadius: "1.5rem",
          textAlign: "left",
        }}
      >
        {name || "name here!"}
      </Button>
      {subList && openList && (
        <Box
          position={"absolute"}
          left={"100%"}
          top={0}
          bgcolor={"rgba(240,240,240,1)"}
          minWidth={250}
          p={"1rem"}
          borderRadius={"0 1.5rem 1.5rem 1.5rem"}
        >
          <Typography fontWeight={"bold"}>{subList?.title}</Typography>
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
                pl: "1rem",
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
