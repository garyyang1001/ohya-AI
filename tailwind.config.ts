import type { Config } from "tailwindcss";

export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                // Brand colors from Design-CI.html
                'brand-bg': '#F5F5F3',      /* 再生紙白 */
                'brand-ink': '#2B2B2B',     /* 墨黑 */
                'brand-gray': '#7A7A7A',    /* 石墨灰 */
                'brand-light-gray': '#D4D4D4', /* 淺灰用於邊框 */
                'brand-line': '#E5E5E5',    /* 極細線 */
                'brand-red': '#8C3A3A',     /* 印泥紅 */
            },
            fontFamily: {
                serif: ['"Noto Serif TC"', 'serif'],
                sans: ['"Lato"', 'sans-serif'],
            },
            transitionTimingFunction: {
                'brand-ease': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            }
        },
    },
    plugins: [require("@tailwindcss/typography")],
} satisfies Config;
