'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

// Types (duplicated from Header.tsx to avoid complex refactors for now)
export interface MenuItem {
    id: string;
    label: string | null;
    url: string | null;
    path: string | null;
    parentId: string | null;
    order: number | null;
}

export interface MenuItemWithChildren extends MenuItem {
    children: MenuItemWithChildren[];
}

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
    menuItems: MenuItemWithChildren[];
}

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

export default function MobileMenu({ isOpen, onClose, menuItems }: MobileMenuProps) {
    const [isVisible, setIsVisible] = useState(false);
    const [expandedMenus, setExpandedMenus] = useState<Set<string>>(new Set());

    // Handle animation state
    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
            document.body.style.overflow = 'hidden'; // Lock scroll
        } else {
            const timer = setTimeout(() => setIsVisible(false), 700); // Match transition duration
            document.body.style.overflow = ''; // Unlock scroll
            setExpandedMenus(new Set()); // Reset expanded state
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    const toggleExpand = (id: string) => {
        setExpandedMenus(prev => {
            const next = new Set(prev);
            if (next.has(id)) {
                next.delete(id);
            } else {
                next.add(id);
            }
            return next;
        });
    };

    if (!isVisible && !isOpen) return null;

    return (
        <div
            className={`fixed inset-0 z-40 bg-[var(--brand-bg)] transition-opacity duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
        >
            {/* Background Texture */}
            <div className="absolute inset-0 paper-texture opacity-50 pointer-events-none" />

            {/* Menu Content Wrapper - Handles Scroll */}
            <div className="h-full overflow-y-auto">
                {/* Flex Container - Handles Centering & Expansion */}
                <div className="min-h-full flex flex-col justify-center items-center p-6 py-24">
                    <nav className="flex flex-col items-center space-y-6 text-center w-full max-w-md">
                        {menuItems.length > 0 ? (
                            menuItems.map((item, index) => {
                                const hasChildren = item.children.length > 0;
                                const isExpanded = expandedMenus.has(item.id);

                                return (
                                    <div
                                        key={item.id}
                                        className={`transform transition-all duration-700 delay-[${index * 50}ms] w-full ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                                            }`}
                                    >
                                        {hasChildren ? (
                                            // 有子選單：點擊整個區域展開
                                            <button
                                                onClick={() => toggleExpand(item.id)}
                                                className="flex items-center justify-center gap-3 text-2xl md:text-3xl font-light text-[var(--brand-ink)] hover:text-[var(--brand-gray)] tracking-widest transition-colors duration-300"
                                            >
                                                <span>{item.label}</span>
                                                <svg
                                                    className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={1.5}
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </button>
                                        ) : (
                                            // 沒有子選單：直接導航
                                            <Link
                                                href={toInternalPath(item.url, item.path)}
                                                onClick={onClose}
                                                className="text-2xl md:text-3xl font-light text-[var(--brand-ink)] hover:text-[var(--brand-gray)] tracking-widest transition-colors duration-300"
                                            >
                                                {item.label}
                                            </Link>
                                        )}

                                        {/* Submenu - Collapsible */}
                                        {hasChildren && (
                                            <div
                                                className={`overflow-hidden transition-all duration-500 ease-out ${isExpanded ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'
                                                    }`}
                                            >
                                                <div className="space-y-2 flex flex-col items-center">
                                                    {item.children.map((child) => (
                                                        <Link
                                                            key={child.id}
                                                            href={toInternalPath(child.url, child.path)}
                                                            onClick={onClose}
                                                            className="text-sm text-[var(--brand-gray)] hover:text-[var(--brand-ink)] tracking-widest transition-colors duration-300 block py-1"
                                                        >
                                                            {child.label}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                );
                            })
                        ) : (
                            // Fallback links
                            <>
                                <Link href="/" onClick={onClose} className="text-2xl text-[var(--brand-ink)]">首頁</Link>
                                <Link href="/portfolio" onClick={onClose} className="text-2xl text-[var(--brand-ink)]">作品集</Link>
                                <Link href="/contact-us" onClick={onClose} className="text-2xl text-[var(--brand-ink)]">聯繫我們</Link>
                            </>
                        )}
                    </nav>

                    {/* Footer Info */}
                    <div className={`mt-12 text-center transition-opacity duration-700 delay-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
                        <div className="text-[var(--brand-red)] mb-3">
                            <i className="ph-fill ph-seal text-3xl"></i>
                        </div>
                        <p className="text-xs text-[var(--brand-gray)] tracking-widest font-sans">
                            GOOD THINGS DIGITAL
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
