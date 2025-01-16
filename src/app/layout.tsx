import type { Metadata } from "next";
import Navigation from "@/components/Navigation/nav";
import Providers from "./providers";
import "./globals.css";
export const metadata: Metadata = {
  title: "blog app",
  description: "next js blog app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className='bg-zinc-300'>
        <Providers>
          <Navigation />
          {children}
        </Providers>
      </body>
    </html>
  );
}
