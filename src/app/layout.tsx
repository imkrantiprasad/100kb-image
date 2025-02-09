import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Online Image Compressor",
  description:
    "100kb-image is the ultimate image optimizer to compress your images in JPEG, GIF and PNG formats to the minimum possible size.",
  openGraph: {
    title: "Online Image Compressor",
    description:
      "100kb-image is the ultimate image optimizer to compress your images in JPEG, GIF and PNG formats to the minimum possible size.",
    images: "/assets/hero.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`text-primary`}>{children}</body>
    </html>
  );
}
