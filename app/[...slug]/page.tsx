import { notFound } from 'next/navigation';
import type {
  GetPageBySlugQuery,
  GetPostBySlugQuery,
  GetAllPostSlugsQuery,
  GetAllPageSlugsQuery
} from '@/gql/graphql';

// GraphQL Queries
const GET_PAGE_BY_URI = `
  query GetPageBySlug($slug: ID!) {
    page(id: $slug, idType: URI) {
      id
      title
      content
      slug
      uri
      date
      modified
      featuredImage {
        node {
          sourceUrl
          altText
          mediaDetails {
            width
            height
          }
        }
      }
    }
  }
`;

const GET_POST_BY_URI = `
  query GetPostBySlug($slug: ID!) {
    post(id: $slug, idType: URI) {
      id
      title
      content
      slug
      uri
      date
      modified
      excerpt
      featuredImage {
        node {
          sourceUrl
          altText
          mediaDetails {
            width
            height
          }
        }
      }
      categories {
        nodes {
          name
          slug
          uri
        }
      }
      tags {
        nodes {
          name
          slug
        }
      }
    }
  }
`;

// Fetch helper
async function fetchGraphQL(query: string, variables?: Record<string, any>) {
  const res = await fetch(process.env.NEXT_PUBLIC_WORDPRESS_API_URL as string, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables }),
    next: { revalidate: 60 },
  } as RequestInit & { next?: { revalidate?: number } });

  if (!res.ok) {
    throw new Error('Failed to fetch from GraphQL');
  }

  return res.json();
}

// Fetch content (Page first, then Post)
async function fetchContent(uri: string) {
  // Try Page first
  const pageData = await fetchGraphQL(GET_PAGE_BY_URI, { slug: uri });

  if (pageData.data?.page) {
    return { type: 'page' as const, data: pageData.data as GetPageBySlugQuery };
  }

  // Fallback to Post
  const postData = await fetchGraphQL(GET_POST_BY_URI, { slug: uri });

  if (postData.data?.post) {
    return { type: 'post' as const, data: postData.data as GetPostBySlugQuery };
  }

  return null;
}

// Main page component
export default async function ContentPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;

  // Reconstruct URI: /path/to/page/
  const uri = `/${slug.join('/')}/`;

  const content = await fetchContent(uri);

  if (!content) {
    notFound();
  }

  const { type, data } = content;
  const item = type === 'page' ? data.page : data.post;

  if (!item) {
    notFound();
  }

  const featuredImage = item.featuredImage?.node;

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      {/* Featured Image */}
      {featuredImage && (
        <div className="mb-8">
          <img
            src={featuredImage.sourceUrl || ''}
            alt={featuredImage.altText || item.title || ''}
            className="w-full h-auto rounded-lg"
          />
        </div>
      )}

      {/* Title */}
      <h1 className="text-4xl font-bold mb-4">{item.title}</h1>

      {/* Post Meta */}
      {type === 'post' && 'categories' in data.post! && (
        <div className="mb-6 text-gray-600 flex gap-4">
          <time dateTime={item.date || ''}>
            {item.date ? new Date(item.date).toLocaleDateString('zh-TW') : ''}
          </time>
          {data.post!.categories?.nodes && data.post!.categories.nodes.length > 0 && (
            <div className="flex gap-2">
              {data.post!.categories.nodes.map((cat: any, index: number) => (
                <span key={index} className="bg-gray-100 px-3 py-1 rounded text-sm">
                  {cat?.name}
                </span>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Content */}
      <div
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: item.content || '' }}
      />

      {/* Tags (for posts only) */}
      {type === 'post' && data.post && (data.post as any).tags?.nodes && (data.post as any).tags.nodes.length > 0 && (
        <div className="mt-8 pt-6 border-t">
          <div className="flex flex-wrap gap-2">
            {(data.post as any).tags.nodes.map((tag: any, index: number) => (
              <span key={index} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                #{tag?.name}
              </span>
            ))}
          </div>
        </div>
      )}
    </main>
  );
}
