import { Box, Typography, Grid } from "@mui/material";

import getLanguage from "@/utils/getLanguage";
import useUserStore from "@/store/user";

function DealInFullHeight() {
  const { lang } = useUserStore();
  return (
    <Box
      display={{ xs: "none", sm: "flex" }}
      flexDirection={"column"}
      height={1}
      p={"1.5rem"}
      bgcolor={"action.hover"}
      borderRadius={"1rem"}
    >
      <Typography
        fontSize={"1.5rem"}
        fontWeight={"bold"}
        color={"primary.main"}
      >
        {getLanguage("welcomeDeal", lang)}
      </Typography>
      <Typography fontSize={"1.1rem"} mb={3} color={"text.primary"}>
        {getLanguage("yourExclusivePrice", lang)}
      </Typography>
      <Box
        flex={1}
        p={2}
        borderRadius={"1rem"}
        bgcolor={"bright.main"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <Box width={0.7} position={"relative"}>
          <Box
            width={1}
            component={"img"}
            src="/assets/images/product12.webp"
            sx={{ aspectRatio: 1, borderRadius: "1rem" }}
          />
          <Box
            width={0.65}
            display={"flex"}
            justifyContent={"flex-start"}
            alignItems={"flex-end"}
            gap={"0.5rem"}
          >
            <Typography
              fontSize={"0.8rem"}
              fontWeight={"bold"}
              color={"text.price"}
              sx={{ textWrap: "nowrap" }}
            >
              US $
              <Typography component={"span"} fontSize={"1.2rem"}>
                18
              </Typography>
              .55
            </Typography>
            <Typography
              noWrap
              textOverflow={"ellipsis"}
              fontSize={"0.9rem"}
              color={"text.teritiary"}
              sx={{ textDecoration: "line-through" }}
            >
              US $34.56
            </Typography>
          </Box>
          <Box
            position={"absolute"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            top={"70%"}
            left={"65%"}
            border={"none"}
            width={"50%"}
            sx={{
              aspectRatio: 1,
              backgroundImage: "url(/assets/images/discountTag.webp)",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPositionY: "center",
            }}
          >
            <Typography
              fontSize={"2.5rem"}
              pr={"0.9rem"}
              pb={"0.5rem"}
              color={"bright.main"}
            >
              11
            </Typography>
          </Box>
        </Box>
        <Grid container width={1} mt={"0rem"} spacing={2}>
          <Grid item xs={6}>
            <Box width={1} display={"flex"} flexDirection={"column"} gap={1}>
              <Box
                border="1px solid black"
                component={"img"}
                borderRadius={"1rem"}
                width={1}
                sx={{ aspectRatio: 1, objectFit: "cover" }}
                src="/assets/images/product8.webp"
              />
              <Box
                display={"flex"}
                justifyContent={"flex-start"}
                alignItems={"flex-end"}
                gap={"0.5rem"}
              >
                <Typography
                  fontSize={"0.8rem"}
                  fontWeight={"bold"}
                  color={"text.price"}
                  sx={{ textWrap: "nowrap" }}
                >
                  US $
                  <Typography component={"span"} fontSize={"1.2rem"}>
                    18
                  </Typography>
                  .55
                </Typography>
                <Typography
                  noWrap
                  textOverflow={"ellipsis"}
                  fontSize={"0.9rem"}
                  color={"text.teritiary"}
                  sx={{ textDecoration: "line-through" }}
                >
                  US $34.56
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box width={1} display={"flex"} flexDirection={"column"} gap={1}>
              <Box
                border="1px solid lightgray"
                component={"img"}
                borderRadius={"1rem"}
                width={1}
                sx={{ aspectRatio: 1, objectFit: "cover" }}
                src="/assets/images/product.webp"
              />
              <Box
                display={"flex"}
                justifyContent={"flex-start"}
                alignItems={"flex-end"}
                gap={"0.5rem"}
              >
                <Typography
                  fontSize={"0.8rem"}
                  fontWeight={"bold"}
                  color={"text.price"}
                  sx={{ textWrap: "nowrap" }}
                >
                  US $
                  <Typography component={"span"} fontSize={"1.2rem"}>
                    18
                  </Typography>
                  .55
                </Typography>
                <Typography
                  noWrap
                  textOverflow={"ellipsis"}
                  fontSize={"0.9rem"}
                  color={"text.teritiary"}
                  sx={{ textDecoration: "line-through" }}
                >
                  US $34.56
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default DealInFullHeight;
