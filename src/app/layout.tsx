import "./globals.css";
import type { Metadata } from "next";
import { Lato } from "next/font/google";

const inter = Lato({ weight: "400", subsets: ["latin-ext"] });

// components
import { NavBar } from "@/components/NavBar";

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <>
                    <NavBar />
                    {children}
                </>
            </body>
        </html>
    );
}
