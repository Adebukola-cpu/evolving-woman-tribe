
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Evolving Woman Tribe | Rise in Purpose",
  description:
    "A transformational gathering empowering women to rise boldly in purpose, leadership, ministry, business, and influence.",
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
