import Link from 'next/link';

// Social links data
const socialLinks = [
    { name: 'Facebook', href: 'https://www.facebook.com/amazing.studios.tw', icon: 'facebook' },
    { name: 'Threads', href: 'https://www.threads.com/@881freelancer', icon: 'threads' },
    { name: 'YouTube', href: 'https://www.youtube.com/@freelancerstudio467', icon: 'youtube' },
    { name: 'SKOOL', href: 'https://www.skool.com/one-man-business-with-ai-4046', icon: 'skool' },
];

// Icon components
function FacebookIcon() {
    return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z" />
        </svg>
    );
}

function ThreadsIcon() {
    return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 192 192">
            <path d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.2284 61.6848C97.3063 61.6848 97.3849 61.6848 97.4628 61.6855C105.707 61.7381 111.932 64.1366 115.961 68.814C118.893 72.2193 120.854 76.925 121.825 82.8638C114.511 81.6207 106.601 81.2385 98.145 81.7233C74.3247 83.0954 59.0111 96.9879 60.0396 116.292C60.5615 126.084 65.4397 134.508 73.775 140.011C80.8224 144.663 89.899 146.963 99.3323 146.455C111.79 145.784 121.563 140.987 128.381 132.238C133.559 125.614 136.834 117.098 138.28 106.419C144.217 109.918 148.617 114.587 151.047 120.286C155.179 129.848 155.42 145.245 143.206 157.505C132.506 168.244 119.103 173.163 97.222 173.326C73.0349 173.155 54.4709 165.354 42.1819 150.012C30.6037 135.549 24.6202 114.608 24.4408 88C24.6208 61.3943 30.6043 40.4525 42.1825 25.9893C54.4715 10.6465 73.0355 2.84548 97.2226 2.67384C121.591 2.84626 140.53 10.7047 153.301 26.0989C159.623 33.7163 164.29 43.0568 167.275 53.7886L183.727 49.5929C179.994 36.1944 174.139 24.6832 166.1 15.1277C149.826 -3.72401 125.828 -12.7057 97.2841 -12.8961L97.1641 -12.8961C68.7096 -12.7032 45.0484 -3.67187 29.2552 15.2003C11.8842 35.0992 2.97754 63.5914 2.77886 98.0001L2.77886 98.0001C2.97754 132.409 11.8842 160.901 29.2552 180.8C45.0484 199.672 68.7096 208.703 97.1641 208.896L97.2841 208.896C125.061 208.707 143.714 201.408 158.083 187.044C177.09 168.031 176.585 143.015 168.95 125.016C163.676 112.506 153.667 102.237 141.537 88.9883ZM98.4175 130.188C83.9987 131.064 75.7826 123.089 75.4267 115.925C74.9667 106.749 82.7886 99.1698 97.9426 98.3056C99.8206 98.1954 101.672 98.1423 103.498 98.1459C109.873 98.1459 115.914 98.7488 121.526 99.9233C119.538 125.147 109.409 129.549 98.4181 130.188L98.4175 130.188Z" />
        </svg>
    );
}

function YouTubeIcon() {
    return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
    );
}

function SkoolIcon() {
    return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L1 7l11 5 9-4.09V17h2V7L12 2zM5 13.18v4L12 20l7-2.82v-4L12 16l-7-2.82z" />
        </svg>
    );
}

function getIcon(iconName: string) {
    switch (iconName) {
        case 'facebook': return <FacebookIcon />;
        case 'threads': return <ThreadsIcon />;
        case 'youtube': return <YouTubeIcon />;
        case 'skool': return <SkoolIcon />;
        default: return null;
    }
}

export default async function Footer() {
    return (
        <footer className="py-16 px-6 border-t border-[var(--brand-line)] bg-white">
            <div className="max-w-[1600px] mx-auto">

                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Company Info */}
                    <div>
                        <h3 className="text-lg font-normal text-[var(--brand-ink)] mb-6">
                            好事發生數位<span className="text-[0.5rem] align-top ml-1 tracking-widest text-[var(--brand-gray)]" style={{ fontFamily: 'Lato, sans-serif' }}>AI</span>
                        </h3>
                        <p className="text-sm text-[var(--brand-gray)] leading-relaxed font-light mb-4">
                            好事發生數位有限公司
                        </p>
                        <p className="text-sm text-[var(--brand-gray)] leading-relaxed font-light">
                            AI 顧問 + AI Agent 團隊<br />
                            協助企業導入數位轉型解決方案
                        </p>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4
                            className="text-xs tracking-widest text-[var(--brand-gray)] uppercase mb-6"
                            style={{ fontFamily: 'Lato, sans-serif' }}
                        >
                            Contact
                        </h4>
                        <div className="space-y-3 text-sm text-[var(--brand-gray)] font-light">
                            <a
                                href="mailto:gary@ohya.co"
                                className="block hover:text-[var(--brand-ink)] transition-colors duration-500"
                            >
                                gary@ohya.co
                            </a>
                            <a
                                href="tel:0926000214"
                                className="block hover:text-[var(--brand-ink)] transition-colors duration-500"
                            >
                                0926-000-214
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4
                            className="text-xs tracking-widest text-[var(--brand-gray)] uppercase mb-6"
                            style={{ fontFamily: 'Lato, sans-serif' }}
                        >
                            Links
                        </h4>
                        <div className="space-y-3 text-sm text-[var(--brand-gray)] font-light">
                            <Link
                                href="/blog"
                                className="block hover:text-[var(--brand-ink)] transition-colors duration-500"
                            >
                                好事發生行銷誌
                            </Link>
                            <Link
                                href="/portfolio"
                                className="block hover:text-[var(--brand-ink)] transition-colors duration-500"
                            >
                                作品集
                            </Link>
                            <Link
                                href="/contact-us"
                                className="block hover:text-[var(--brand-ink)] transition-colors duration-500"
                            >
                                聯繫我們
                            </Link>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h4
                            className="text-xs tracking-widest text-[var(--brand-gray)] uppercase mb-6"
                            style={{ fontFamily: 'Lato, sans-serif' }}
                        >
                            Follow Us
                        </h4>
                        <div className="flex flex-wrap gap-4 mb-8">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[var(--brand-gray)] hover:text-[var(--brand-ink)] transition-colors duration-500"
                                    aria-label={link.name}
                                >
                                    {getIcon(link.icon)}
                                </a>
                            ))}
                        </div>

                        {/* Brand Guideline Link */}
                        <div>
                            <h4
                                className="text-xs tracking-widest text-[var(--brand-gray)] uppercase mb-4"
                                style={{ fontFamily: 'Lato, sans-serif' }}
                            >
                                Brand Guideline
                            </h4>
                            <Link
                                href="/brand-guidelines"
                                className="text-sm text-[var(--brand-gray)] font-light hover:text-[var(--brand-ink)] transition-colors duration-500 block"
                            >
                                好事發生網頁設計規範
                            </Link>
                        </div>
                    </div>

                </div>

                {/* Divider */}
                <div className="w-full h-px bg-[var(--brand-line)] mb-8" />

                {/* Footer Bottom */}
                <div className="flex flex-col md:flex-row justify-between items-center text-xs text-[var(--brand-gray)] tracking-widest" style={{ fontFamily: 'Lato, sans-serif' }}>
                    <p className="mb-4 md:mb-0">
                        © 好事發生數位有限公司
                    </p>
                    <p className="uppercase">
                        Since 2018
                    </p>
                </div>

            </div>
        </footer>
    );
}
