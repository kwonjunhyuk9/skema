import React from "react";
import "./globals.css";
import Header from "@/app/header";
import Aside from "@/app/aside";

interface RootLayoutProps {
    children: React.ReactNode
}

export default function RootLayout({children}: RootLayoutProps): React.ReactElement {
    return (
        <html lang="en">
        <body>
        <Header/>
        <Aside/>
        {children}
        </body>
        </html>
    );
}