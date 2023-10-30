"use client";

import { createContext, useState } from "react";
import "./globals.css";
import Loading from "./loading";
import React from "react";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("./component/Navbar/Navbar"), { ssr: false, 
    
     loading: () => <Loading /> });
const Footer = dynamic(() => import("./component/Footer/Footer"), { ssr: false });

export const ModalContext = createContext();

export default function RootLayout({ children }) {
    let [isOpen, setIsOpen] = useState(false);

    return (
        // App

        <html lang="en">
            <head />

            <body>
                <main>
                    <ModalContext.Provider value={{isOpen, setIsOpen}}>
                        <Navbar />
                        <section>{children}</section>
                        <Footer />
                    </ModalContext.Provider>
                </main>
            </body>
        </html>
    );
}
