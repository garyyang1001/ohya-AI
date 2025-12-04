/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "query GetPageBySlug($slug: ID!) {\n  page(id: $slug, idType: URI) {\n    id\n    title\n    content\n    slug\n    uri\n    date\n    modified\n    featuredImage {\n      node {\n        sourceUrl\n        altText\n        mediaDetails {\n          width\n          height\n        }\n      }\n    }\n  }\n}\n\nquery GetPostBySlug($slug: ID!) {\n  post(id: $slug, idType: SLUG) {\n    id\n    title\n    content\n    slug\n    uri\n    date\n    modified\n    excerpt\n    featuredImage {\n      node {\n        sourceUrl\n        altText\n        mediaDetails {\n          width\n          height\n        }\n      }\n    }\n    categories {\n      nodes {\n        name\n        slug\n        uri\n      }\n    }\n    tags {\n      nodes {\n        name\n        slug\n      }\n    }\n  }\n}\n\nquery GetAllPostSlugs {\n  posts(first: 1000) {\n    nodes {\n      slug\n    }\n  }\n}\n\nquery GetAllPageSlugs {\n  pages(first: 1000) {\n    nodes {\n      slug\n    }\n  }\n}": typeof types.GetPageBySlugDocument,
    "query GetHomepageContent {\n  posts(first: 6, where: {orderby: {field: DATE, order: DESC}}) {\n    nodes {\n      id\n      title\n      excerpt\n      slug\n      uri\n      date\n      featuredImage {\n        node {\n          sourceUrl\n          altText\n          mediaDetails {\n            width\n            height\n          }\n        }\n      }\n      categories {\n        nodes {\n          name\n          slug\n        }\n      }\n    }\n  }\n  generalSettings {\n    title\n    description\n  }\n}": typeof types.GetHomepageContentDocument,
    "query GetPostsAndSiteInfo {\n  posts(first: 5) {\n    nodes {\n      title\n      date\n    }\n  }\n  generalSettings {\n    title\n    description\n  }\n}": typeof types.GetPostsAndSiteInfoDocument,
    "query AnalyzeSiteStructure {\n  contentTypes {\n    nodes {\n      name\n      label\n      graphqlSingleName\n      graphqlPluralName\n    }\n  }\n  categories(first: 20) {\n    nodes {\n      name\n      slug\n      count\n    }\n  }\n  tags(first: 20) {\n    nodes {\n      name\n      slug\n      count\n    }\n  }\n  pages(first: 50) {\n    nodes {\n      title\n      slug\n      uri\n      parentId\n    }\n  }\n  posts(first: 10) {\n    nodes {\n      title\n      slug\n      uri\n      date\n      categories {\n        nodes {\n          name\n          slug\n        }\n      }\n    }\n  }\n  menus {\n    nodes {\n      name\n      slug\n      locations\n    }\n  }\n}": typeof types.AnalyzeSiteStructureDocument,
};
const documents: Documents = {
    "query GetPageBySlug($slug: ID!) {\n  page(id: $slug, idType: URI) {\n    id\n    title\n    content\n    slug\n    uri\n    date\n    modified\n    featuredImage {\n      node {\n        sourceUrl\n        altText\n        mediaDetails {\n          width\n          height\n        }\n      }\n    }\n  }\n}\n\nquery GetPostBySlug($slug: ID!) {\n  post(id: $slug, idType: SLUG) {\n    id\n    title\n    content\n    slug\n    uri\n    date\n    modified\n    excerpt\n    featuredImage {\n      node {\n        sourceUrl\n        altText\n        mediaDetails {\n          width\n          height\n        }\n      }\n    }\n    categories {\n      nodes {\n        name\n        slug\n        uri\n      }\n    }\n    tags {\n      nodes {\n        name\n        slug\n      }\n    }\n  }\n}\n\nquery GetAllPostSlugs {\n  posts(first: 1000) {\n    nodes {\n      slug\n    }\n  }\n}\n\nquery GetAllPageSlugs {\n  pages(first: 1000) {\n    nodes {\n      slug\n    }\n  }\n}": types.GetPageBySlugDocument,
    "query GetHomepageContent {\n  posts(first: 6, where: {orderby: {field: DATE, order: DESC}}) {\n    nodes {\n      id\n      title\n      excerpt\n      slug\n      uri\n      date\n      featuredImage {\n        node {\n          sourceUrl\n          altText\n          mediaDetails {\n            width\n            height\n          }\n        }\n      }\n      categories {\n        nodes {\n          name\n          slug\n        }\n      }\n    }\n  }\n  generalSettings {\n    title\n    description\n  }\n}": types.GetHomepageContentDocument,
    "query GetPostsAndSiteInfo {\n  posts(first: 5) {\n    nodes {\n      title\n      date\n    }\n  }\n  generalSettings {\n    title\n    description\n  }\n}": types.GetPostsAndSiteInfoDocument,
    "query AnalyzeSiteStructure {\n  contentTypes {\n    nodes {\n      name\n      label\n      graphqlSingleName\n      graphqlPluralName\n    }\n  }\n  categories(first: 20) {\n    nodes {\n      name\n      slug\n      count\n    }\n  }\n  tags(first: 20) {\n    nodes {\n      name\n      slug\n      count\n    }\n  }\n  pages(first: 50) {\n    nodes {\n      title\n      slug\n      uri\n      parentId\n    }\n  }\n  posts(first: 10) {\n    nodes {\n      title\n      slug\n      uri\n      date\n      categories {\n        nodes {\n          name\n          slug\n        }\n      }\n    }\n  }\n  menus {\n    nodes {\n      name\n      slug\n      locations\n    }\n  }\n}": types.AnalyzeSiteStructureDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetPageBySlug($slug: ID!) {\n  page(id: $slug, idType: URI) {\n    id\n    title\n    content\n    slug\n    uri\n    date\n    modified\n    featuredImage {\n      node {\n        sourceUrl\n        altText\n        mediaDetails {\n          width\n          height\n        }\n      }\n    }\n  }\n}\n\nquery GetPostBySlug($slug: ID!) {\n  post(id: $slug, idType: SLUG) {\n    id\n    title\n    content\n    slug\n    uri\n    date\n    modified\n    excerpt\n    featuredImage {\n      node {\n        sourceUrl\n        altText\n        mediaDetails {\n          width\n          height\n        }\n      }\n    }\n    categories {\n      nodes {\n        name\n        slug\n        uri\n      }\n    }\n    tags {\n      nodes {\n        name\n        slug\n      }\n    }\n  }\n}\n\nquery GetAllPostSlugs {\n  posts(first: 1000) {\n    nodes {\n      slug\n    }\n  }\n}\n\nquery GetAllPageSlugs {\n  pages(first: 1000) {\n    nodes {\n      slug\n    }\n  }\n}"): typeof import('./graphql').GetPageBySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetHomepageContent {\n  posts(first: 6, where: {orderby: {field: DATE, order: DESC}}) {\n    nodes {\n      id\n      title\n      excerpt\n      slug\n      uri\n      date\n      featuredImage {\n        node {\n          sourceUrl\n          altText\n          mediaDetails {\n            width\n            height\n          }\n        }\n      }\n      categories {\n        nodes {\n          name\n          slug\n        }\n      }\n    }\n  }\n  generalSettings {\n    title\n    description\n  }\n}"): typeof import('./graphql').GetHomepageContentDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetPostsAndSiteInfo {\n  posts(first: 5) {\n    nodes {\n      title\n      date\n    }\n  }\n  generalSettings {\n    title\n    description\n  }\n}"): typeof import('./graphql').GetPostsAndSiteInfoDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query AnalyzeSiteStructure {\n  contentTypes {\n    nodes {\n      name\n      label\n      graphqlSingleName\n      graphqlPluralName\n    }\n  }\n  categories(first: 20) {\n    nodes {\n      name\n      slug\n      count\n    }\n  }\n  tags(first: 20) {\n    nodes {\n      name\n      slug\n      count\n    }\n  }\n  pages(first: 50) {\n    nodes {\n      title\n      slug\n      uri\n      parentId\n    }\n  }\n  posts(first: 10) {\n    nodes {\n      title\n      slug\n      uri\n      date\n      categories {\n        nodes {\n          name\n          slug\n        }\n      }\n    }\n  }\n  menus {\n    nodes {\n      name\n      slug\n      locations\n    }\n  }\n}"): typeof import('./graphql').AnalyzeSiteStructureDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
