import type { Metadata } from "next";
import { Noto_Serif_TC } from "next/font/google";
import "./globals.css";

const notoSerifTC = Noto_Serif_TC({
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "600"],
    variable: "--font-noto-serif"
});

export const metadata: Metadata = {
    title: "好事發生數位",
    description: "WordPress網站設計、SEO行銷、LinkedIn行銷",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="zh-TW">
            <body className={notoSerifTC.className}>{children}</body>
        </html>
    );
}
