import React from "react";
import { Footer } from "./footer";
import { Navbar } from "./navbar";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location]);
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};
