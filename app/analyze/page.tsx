import type { AnalyzeSiteStructureQuery } from '@/gql/graphql';

const query = `
  query AnalyzeSiteStructure {
    # Get content types
    contentTypes {
      nodes {
        name
        label
        graphqlSingleName
        graphqlPluralName
      }
    }
    
    # Get categories
    categories(first: 20) {
      nodes {
        name
        slug
        count
      }
    }
    
    # Get tags
    tags(first: 20) {
      nodes {
        name
        slug
        count
      }
    }
    
    # Get all pages to understand structure
    pages(first: 50) {
      nodes {
        title
        slug
        uri
        parentId
      }
    }
    
    # Get recent posts to see URL pattern
    posts(first: 10) {
      nodes {
        title
        slug
        uri
        date
        categories {
          nodes {
            name
            slug
          }
        }
      }
    }
    
    # Get menus
    menus {
      nodes {
        name
        slug
        locations
      }
    }
  }
`;

async function analyzeSite() {
    const res = await fetch(process.env.NEXT_PUBLIC_WORDPRESS_API_URL as string, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
        next: { revalidate: 0 },
    });

    if (!res.ok) {
        throw new Error('Failed to fetch site structure');
    }

    const json = await res.json();
    return json.data as AnalyzeSiteStructureQuery;
}

export default async function AnalyzePage() {
    const data = await analyzeSite();

    return (
        <main className="p-10 max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">ohya.co 網站結構分析</h1>

            {/* Content Types */}
            <section className="mb-8 p-6 border rounded-lg bg-white text-black">
                <h2 className="text-2xl font-bold mb-4">內容類型 (Content Types)</h2>
                <div className="space-y-2">
                    {data.contentTypes?.nodes?.map((type, index) => (
                        <div key={index} className="p-3 bg-gray-50 rounded">
                            <strong>{type?.label}</strong>
                            <span className="text-gray-600 ml-2">({type?.name})</span>
                            <div className="text-sm text-gray-500">
                                GraphQL: {type?.graphqlSingleName} / {type?.graphqlPluralName}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Categories */}
            <section className="mb-8 p-6 border rounded-lg bg-white text-black">
                <h2 className="text-2xl font-bold mb-4">分類 (Categories)</h2>
                <div className="grid grid-cols-2 gap-3">
                    {data.categories?.nodes?.map((cat, index) => (
                        <div key={index} className="p-3 bg-gray-50 rounded">
                            <strong>{cat?.name}</strong>
                            <span className="text-gray-600 ml-2">/{cat?.slug}</span>
                            <span className="text-sm text-gray-500 ml-2">({cat?.count} 篇)</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Tags */}
            <section className="mb-8 p-6 border rounded-lg bg-white text-black">
                <h2 className="text-2xl font-bold mb-4">標籤 (Tags)</h2>
                <div className="grid grid-cols-3 gap-2">
                    {data.tags?.nodes?.map((tag, index) => (
                        <div key={index} className="p-2 bg-gray-50 rounded text-sm">
                            {tag?.name} <span className="text-gray-500">({tag?.count})</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Pages */}
            <section className="mb-8 p-6 border rounded-lg bg-white text-black">
                <h2 className="text-2xl font-bold mb-4">頁面 (Pages) - 共 {data.pages?.nodes?.length} 個</h2>
                <div className="space-y-2">
                    {data.pages?.nodes?.map((page, index) => (
                        <div key={index} className="p-3 bg-gray-50 rounded">
                            <strong>{page?.title}</strong>
                            <div className="text-sm text-gray-600">
                                URI: <code className="bg-gray-200 px-2 py-1 rounded">{page?.uri}</code>
                            </div>
                            {page?.parentId && (
                                <div className="text-xs text-gray-500">Parent ID: {page.parentId}</div>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* Posts */}
            <section className="mb-8 p-6 border rounded-lg bg-white text-black">
                <h2 className="text-2xl font-bold mb-4">最新文章 (Recent Posts)</h2>
                <div className="space-y-3">
                    {data.posts?.nodes?.map((post, index) => (
                        <div key={index} className="p-4 bg-gray-50 rounded">
                            <h3 className="font-bold">{post?.title}</h3>
                            <div className="text-sm text-gray-600 mt-1">
                                URI: <code className="bg-gray-200 px-2 py-1 rounded">{post?.uri}</code>
                            </div>
                            <div className="text-xs text-gray-500 mt-1">
                                分類: {post?.categories?.nodes?.map(c => c?.name).join(', ')}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Menus */}
            <section className="mb-8 p-6 border rounded-lg bg-white text-black">
                <h2 className="text-2xl font-bold mb-4">選單 (Menus)</h2>
                <div className="space-y-2">
                    {data.menus?.nodes?.map((menu, index) => (
                        <div key={index} className="p-3 bg-gray-50 rounded">
                            <strong>{menu?.name}</strong>
                            <span className="text-gray-600 ml-2">({menu?.slug})</span>
                            {menu?.locations && menu.locations.length > 0 && (
                                <div className="text-sm text-gray-500">
                                    Locations: {menu.locations.join(', ')}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
