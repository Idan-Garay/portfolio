import { Poppins, Roboto } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300"],
  variable: "--font-roboto",
});
