import type {Metadata} from "next";
import localFont from "next/font/local";
import "./globals.css";
import ResponsiveNav from "@/components/home/Navbar/ResponsiveNav";
import Footer from "@/components/home/footer/Footer";
import ScrollToTop from "@/components/helper/ScrollToTop";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "Real estate",
    description: "Real estate",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <ResponsiveNav/>
        {children}
        <Footer/>
        <ScrollToTop/>
        </body>
        </html>
    );
}
