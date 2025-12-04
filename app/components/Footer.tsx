import Link from 'next/link';

// Types
interface MenuItem {
    id: string;
    label: string | null;
    url: string | null;
    path: string | null;
}

interface MenuData {
    menuItems: {
        nodes: MenuItem[];
    };
}

// GraphQL Query
const GET_FOOTER_MENU = `
  query GetFooterMenu {
    menuItems(where: { location: FOOTER }, first: 20) {
      nodes {
        id
        label
        url
        path
      }
    }
  }
`;

// Fetch menu data
async function fetchFooterMenu(): Promise<MenuData | null> {
    try {
        const res = await fetch(process.env.NEXT_PUBLIC_WORDPRESS_API_URL as string, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query: GET_FOOTER_MENU }),
            next: { revalidate: 3600 },
        });

        if (!res.ok) return null;

        const json = await res.json();
        return json.data as MenuData;
    } catch {
        return null;
    }
}

// Convert WordPress URL to internal path
function toInternalPath(url: string | null, path: string | null): string {
    if (path) return path;
    if (!url) return '/';

    try {
        const urlObj = new URL(url);
        return urlObj.pathname || '/';
    } catch {
        return url.startsWith('/') ? url : '/';
    }
}

export default async function Footer() {
    const data = await fetchFooterMenu();
    const menuItems = data?.menuItems?.nodes || [];

    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <Link href="/" className="inline-block">
                            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                ohya.co
                            </span>
                        </Link>
                        <p className="mt-4 text-gray-400 max-w-md">
                            專注於 WordPress 開發、SEO 優化、AI 自動化整合，幫助企業打造高效的數位解決方案。
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">快速連結</h3>
                        <ul className="space-y-2">
                            {menuItems.length > 0 ? (
                                menuItems.map((item) => (
                                    <li key={item.id}>
                                        <Link
                                            href={toInternalPath(item.url, item.path)}
                                            className="text-gray-400 hover:text-white transition-colors"
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))
                            ) : (
                                // Fallback links
                                <>
                                    <li>
                                        <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                                            首頁
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                                            關於我們
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                                            服務項目
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                                            聯絡我們
                                        </Link>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">聯絡資訊</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li className="flex items-center gap-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <a href="mailto:hello@ohya.co" className="hover:text-white transition-colors">
                                    hello@ohya.co
                                </a>
                            </li>
                        </ul>

                        {/* Social Links */}
                        <div className="flex gap-4 mt-6">
                            <a
                                href="https://www.linkedin.com/company/ohya"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition-colors"
                                aria-label="LinkedIn"
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </a>
                            <a
                                href="https://www.facebook.com/ohya.co"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition-colors"
                                aria-label="Facebook"
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
                    <p>© {currentYear} ohya.co. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
