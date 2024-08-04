import { Button, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

function UpdateCompletionModal({ name }: { name: string }) {
  const { t } = useTranslation(["modal"]);
  const router = useRouter();

  return (
    <>
      <Typography fontSize={"1.8rem"} fontWeight={"bold"}>
        {name}
      </Typography>

      <Stack spacing={3}>
        <Typography>{t("yourEmailHasBeenUpdated")}</Typography>

        <Button
          variant="contained"
          size="large"
          sx={{ borderRadius: "2rem" }}
          onClick={() => {
            router.push("/");
          }}
        >
          {t("continue", { ns: "actions" })}
        </Button>
      </Stack>
    </>
  );
}

export default UpdateCompletionModal;
