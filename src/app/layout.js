import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Chrome Vault",
  description: "A next app to showcase different chrome extensions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-background">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
