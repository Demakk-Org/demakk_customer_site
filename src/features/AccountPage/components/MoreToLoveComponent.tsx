import { GetProductForCard } from "@/model/productModel";
import { Grid, Stack, Typography } from "@mui/material";
import { useTranslation } from "next-i18next";

function MoreToLoveComponent({
  relatedProducts,
}: {
  relatedProducts?: GetProductForCard;
}) {
  const { t } = useTranslation("saleTerms");
  return (
    <Stack p={2} width={1} spacing={2} bgcolor={"background.light"}>
      <Stack>
        <Typography
          fontSize={"1.5rem"}
          color={"text.primary"}
          fontWeight={"bold"}
        >
          {t("moreToLove", {
            ns: "saleTerms",
          })}
        </Typography>
      </Stack>

      <Stack>
        <Grid container spacing={2}>
          {Array(5)
            .fill("product-list")
            .map((product, index) => {
              return (
                <Grid item key={index} xs={6} sm={4} md={3} lg={2.4}>
                  <Stack
                    width={"100%"}
                    minHeight={"100px"}
                    border={"1px solid white"}
                    borderRadius={2}
                  >
                    {/* Product Card Component */}
                  </Stack>
                </Grid>
              );
            })}
        </Grid>
      </Stack>
    </Stack>
  );
}

export default MoreToLoveComponent;
