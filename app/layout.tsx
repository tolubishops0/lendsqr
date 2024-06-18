import type { Metadata } from "next";
import "./styles/globals.scss";


export const metadata: Metadata = {
  title: "Lendsqr",
  description: "Empowering the smartest lenders",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
