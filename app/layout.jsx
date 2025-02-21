"use client";
import { usePathname } from "next/navigation";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";
import { Ubuntu } from "next/font/google";
import { AuthProvider } from "./auth/AuthContext";

const ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const hideLayout = pathname === "/register" || pathname === "/login";

  return (
    <html lang="en">
       <AuthProvider>
      <body className={ubuntu.className}>
        {!hideLayout && <Navbar />}
        {children}
        {!hideLayout && <Footer />}
      </body>
      </AuthProvider>
    </html>
  );
}
