import "./globals.css";
import { poppins } from "./fonts";

export const metadata = {
  title: "Portfolio",
  description: "Portfolio Website of a Software Engineer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
