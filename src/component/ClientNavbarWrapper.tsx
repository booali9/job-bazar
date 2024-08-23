"use client";

import * as React from 'react'; 
import { usePathname } from "next/navigation";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer"; // Ensure Footer is imported here

const ClientNavbarWrapper = () => {
  const pathname = usePathname();
  const hidePaths = ["/search"]; // Paths where both Navbar and Footer should be hidden

  if (hidePaths.includes(pathname)) {
    return null; // Don't render Navbar or Footer on these paths
  }

  return (
    <>
      <Navbar />
  
    </>
  );
};

export default ClientNavbarWrapper;
