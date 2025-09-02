import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import LoadingPage from "@/components/loading";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"], 
  variable: "--font-roboto",
});
export const metadata: Metadata = {
  title: "Reset Indonesia",
  description: "Website Reset Indonesia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={roboto.variable}>
      <body className="antialiased font-roboto">
        <LoadingPage />
        {children}
      </body>
    </html>
  );
}
