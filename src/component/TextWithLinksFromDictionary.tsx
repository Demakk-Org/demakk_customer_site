import { Typography } from "@mui/material";

function TextWithLinksFromDictionary({
  name,
  url,
}: {
  name: string;
  url: string;
}) {
  const regex = "##";
  let firstInstanceOfSymbol = name.indexOf(regex);
  let secondInstanceOfSymbol = name.lastIndexOf(regex);

  let linkText = name
    .substring(
      firstInstanceOfSymbol,
      firstInstanceOfSymbol == secondInstanceOfSymbol
        ? name.length
        : secondInstanceOfSymbol
    )
    .replace(/##/g, "");

  let splitNameBySymbols = name.split("##").filter((text) => text);
  let indexOfLinkText = splitNameBySymbols.indexOf(linkText);

  return (
    <>
      {splitNameBySymbols.map((text, index) => {
        if (indexOfLinkText == index)
          return (
            <Typography
              key={index}
              component={"a"}
              href={"/" + url}
              fontSize={"inherit"}
              fontWeight={"inherit"}
              sx={{ color: "demakkSecondary.main" }}
            >
              {text}
            </Typography>
          );
        return (
          <Typography
            key={index}
            component={"span"}
            fontSize={"inherit"}
            fontWeight={"inherit"}
          >
            {text}
          </Typography>
        );
      })}
    </>
  );
}

export default TextWithLinksFromDictionary;
