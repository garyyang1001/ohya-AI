import HeaderContent from './HeaderContent';
import { MenuItem, MenuItemWithChildren } from './MobileMenu';

// Types
interface MenuData {
  menus: {
    nodes: {
      menuItems: {
        nodes: MenuItem[];
      };
    }[];
  };
}

// GraphQL Query - 抓取 MENU_1 (Home menu)
const GET_HEADER_MENU = `
  query GetHeaderMenu {
    menus(where: { location: MENU_1 }) {
      nodes {
        menuItems(first: 30) {
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
    }
  }
`;

// Fetch menu data
async function fetchMenu(): Promise<MenuItem[]> {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_WORDPRESS_API_URL as string, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: GET_HEADER_MENU }),
      next: { revalidate: 3600 },
    });

    if (!res.ok) return [];

    const json = await res.json();
    const data = json.data as MenuData;
    return data?.menus?.nodes?.[0]?.menuItems?.nodes || [];
  } catch {
    return [];
  }
}

// Build hierarchical menu tree
function buildMenuTree(items: MenuItem[]): MenuItemWithChildren[] {
  const itemMap = new Map<string, MenuItemWithChildren>();
  const roots: MenuItemWithChildren[] = [];

  items.forEach(item => {
    itemMap.set(item.id, { ...item, children: [] });
  });

  items.forEach(item => {
    const node = itemMap.get(item.id)!;
    if (item.parentId) {
      const parent = itemMap.get(item.parentId);
      if (parent) {
        parent.children.push(node);
      }
    } else {
      roots.push(node);
    }
  });

  const sortByOrder = (a: MenuItemWithChildren, b: MenuItemWithChildren) =>
    (a.order || 0) - (b.order || 0);

  roots.sort(sortByOrder);
  roots.forEach(root => root.children.sort(sortByOrder));

  return roots;
}

export default async function Header() {
  const menuItems = await fetchMenu();
  const menuTree = buildMenuTree(menuItems);

  return <HeaderContent menuTree={menuTree} />;
}
