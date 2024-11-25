import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toast } from "@/components/ui/toast";
import { Toaster } from "@/components/ui/toaster";
// import { Toast } from "@radix-ui/react-toast";

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
const popins = localFont({
  src: "./fonts/Poppins-Regular.ttf",
  variable: "--font-Poppins-Regular",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${popins.variable} antialiased`}
      >
        {children}
        {/* <Toast/> */}
        <Toaster />
      </body>
    </html>
  );
}