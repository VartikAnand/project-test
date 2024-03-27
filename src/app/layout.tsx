import React from "react";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "N.J Design Studio",
  description: "Your description goes here",
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ClerkProvider>

    <html lang="en">
      <head>
      </head>
      <body className={inter.className}>
      
          <ToastContainer />
          <Navbar />
          {children}
      </body>
    </html>
    </ClerkProvider>
  );
};

export default RootLayout;
