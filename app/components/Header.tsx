import Link from 'next/link';

// Types
interface MenuItem {
  id: string;
  label: string | null;
  url: string | null;
  path: string | null;
  parentId: string | null;
  order: number | null;
}

interface MenuData {
  menuItems: {
    nodes: MenuItem[];
  };
}

// GraphQL Query
const GET_HEADER_MENU = `
  query GetHeaderMenu {
    menuItems(where: { location: PRIMARY }, first: 20) {
      nodes {
        id
        label
        url
        path
        parentId
        order
      }
    }
  }
`;

// Fetch menu data
async function fetchMenu(): Promise<MenuData | null> {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_WORDPRESS_API_URL as string, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: GET_HEADER_MENU }),
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

// Build menu tree
function buildMenuTree(items: MenuItem[]): MenuItem[] {
  return items
    .filter(item => !item.parentId)
    .sort((a, b) => (a.order || 0) - (b.order || 0));
}

export default async function Header() {
  const data = await fetchMenu();
  const menuItems = data?.menuItems?.nodes || [];
  const topLevelItems = buildMenuTree(menuItems);

  return (
    <header className="fixed w-full z-50 top-0 left-0 px-6 py-6 bg-[var(--muji-bg)]/95 backdrop-blur-sm thin-border border-b">
      <div className="max-w-[1600px] mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl tracking-[0.2em] font-medium text-[var(--muji-ink)] hover:opacity-70 transition-opacity"
        >
          好事發生<span className="text-xs align-top ml-1">數位</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-12 text-sm tracking-[0.3em] text-[var(--muji-gray)]">
          {topLevelItems.length > 0 ? (
            topLevelItems.map((item) => (
              <Link
                key={item.id}
                href={toInternalPath(item.url, item.path)}
                className="hover:text-[var(--muji-ink)] transition-colors duration-300"
              >
                {item.label}
              </Link>
            ))
          ) : (
            // Fallback navigation
            <>
              <Link href="/blog" className="hover:text-[var(--muji-ink)] transition-colors duration-300">
                文章
              </Link>
              <Link href="/about" className="hover:text-[var(--muji-ink)] transition-colors duration-300">
                關於
              </Link>
              <Link href="/contact" className="hover:text-[var(--muji-ink)] transition-colors duration-300">
                聯繫
              </Link>
            </>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden text-[var(--muji-ink)] hover:opacity-70 transition-opacity"
          aria-label="開啟選單"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}

