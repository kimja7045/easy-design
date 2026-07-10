import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lumen Vows",
  description:
    "빛과 표정으로 정리하는 세련된 웨딩 사진 컬렉션.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body>{children}</body>
    </html>
  );
}
