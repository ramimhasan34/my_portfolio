import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

// Initialize Sanity client with your credentials
if (!import.meta.env.VITE_SANITY_PROJECT_ID || !import.meta.env.VITE_SANITY_DATASET) {
  console.warn(
    'Sanity env vars missing: set VITE_SANITY_PROJECT_ID and VITE_SANITY_DATASET.'
  );
}

export const sanityClient = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET,
  apiVersion: '2024-01-01',
  useCdn: true,
  token: import.meta.env.VITE_SANITY_API_TOKEN,
});

// Image URL builder
const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source: SanityImageSource) => builder.image(source);

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
  image?: SanityImageSource;
  publishedAt: string;
  category?: string;
  readingTime?: number;
  readTime?: number;
  excerpt?: string;
  content?: string;
}
