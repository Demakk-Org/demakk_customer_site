import { Button } from "@mui/material";
import { useRouter } from "next/router";

function AccountTabButton({
  selected,
  url,
  name,
  disabled,
}: {
  selected: boolean;
  url: string;
  name: string;
  disabled?: boolean;
}) {
  const router = useRouter();

  return (
    <Button
      fullWidth
      size="large"
      disabled={disabled}
      onClick={() => router.push(url)}
      sx={{
        justifyContent: "flex-start",
        borderLeft: "4px solid transparent",
        borderRadius: "0",
        color: "text.primary",
        bgcolor: selected ? "background.paper" : "",
        borderColor: selected ? "demakkPrimary.main" : "",
        "&:hover": {
          bgcolor: "background.paper",
        },
      }}
    >
      {name}
    </Button>
  );
}

export default AccountTabButton;
