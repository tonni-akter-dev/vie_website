"use client";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const pathname = usePathname(); // <-- Correct usage
  console.log(pathname);
  return (
    <div>
      {pathname === "/search" || pathname === "/qr-code" ? (
        <div>{children}</div>
      ) : (
        <div className="bg-[#FBFBFB]">
          <Header />
          {children}
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Layout;
