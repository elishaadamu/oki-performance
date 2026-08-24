import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Safety | OKI Performance Measures",
  description: "Safety performance measures for the OKI region.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
