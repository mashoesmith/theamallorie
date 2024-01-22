import { Libre_Baskerville } from "next/font/google";
import "../styles/globals.css";

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-libreBaskerville",
});

export default async function RootLayout({ children }) {
  return (
    <html lang="en" className={`${libreBaskerville.variable}`}>
      <body className="font-body">{children}</body>
    </html>
  );
}
