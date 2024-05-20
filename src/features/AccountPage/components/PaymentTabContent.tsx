import IconFromReactIcons from "@/component/IconFromReactIcons";
import useUserStore from "@/store/user";
import { Box, Button, Divider, Grid, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import { AiOutlineMedicineBox } from "react-icons/ai";
import { FaChevronRight } from "react-icons/fa";
import { HiOutlineEye } from "react-icons/hi2";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoEllipsisHorizontalSharp } from "react-icons/io5";

let cardList: { name: string; type?: string }[] = [
  // { name: "**** 9898", type: "mastercard" },
];

const cardsImageList = [
  {
    name: "mastercard",
    imageUrl: "assets/images/pay2.webp",
  },
  {
    name: "visa",
    imageUrl: "assets/images/pay.png",
  },
];

function PaymentTabContent() {
  const { setBreadcrumbs } = useUserStore();

  useEffect(() => {
    setBreadcrumbs([
      { name: "Home", url: "/" },
      { name: "Account", url: "/account" },
      { name: "Payment", url: "/payment" },
    ]);
  }, []);

  return (
    <Stack spacing={2} color={"text.primary"}>
      <Stack
        justifyContent={"space-between"}
        direction={"row"}
        alignItems={"center"}
        bgcolor={"background.light"}
        p={"0.25rem 1rem"}
      >
        <Typography fontSize={"1.2rem"}>Payment</Typography>
        <Button
          color="primaryButton"
          endIcon={
            <IconFromReactIcons
              width={20}
              height={20}
              icon={<FaChevronRight />}
            />
          }
        >
          <Typography fontSize={"1.3rem"} fontWeight={300}>
            Settings
          </Typography>
        </Button>
      </Stack>

      <Stack bgcolor={"background.light"} p={"0.5rem 1rem"}>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Stack direction={"row"} spacing={1} alignItems={"center"}>
            <IconFromReactIcons
              width={20}
              height={20}
              color="text.secondary"
              icon={<AiOutlineMedicineBox />}
            />
            <Typography>My Bonus</Typography>
          </Stack>
          <Button
            color="primaryButton"
            endIcon={
              <IconFromReactIcons
                width={15}
                height={15}
                icon={<FaChevronRight />}
              />
            }
          >
            <Typography fontSize={"1rem"} fontWeight={300}>
              Records
            </Typography>
          </Button>
        </Stack>

        <Stack divider={<Divider flexItem />} p={"0 3rem"}>
          <Stack alignItems={"center"} spacing={1.5} p={"1.5rem 0"}>
            <Stack direction={"row"} spacing={1} alignItems={"center"}>
              <Typography fontSize={"1.1rem"}>Total</Typography>
              <IconFromReactIcons icon={<HiOutlineEye />} />
            </Stack>
            <Typography fontWeight={"bold"} letterSpacing={1}>
              $0.00
            </Typography>
          </Stack>

          <Stack
            p={"3rem"}
            divider={<Divider flexItem orientation="vertical" />}
            direction={"row"}
          >
            <Stack width={"50%"} alignItems={"center"} gap={1}>
              <Typography
                letterSpacing={1}
                fontSize={"1.1rem"}
                fontWeight={300}
              >
                Available
              </Typography>
              <Stack direction={"row"} spacing={3} alignItems={"center"}>
                <Typography fontWeight={"bold"} fontSize={"1.2rem"}>
                  $0.00
                </Typography>
                <IconFromReactIcons
                  width={15}
                  height={15}
                  icon={<FaChevronRight />}
                />
              </Stack>
            </Stack>
            <Stack width={"50%"} alignItems={"center"} gap={1}>
              <Typography letterSpacing={1} fontSize={"1rem"} fontWeight={300}>
                Pending
              </Typography>
              <Stack direction={"row"} spacing={3} alignItems={"center"}>
                <Typography fontWeight={"bold"} fontSize={"1.2rem"}>
                  $0.00
                </Typography>
                <IconFromReactIcons
                  width={15}
                  height={15}
                  icon={<FaChevronRight />}
                />
              </Stack>
            </Stack>
          </Stack>

          <Stack pt={"1rem"} pb={"0.5rem"}>
            <Typography textAlign={"center"}>
              You can use Bonus towards purchases.
              <Typography color={"blue"} component={"a"} href="#">
                Learn more
              </Typography>
            </Typography>
          </Stack>
        </Stack>
      </Stack>

      <Stack bgcolor={"background.light"} p={"1rem"} gap={"1rem"}>
        <Typography fontWeight={"bold"}>Cards</Typography>
        <Grid container spacing={2}>
          {[...cardList, { name: "addNew" }].map((cardList, index) => {
            if (cardList.name == "addNew") {
              return (
                <Grid item key={index} xs={6}>
                  <Stack
                    width={1}
                    borderRadius={4}
                    p={"3rem 0"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    bgcolor={"background.paper"}
                  >
                    <Button
                      startIcon={
                        <IconFromReactIcons
                          width={30}
                          height={30}
                          icon={<IoIosAddCircleOutline />}
                        />
                      }
                      sx={{
                        "&:focus": { bgcolor: "transparent" },
                        "&:hover": { bgcolor: "transparent" },
                        color: "text.primary",
                        fontSize: "1.1rem",
                      }}
                    >
                      Add new card
                    </Button>
                  </Stack>
                </Grid>
              );
            }
            return (
              <Grid item key={index} xs={6}>
                <Stack
                  width={1}
                  height={1}
                  bgcolor={"background.paper"}
                  borderRadius={4}
                  p={"1rem"}
                  justifyContent={"space-between"}
                >
                  <Stack direction={"row"} justifyContent={"space-between"}>
                    <Typography
                      fontSize={"1.4rem"}
                      letterSpacing={1}
                      fontWeight={"bold"}
                    >
                      {cardList.name}
                    </Typography>
                    <Box
                      component={"img"}
                      height={"1.2rem"}
                      width={"auto"}
                      bgcolor={"white"}
                      borderRadius={1}
                      src={
                        cardsImageList.filter((c) => c.name == cardList.type)[0]
                          .imageUrl
                      }
                    />
                  </Stack>
                  <Button
                    size="small"
                    sx={{ alignSelf: "flex-end", p: 0, minWidth: "unset" }}
                  >
                    <IconFromReactIcons icon={<IoEllipsisHorizontalSharp />} />
                  </Button>
                </Stack>
              </Grid>
            );
          })}
        </Grid>

        {!cardList.length && (
          <Typography fontSize={"0.9rem"}>
            No cards saved. Add one below to get started.
          </Typography>
        )}
      </Stack>
    </Stack>
  );
}

export default PaymentTabContent;
