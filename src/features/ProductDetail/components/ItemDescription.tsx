import { Collapse, Container, Stack, Typography } from "@mui/material";
import useProductStore from "@/store/product";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { useState } from "react";

export default function ItemDescription() {
  const { product } = useProductStore();

  const [expand, setExpand] = useState(false);

  const handleToggle = () => {
    setExpand(!expand);
  };

  return (
    <>
      <Container
        sx={{ padding: "0 .75rem", display: { xs: "block", sm: "none" } }}
      >
        <Stack direction={"row"} width={1}>
          <Collapse
            in={expand}
            collapsedSize={20}
            sx={{ display: { xs: "block", sm: "none" } }}
          >
            <Typography
              fontSize={".85rem"}
              // className="product-title"
              sx={{
                // lineHeight: 1.25,
                color: "text.primary",
              }}
            >
              {product?.getProductForPage().description}
            </Typography>
          </Collapse>

          {!expand ? (
            <ExpandMoreIcon
              onClick={handleToggle}
              sx={{ display: { xs: "block", sm: "none" } }}
            />
          ) : (
            <ArrowUpwardIcon
              onClick={handleToggle}
              fontSize="small"
              sx={{ display: { xs: "block", sm: "none" } }}
            />
          )}

          <Typography
            sx={{
              display: { xs: "none", sm: "block" },
              lineHeight: 1.25,
              color: "text.primary",
            }}
          >
            {product?.getProductForPage().description}
          </Typography>
        </Stack>
      </Container>
      <Typography
        sx={{
          display: { xs: "none", sm: "block" },

          lineHeight: 1.25,
          color: "text.primary",
        }}
      >
        {product?.getProductForPage().description}
      </Typography>
    </>
  );
}
