import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { Box, Typography } from "@mui/material";
import useUserStore from "@/store/user";

export default function AccountPageBreadcrumbs() {
  const { breadcrumbs } = useUserStore();

  return (
    <Box
      component={"div"}
      display={{ xs: "none", sm: "block" }}
      role="presentation"
      // p={{ sm: "1rem" }}
    >
      <Breadcrumbs aria-label="breadcrumb" separator={">"}>
        {breadcrumbs.map((breadcrumb, index) => {
          return (
            <Link
              underline="hover"
              color="inherit"
              href={breadcrumb.url}
              p={"0 0.5rem"}
              key={index}
            >
              <Typography>{breadcrumb.name}</Typography>
            </Link>
          );
        })}
      </Breadcrumbs>
    </Box>
  );
}
