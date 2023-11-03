import Image from "next/image";
import { Inter, Noto_Sans_Georgian } from "next/font/google";
import Logo from "public/images/logo.png";
import "./globals.css";

// components
import Header from "@/components/header/Header";
import User from "@/components/user/User";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import AuthProvider from "@/components/AuthProvider/AuthProvider";

const inter = Inter({ subsets: ["latin"] });
const noto = Noto_Sans_Georgian({subsets: ["georgian"]})

export const metadata = {
  title: "IG Stacks",
  description: "Inventory management application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={noto.className}>
        <AuthProvider>
          <div className="container">
            <div className="header">
              <div className="logo">
                <Image
                  src={Logo}
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
                <Footer />
              </div>
              <main>{children}</main>
            </div>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
