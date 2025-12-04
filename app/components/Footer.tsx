import Link from 'next/link';

export default async function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-12 px-6 thin-border border-t text-center md:text-left bg-[var(--muji-bg)]">
            <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-[var(--muji-gray)] tracking-[0.3em]">
                <div className="mb-4 md:mb-0">
                    © {currentYear} 好事發生數位
                </div>
                <div className="flex space-x-8">
                    <Link
                        href="https://www.linkedin.com/company/ohya"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[var(--muji-ink)] transition-colors"
                    >
                        LINKEDIN
                    </Link>
                    <Link
                        href="https://medium.com/@ohya"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[var(--muji-ink)] transition-colors"
                    >
                        MEDIUM
                    </Link>
                </div>
            </div>
        </footer>
    );
}
