import { Html, Head, Main, NextScript } from "next/document";
const { i18n } = require("../../next-i18next.config");
export default function Document({ ...props }) {
  const currentLocale = props.__NEXT_DATA__?.locale ?? i18n.defaultLocale;

  return (
    <Html lang={currentLocale}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
