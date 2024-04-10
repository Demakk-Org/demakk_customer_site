import { Box, Button, Divider, Typography } from "@mui/material";
import { useState } from "react";

interface SelecButtonProps {
  icon?: JSX.Element;
  name: string;
  subList?: {
    title: string;
    list: string[];
  };
}

function SelectBotton({ icon, name, subList }: SelecButtonProps) {
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
        startIcon={icon}
        sx={{
          color: "text.primary",
          display: "flex",
          alignItems: "center",
          textTransform: "capitalize",
          p: "0.5rem 1.5rem",
          justifyContent: "flex-start",
          textAlign: "left",
          "&:hover": {
            bgcolor: "action.hover",
          },
        }}
      >
        {name}
      </Button>
      {subList && openList && (
        <Box
          position={"absolute"}
          left={"100%"}
          top={0}
          bgcolor={"background.lightOpaque"}
          minWidth={250}
          p={"1rem 0"}
          borderRadius={"0 1.5rem 1.5rem 1.5rem"}
        >
          <Typography
            pl={"1rem"}
            fontSize={"1.1rem"}
            fontWeight={"bold"}
            color={"text.primary"}
          >
            {subList?.title}
          </Typography>
          <Divider
            flexItem
            sx={{ m: "0.5rem 0", borderColor: "bright.main" }}
          />
          {subList.list.map((list) => (
            <Button
              key={list}
              fullWidth
              sx={{
                textTransform: "capitalize",
                display: "flex",
                textAlign: "left",
                justifyContent: "flex-start",
                color: "text.primary",
                p: "0.5rem 1rem",
                "&:hover": {
                  bgcolor: "action.hover",
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
