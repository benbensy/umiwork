import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "./_trpc/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DReAMWork",
  description: ".",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
