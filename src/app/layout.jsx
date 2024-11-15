import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar"
import Camerawheel from "@/components/camerawheel"

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
  title: "Fluxus 25'",
  description: "IIT Indore's Annual Cultural Fest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-[100dvw] overflow-x-clip` }
      >
        <Navbar/>
        {/* <Camerawheel/> */}
        {children}
      </body>
    </html>
  );
}
