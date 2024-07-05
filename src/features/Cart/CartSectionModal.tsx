import { Button, IconButton, Modal, Stack, Typography } from "@mui/material";
import useCartStore from "@/store/cart";
import useUserStore from "@/store/user";
import { CloseOutlined } from "@mui/icons-material";
import { t } from "i18next";

function CartSectionModal() {
  const { openModal, setOpenModal } = useCartStore();
  const { lang } = useUserStore();
  return (
    <Modal
      open={openModal?.open || false}
      onClose={() => setOpenModal(null)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Stack alignItems={"center"} height={1} justifyContent={"center"}>
        <Stack
          bgcolor={"background.lightOpaque"}
          p={3}
          color={"text.primary"}
          width={"350px"}
          borderRadius={4}
          spacing={2}
          position="relative"
        >
          <Typography fontSize={"1rem"} fontWeight={600}>
            {openModal && openModal.title}
          </Typography>
          <Typography fontSize={"0.85rem"}>
            {openModal && openModal.description}
          </Typography>
          <Stack spacing={1}>
            <Button
              variant="contained"
              color="error"
              sx={{ borderRadius: "2rem" }}
              onClick={() => {
                openModal && openModal.callBackFn();
                setOpenModal(null);
              }}
            >
              {t("remove")}
            </Button>
            <Button
              variant="contained"
              color="brighten"
              sx={{ borderRadius: "2rem" }}
              onClick={() => setOpenModal(null)}
            >
              {t("cancel")}
            </Button>
          </Stack>
          <IconButton
            sx={{
              position: "absolute",
              top: "0",
              right: "1rem",
              bgcolor: "action.hover",
            }}
            onClick={() => setOpenModal(null)}
          >
            <CloseOutlined />
          </IconButton>
        </Stack>
      </Stack>
    </Modal>
  );
}

export default CartSectionModal;
