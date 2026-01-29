import type { Metadata } from "next";
import { Noto_Serif_TC } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const notoSerifTC = Noto_Serif_TC({
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "600"],
    variable: "--font-noto-serif"
});

export const metadata: Metadata = {
    title: "Ohya Digital",
    description: "WordPress Web Design, SEO Marketing, LinkedIn Marketing",
    verification: {
        google: "nCW77EhhZMGGKInUkxTQ8SzaONxjoxJjODH74apbr9g",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="zh-TW">
            <body className={`${notoSerifTC.className} flex flex-col min-h-screen`}>
                <Header />
                <main className="flex-grow">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
