import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prime Spaces Realty | Homes and Apartments in Bengaluru",
  description:
    "Prime Spaces Realty helps you buy, sell and rent homes across Bengaluru. Browse featured listings and talk to an advisor today.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
