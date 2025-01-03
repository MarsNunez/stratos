import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "./ThemeContext";
import MainWrapper from "./wrappers/MainWrapper";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Stratos",
  description: "Meet your star",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
        />
      </head>
      <ThemeProvider>
        <MainWrapper geistSans={geistSans} geistMono={geistMono}>
          {children}
        </MainWrapper>
      </ThemeProvider>
    </html>
  );
}
