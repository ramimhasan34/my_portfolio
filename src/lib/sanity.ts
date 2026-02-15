import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Initialize Sanity client with your credentials
export const sanityClient = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || 'uhyy32de',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
  token: import.meta.env.VITE_SANITY_API_TOKEN || 'skyoJfuMCH9VljsTX41WTUVNEy9bjC0HTvQx0YKpaBOcTSqMC0a6b0giaqv3OzfVFGrJ4cgUPUb2Ukioh2qVa7nQicgJi1loSre2VX7JOm9v0I22uhbnLzBmfR0KUjO8sNxZlzRhF0TOxrvaZPd7freIUIQhzMGHb3bZ2ZrJAxKpR7pvOeRZ',
});

// Image URL builder
const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source: any) => builder.image(source);

// Queries
export const sanityQueries = {
  // Fetch all blog posts
  getAllBlogPosts: `
    *[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      content,
      publishedAt,
      readingTime,
      category,
      author,
      mainImage,
    }
  `,
  
  // Fetch a single blog post by slug
  getBlogPostBySlug: (slug: string) => `
    *[_type == "post" && slug.current == "${slug}"][0] {
      _id,
      title,
      slug,
      excerpt,
      content,
      publishedAt,
      readingTime,
      category,
      author,
      mainImage,
    }
  `,
  
  // Fetch blog posts by category
  getBlogPostsByCategory: (category: string) => `
    *[_type == "post" && category == "${category}"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      content,
      publishedAt,
      readingTime,
      category,
      author,
      mainImage,
    }
  `,
};

export interface SanityBlogPost {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  excerpt: string;
  content: string;
  publishedAt: string;
  readingTime?: number;
  category: string;
  author?: string;
  mainImage?: any;
}
