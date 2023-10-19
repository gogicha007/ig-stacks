import { Inter } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Header from "@/components/header/Header";
import User from "@/components/user/User";
// import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IG Stacks",
  description: "Inventory management applicationp",
};

export default function RootLayout({ children }) {
  // const [title, setTitle] = useState("მთავარი");
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <div className="header">
            <div className="logo">
              <Image
                src="/images/logo.png"
                priority={false}
                width={150}
                height={150}
                alt="logo"
              />
            </div>
            <Header />
          </div>
          <div className="down-part">
            <div className="sidebar">
              <User />
              <Navbar />
            </div>
            <main>{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
