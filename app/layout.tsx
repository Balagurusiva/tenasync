import type { Metadata } from "next";
import {Manrope } from "next/font/google";
import "./globals.css";
import AppProvider from "@/src/providers/app-provider";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TenaSync",
  description: "Mutli Tenant Service Booking Web Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      suppressHydrationWarning 
      lang="en"
      className={`h-full antialiased`}
    >
      <body className={"bg-background"}>
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
