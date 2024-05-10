import { Box } from "@mui/material";

interface IconFromReactIconsProps {
  icon: JSX.Element;
  width?: number;
  height?: number;
  color?: string;
  strokeWidth?: string;
}

function IconFromReactIcons({
  icon,
  width,
  height,
  color,
  strokeWidth,
}: IconFromReactIconsProps) {
  return (
    <Box
      width={width || 25}
      height={height || 25}
      color={color || "text.primary"}
      sx={{
        "&>svg": {
          color: "inherit !important",
          height: "inherit !important",
          width: "inherit !important",
          fontSize: "unset",
          strokeWidth: strokeWidth
            ? strokeWidth + " !important"
            : "1px !important",
        },
      }}
    >
      {icon}
    </Box>
  );
}

export default IconFromReactIcons;
