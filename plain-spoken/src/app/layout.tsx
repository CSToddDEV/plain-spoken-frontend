import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";
import HeaderNav from "./components/headerNav";



export const metadata: Metadata = {
  title: "Plainly Spoken",
  description: "Project Plainly Spoken",
};

export const monts = Montserrat({
  variable: '--monts',
  subsets: ['latin']
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${monts.className} antialiased`}
      >
        <header>
          <HeaderNav />
        </header>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
