'use client';

import Link from 'next/link';
import { useState } from 'react';
import MobileMenu, { MenuItemWithChildren } from './MobileMenu';

// Helper to convert URL
function toInternalPath(url: string | null, path: string | null): string {
    if (path && path !== '#') return path;
    if (!url || url === '#') return '#';

    try {
        const urlObj = new URL(url);
        return urlObj.pathname || '/';
    } catch {
        return url.startsWith('/') ? url : '/';
    }
}

// NavItem Component
function NavItem({ item }: { item: MenuItemWithChildren }) {
    const hasChildren = item.children.length > 0;
    const href = toInternalPath(item.url, item.path);
    const isLink = href !== '#';

    if (!hasChildren) {
        return (
            <Link
                href={href}
                className="hover:text-[var(--brand-ink)] transition-colors duration-700"
                style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
            >
                {item.label}
            </Link>
        );
    }

    return (
        <div className="relative group">
            {isLink ? (
                <Link
                    href={href}
                    className="flex items-center gap-1 hover:text-[var(--brand-ink)] transition-colors duration-700"
                    style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
                >
                    {item.label}
                    <svg className="w-3 h-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                </Link>
            ) : (
                <span className="flex items-center gap-1 cursor-pointer hover:text-[var(--brand-ink)] transition-colors duration-700">
                    {item.label}
                    <svg className="w-3 h-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                </span>
            )}

            {/* Dropdown - 置中對齊，扁平化設計 */}
            <div
                className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible z-50"
                style={{
                    transition: 'opacity 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94), visibility 500ms'
                }}
            >
                <div className="bg-white border border-[var(--brand-line)] shadow-lg py-3 min-w-[200px]">
                    {item.children.map((child) => (
                        <div key={child.id}>
                            <Link
                                href={toInternalPath(child.url, child.path)}
                                className="block px-6 py-2.5 text-sm text-[var(--brand-gray)] hover:text-[var(--brand-ink)] hover:bg-[var(--brand-bg)] transition-all duration-300 whitespace-nowrap"
                            >
                                {child.label}
                            </Link>
                            {/* 第三層子選單 */}
                            {child.children.length > 0 && (
                                <div className="bg-[var(--brand-bg)]/50">
                                    {child.children.map((grandchild) => (
                                        <Link
                                            key={grandchild.id}
                                            href={toInternalPath(grandchild.url, grandchild.path)}
                                            className="block px-8 py-2 text-xs text-[var(--brand-gray)] hover:text-[var(--brand-ink)] transition-colors duration-300 whitespace-nowrap"
                                        >
                                            {grandchild.label}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

interface HeaderContentProps {
    menuTree: MenuItemWithChildren[];
}

export default function HeaderContent({ menuTree }: HeaderContentProps) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <>
            <header className="fixed w-full z-50 top-0 left-0 bg-[var(--brand-bg)]/95 backdrop-blur-sm border-b border-[var(--brand-line)]">
                <div className="max-w-[1600px] mx-auto px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        {/* Logo - 好事發生數位 AI */}
                        <Link
                            href="/"
                            className="relative whitespace-nowrap hover:opacity-70 transition-opacity duration-700"
                            style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
                        >
                            <span className="text-xl md:text-2xl tracking-[0.15em] font-light text-[var(--brand-ink)]">
                                好事發生數位
                            </span>
                            <span
                                className="text-[0.6rem] align-top ml-1.5 tracking-[0.2em] text-[var(--brand-gray)] font-normal absolute -top-0.5"
                                style={{ fontFamily: 'Lato, sans-serif' }}
                            >
                                AI
                            </span>
                        </Link>

                        {/* Navigation */}
                        <nav className="hidden lg:flex items-center space-x-10 text-xs tracking-[0.2em] text-[var(--brand-gray)] uppercase font-normal">
                            {menuTree.length > 0 ? (
                                menuTree.map((item) => (
                                    <NavItem key={item.id} item={item} />
                                ))
                            ) : (
                                <>
                                    <Link href="/" className="hover:text-[var(--brand-ink)] transition-colors duration-700">首頁</Link>
                                    <Link href="/portfolio" className="hover:text-[var(--brand-ink)] transition-colors duration-700">作品集</Link>
                                    <Link href="/contact-us" className="hover:text-[var(--brand-ink)] transition-colors duration-700">聯繫我們</Link>
                                </>
                            )}
                        </nav>

                        {/* Mobile Menu Button */}
                        <button
                            type="button"
                            className="lg:hidden text-[var(--brand-ink)] hover:opacity-70 transition-opacity duration-700 z-[60] relative"
                            aria-label={isMobileMenuOpen ? "關閉選單" : "開啟選單"}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <MobileMenu
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
                menuItems={menuTree}
            />
        </>
    );
}
