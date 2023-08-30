import { createTheme } from "@mui/material";
import { PT_Sans_Caption, Alumni_Sans } from "next/font/google";

const pt_sans_caption = PT_Sans_Caption({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const oswald = Alumni_Sans({
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
  palette: {
    background: {default: '#ffffff'}
  }
});

export default theme;
