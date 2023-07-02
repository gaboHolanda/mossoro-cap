import { createTheme } from "@mui/material";
import { PT_Sans_Caption, Oswald } from "next/font/google";

const pt_sans_caption = PT_Sans_Caption({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["300", "400"],
});

const theme = createTheme({
  typography: {
    fontFamily: [
      "bernard-mt",
      pt_sans_caption.className,
      oswald.className,
    ].join(","),
  },
});

export default theme;
