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
      next: { revalidate: 3600 }, // Cache for 1 hour
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
  
  // Remove domain and get path only
  try {
    const urlObj = new URL(url);
    return urlObj.pathname || '/';
  } catch {
    return url.startsWith('/') ? url : '/';
  }
}

// Build menu tree (handle parent-child relationships)
function buildMenuTree(items: MenuItem[]): MenuItem[] {
  // Only return top-level items (no parent)
  return items
    .filter(item => !item.parentId)
    .sort((a, b) => (a.order || 0) - (b.order || 0));
}

export default async function Header() {
  const data = await fetchMenu();
  const menuItems = data?.menuItems?.nodes || [];
  const topLevelItems = buildMenuTree(menuItems);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ohya.co
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {topLevelItems.length > 0 ? (
              topLevelItems.map((item) => (
                <Link
                  key={item.id}
                  href={toInternalPath(item.url, item.path)}
                  className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
                >
                  {item.label}
                </Link>
              ))
            ) : (
              // Fallback navigation if no menu data
              <>
                <Link href="/" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                  首頁
                </Link>
                <Link href="/about" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                  關於我們
                </Link>
                <Link href="/services" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                  服務項目
                </Link>
                <Link href="/contact" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                  聯絡我們
                </Link>
              </>
            )}
          </nav>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden sm:inline-flex px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
            >
              免費諮詢
            </Link>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="md:hidden p-2 text-gray-600 hover:text-gray-900"
              aria-label="開啟選單"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
