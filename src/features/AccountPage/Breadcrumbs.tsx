import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { Box } from "@mui/material";

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  alert("You clicked a breadcrumb.");
}

export default function AccountPageBreadcrumbs() {
  return (
    <Box
      component={"div"}
      display={{ xs: "none", sm: "block" }}
      role="presentation"
      onClick={handleClick}
      p={{ sm: "1rem" }}
    >
      <Breadcrumbs aria-label="breadcrumb" separator={">"}>
        <Link underline="hover" color="inherit" href="/" p={"0 0.5rem"}>
          Home
        </Link>
        <Link underline="hover" color="inherit" href="/account/" p={"0 0.5rem"}>
          Account
        </Link>
      </Breadcrumbs>
    </Box>
  );
}
