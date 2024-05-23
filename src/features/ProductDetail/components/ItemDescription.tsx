import { Button, Collapse, Stack, Typography } from "@mui/material";
import useProductStore from "@/store/product";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

export default function ItemDescription() {
  const { product } = useProductStore();

  const [expand, setExpand] = useState(false);

  const handleToggle = () => {
    setExpand(!expand);
  };

  return (
    <Stack direction={"row"} width={1}>
      <Collapse
        in={expand}
        collapsedSize={30}
        sx={{ display: { xs: "block", sm: "none" } }}
      >
        <Typography
          className="product-title"
          sx={{
            m: { xs: ".5rem", sm: ".5rem 0" },
            lineHeight: 1.25,
            color: "text.primary",
            // whiteSpace: { xs: "nowrap", sm: "normal" },
            // textOverflow: { xs: "ellipsis", sm: "normal" },
            // overflow: { xs: "hidden", sm: "visible" },
          }}
        >
          {product?.getProductForPage().description}
        </Typography>
      </Collapse>
      <Button
        onClick={handleToggle}
        sx={{ display: { xs: "block", sm: "none" } }}
      >
        {expand ? "less" : <ExpandMoreIcon />}
      </Button>
      <Typography
        sx={{
          display: { xs: "none", sm: "block" },
          m: { xs: ".5rem", sm: ".5rem 0" },
          lineHeight: 1.25,
          color: "text.primary",
          // whiteSpace: { xs: "nowrap", sm: "normal" },
          // textOverflow: { xs: "ellipsis", sm: "normal" },
          // overflow: { xs: "hidden", sm: "visible" },
        }}
      >
        {product?.getProductForPage().description}
      </Typography>
    </Stack>
  );
}
