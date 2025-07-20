"use client";
import "./globals.css";
import React from "react";
import Header from "@/app/header";
import Footer from "@/app/footer";
import localFont from 'next/font/local'

const myFont = localFont({src: '../../public/VCR_OSD_MONO.ttf'})

interface LayoutProps {
    children: React.ReactNode
}

export default function Layout({children}: LayoutProps): React.ReactElement {
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