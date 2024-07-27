import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Karya-Sarthi",
  description: "A platform to hire the person you need ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="z-50">
        <Navbar/>
        </div>
        <div className="min-h-screen front overflow-hidden">
        {children}
        </div>
        <Footer/>
        </body>
    </html>
  );
}

