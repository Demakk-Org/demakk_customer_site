import { Button, Modal, Stack, TextField, Typography } from "@mui/material";
import Loading from "@/component/Loading";
import { demakkFont } from "@/pages/_app";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import IOSSwitch from "@/component/Switch";

function ListForFavoritesComponent({
  favoriteLists,
}: {
  favoriteLists: null | string[];
}) {
  const { t } = useTranslation(["order"]);
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      {favoriteLists == null ? (
        <Stack minHeight={"250px"}>
          <Loading windowMode />
        </Stack>
      ) : favoriteLists.length == 0 ? (
        <Stack
          p={"3rem"}
          bgcolor={"background.light"}
          alignItems={"center"}
          justifyContent={"center"}
          color={"text.primary"}
          spacing={1}
        >
          <Image
            width={150}
            height={150}
            src={"/assets/images/not-found.jpeg"}
            alt="product not found"
          />
          <Typography
            fontWeight={"bold"}
            fontSize={"1.2rem"}
            className={demakkFont.className}
            letterSpacing={1}
          >
            {t("noListsHereYet")}
          </Typography>
          <Typography>{t("organizeYourFavorite")}</Typography>
          <Button
            variant="outlined"
            color="contrast"
            sx={{ borderRadius: "2rem" }}
            onClick={() => setOpenModal(true)}
          >
            {t("createYourFirstList", { ns: "actions" })}
          </Button>
        </Stack>
      ) : (
        <Stack
          p={"3rem"}
          bgcolor={"background.light"}
          alignItems={"center"}
          justifyContent={"center"}
          color={"text.primary"}
          spacing={1}
        >
          <Image
            width={300}
            height={300}
            src={"/assets/images/not-found.jpeg"}
            alt="product not found"
          />
          <Typography
            fontWeight={"bold"}
            fontSize={"1.2rem"}
            className={demakkFont.className}
            letterSpacing={1}
          >
            {t("thisFeatureIsUnderDevelopment", { ns: "account" })}
          </Typography>
        </Stack>
      )}

      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <Stack
          width={"400px"}
          p={2}
          position="absolute"
          top="50%"
          left="50%"
          sx={{ transform: "translate(-50%, -50%)" }}
          color={"text.primary"}
          bgcolor={"background.lightOpaque"}
          borderRadius={2}
          spacing={2}
        >
          <Typography
            textAlign={"center"}
            fontSize={"1.5rem"}
            fontWeight={"bold"}
          >
            Create a list
          </Typography>
          <Stack width={1} spacing={1}>
            <Typography fontSize={"1.1rem"}>List name</Typography>
            <TextField size={"small"} />
          </Stack>

          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Stack>
              <Typography>Set as private</Typography>
              <Typography>Only can view items in this list</Typography>
            </Stack>

            <IOSSwitch />
          </Stack>

          <Button variant="contained" fullWidth sx={{ borderRadius: "2rem" }}>
            Yes I do
          </Button>
        </Stack>
      </Modal>
    </>
  );
}

export default ListForFavoritesComponent;
