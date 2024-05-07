import { Stack, Typography } from "@mui/material";

interface ShippingChoiceProps {
  choice?: boolean;
  freeShippingPrice: number;
}

export default function ShippingChoice({
  choice,
  freeShippingPrice,
}: ShippingChoiceProps) {
  return (
    <>
      {freeShippingPrice ? (
        <Stack>
          <Typography
            sx={{
              ".choice": {
                minWidth: "max-content",
                p: "0rem .4rem ",
                fontSize: ".65rem",
                fontWeight: "bold",
                backgroundColor: "demakkSecondary.main",
                borderRadius: ".2rem",
              },
              minWidth: "max-content",
              fontSize: ".875rem",
            }}
          >
            <Typography component={"span"} className="choice" mr={".25rem"}>
              Choice
            </Typography>
            Free shipping
            {freeShippingPrice ? (
              <Typography component={"span"}>
                {" "}
                over ETB{freeShippingPrice}
              </Typography>
            ) : (
              <></>
            )}
          </Typography>
        </Stack>
      ) : (
        <></>
      )}
    </>
  );
}
