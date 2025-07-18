import "./globals.css";
import React from "react";
import Header from "@/app/header";
import Footer from "@/app/footer";
import localFont from 'next/font/local'

const myFont = localFont({
    src: '../../public/VCR_OSD_MONO.ttf'
})

interface RootLayoutProps {
    children: React.ReactNode
}

export default function RootLayout({children}: RootLayoutProps): React.ReactElement {
    return (
        <html lang="en" className={myFont.className}>
        <body>
        <Header/>
        {children}
        <Footer/>
        </body>
        </html>
    );
}