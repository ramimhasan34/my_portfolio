import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;
const dataset = import.meta.env.VITE_SANITY_DATASET;

if (!projectId || !dataset) {
  console.warn(
    'Sanity env vars missing: set VITE_SANITY_PROJECT_ID and VITE_SANITY_DATASET.'
  );
}

const hasSanityConfig = Boolean(projectId && dataset);

export const sanityClient = hasSanityConfig
  ? createClient({
      projectId,
      dataset,
      apiVersion: '2024-01-01',
      useCdn: true,
      token: import.meta.env.VITE_SANITY_API_TOKEN,
    })
  : null;

const emptyImageUrlBuilder = {
  width() {
    return this;
  },
  height() {
    return this;
  },
  url() {
    return '';
  },
};

// Image URL builder
const builder = sanityClient ? imageUrlBuilder(sanityClient) : null;

export const urlFor = (source: Record<string, unknown>) =>
  builder ? builder.image(source) : (emptyImageUrlBuilder as never);

// Queries
export const sanityQueries = {
  // Fetch all blog posts
  getAllBlogPosts: `
    *[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      body,
      image,
      publishedAt,
    }
  `,
  
  // Fetch a single blog post by slug
  getBlogPostBySlug: (slug: string) => `
    *[_type == "post" && slug.current == "${slug}"][0] {
      _id,
      title,
      slug,
      body,
      image,
      publishedAt,
    }
  `,
  
  // Fetch blog posts by category
  getBlogPostsByCategory: (category: string) => `
    *[_type == "post" && category == "${category}"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      body,
      image,
      publishedAt,
    }
  `,
};

export interface SanityBlogPost {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  body?: Array<{ _type?: string; children?: Array<{ text?: string }> }>;
  image?: Record<string, unknown>;
  publishedAt: string;
  category?: string;
  readingTime?: number;
  readTime?: number;
  excerpt?: string;
  content?: string;
}
