import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";

const nunitoSans = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rest Countries Web App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunitoSans.className}>{children}</body>
    </html>
  );
}
