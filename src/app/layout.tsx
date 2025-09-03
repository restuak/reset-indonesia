import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"], 
  variable: "--font-roboto",
});
export const metadata: Metadata = {
  title: "RESET INDONESIA | Transparansi. Reformasi. Empati.",
  description: "A resilient platform for documenting Indonesia's 17+8 Demands movement. This project is a modern web application designed to serve as a permanent digital archive of the 17+8 Tuntutan Rakyat (17+8 Demands from the People) movement. It documents the 17 immediate and 8 long-term demands that were formulated to unify public grievances during the August 2025 protests in Indonesia. The application’s design language incorporates the symbolic colors of the movement: #BravePink, representing the female protesters on the front lines, and #HeroGreen, symbolizing the victims of police actions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={roboto.variable}>
      <body className="antialiased font-roboto">
        {children}
      </body>
    </html>
  );
}
