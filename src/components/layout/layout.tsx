import React from "react";
import { Footer } from "./footer";
import { Navbar } from "./navbar";

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};
