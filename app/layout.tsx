import type { Metadata } from "next";
import "./globals.css";
import Background from "@/components/Background";


export const metadata: Metadata = {
  title: "Athena - Hack Club",
  icons: "https://assets.hackclub.com/icon-rounded.svg"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased"
      >
        <Background>
          {children}
          {/* <div className="w-screen p-6 bg-red"></div> */}
        </Background>
      </body>
    </html>
  );
}
