async function testQuery() {
    const slug = 'trust-building-strategy';

    // Test 1: Page with URI
    const pageUri = `/${slug}/`;
    const pageQuery = `
    query GetPageBySlug($slug: ID!) {
      page(id: $slug, idType: URI) {
        id
        title
        slug
      }
    }
  `;

    // Test 2: Post with SLUG
    const postQuery = `
    query GetPostBySlug($slug: ID!) {
      post(id: $slug, idType: SLUG) {
        id
        title
        slug
        uri
      }
    }
  `;

    const results = [];

    // Test Page
    try {
        const pageRes = await fetch(process.env.NEXT_PUBLIC_WORDPRESS_API_URL as string, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query: pageQuery, variables: { slug: pageUri } }),
        });
        const pageData = await pageRes.json();
        results.push({ type: 'Page (URI)', query: pageUri, result: pageData });
    } catch (e) {
        results.push({ type: 'Page (URI)', error: String(e) });
    }

    // Test Post with SLUG
    try {
        const postRes = await fetch(process.env.NEXT_PUBLIC_WORDPRESS_API_URL as string, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query: postQuery, variables: { slug } }),
        });
        const postData = await postRes.json();
        results.push({ type: 'Post (SLUG)', query: slug, result: postData });
    } catch (e) {
        results.push({ type: 'Post (SLUG)', error: String(e) });
    }

    // Test Post with URI
    try {
        const postUriQuery = `
      query GetPostBySlug($slug: ID!) {
        post(id: $slug, idType: URI) {
          id
          title
          slug
          uri
        }
      }
    `;
        const postUriRes = await fetch(process.env.NEXT_PUBLIC_WORDPRESS_API_URL as string, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query: postUriQuery, variables: { slug: pageUri } }),
        });
        const postUriData = await postUriRes.json();
        results.push({ type: 'Post (URI)', query: pageUri, result: postUriData });
    } catch (e) {
        results.push({ type: 'Post (URI)', error: String(e) });
    }

    return results;
}

export default async function DebugPage() {
    const results = await testQuery();

    return (
        <main className="p-10 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">GraphQL Query Debug</h1>

            {results.map((result, index) => (
                <div key={index} className="mb-8 p-6 bg-gray-50 rounded-lg text-black">
                    <h2 className="text-xl font-bold mb-2">{result.type}</h2>
                    <div className="mb-2 text-sm text-gray-600">
                        Query: <code className="bg-white px-2 py-1 rounded">{result.query}</code>
                    </div>
                    <pre className="bg-white p-4 rounded overflow-auto text-xs">
                        {JSON.stringify(result.result || result.error, null, 2)}
                    </pre>
                </div>
            ))}
        </main>
    );
}
