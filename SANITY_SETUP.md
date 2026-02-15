# Sanity CMS Integration Guide

This portfolio now uses **Sanity CMS** for managing blog posts. This guide explains the setup and how to manage your blog.

## Setup Completed ✓

Your portfolio has been configured with Sanity CMS integration:

- **Project ID:** `uhyy32de`
- **Organization ID:** `ocNBoPJsW`
- **Dataset:** `production`
- **API Token:** Stored securely in `.env.local`

## Installation

The necessary packages have been installed:

```bash
npm install @sanity/client @sanity/image-url
```

## Configuration Files Created

1. **`src/lib/sanity.ts`** - Sanity client setup and queries
2. **`src/hooks/use-sanity-blog.ts`** - React hooks for fetching blog data
3. **`.env.local`** - Environment variables with credentials (ignored by Git)

## How It Works

### Blog Page (`src/pages/Blog.tsx`)

- The blog page now fetches posts from Sanity CMS
- Falls back to cached/hardcoded data if Sanity is unavailable
- Displays loading and error states

### Key Functions

#### Fetch All Blog Posts

```typescript
import { useSanityBlogPosts } from "@/hooks/use-sanity-blog";

const MyComponent = () => {
  const { posts, loading, error } = useSanityBlogPosts();
  // Use posts...
};
```

#### Fetch Post by Slug

```typescript
import { useSanityBlogPostBySlug } from "@/hooks/use-sanity-blog";

const { post, loading, error } = useSanityBlogPostBySlug("post-slug");
```

#### Fetch Posts by Category

```typescript
import { useSanityBlogPostsByCategory } from "@/hooks/use-sanity-blog";

const { posts, loading, error } =
  useSanityBlogPostsByCategory("Bioinformatics");
```

## Creating Blog Posts in Sanity

### Required Schema Fields

Each blog post should have:

```javascript
{
  _type: 'post',
  title: 'Post Title',
  slug: { current: 'post-slug' },
  excerpt: 'Brief description of the post',
  content: 'Full content of the blog post',
  publishedAt: '2026-01-15',
  readingTime: 5, // estimated reading time in minutes
  category: 'Category Name',
  author: 'Author Name', // optional
  mainImage: { /* image asset */ } // optional
}
```

### Sanity Studio

To manage your blog posts, you can:

1. Visit your Sanity project dashboard at: https://manage.sanity.io
2. Create a new post type (if not already done)
3. Add blog posts through the Sanity Studio interface

## Environment Variables

The following variables are configured in `.env.local`:

- `VITE_SANITY_PROJECT_ID` - Your Sanity project ID
- `VITE_SANITY_DATASET` - Your dataset name (production)
- `VITE_SANITY_API_TOKEN` - Your API token for content delivery

These variables are used by the Sanity client to fetch your content.

## Image Handling

The `urlFor()` function from `src/lib/sanity.ts` generates optimized image URLs:

```typescript
import { urlFor } from '@/lib/sanity';

<img src={urlFor(post.mainImage).url()} alt={post.title} />
```

## Security Notes

- `*.local` files are ignored by Git - keep your API token safe
- The token used is read-only, so it's safe to use in frontend code
- Never commit `.env.local` to version control

## Troubleshooting

### Blog posts not loading?

1. Check that your Sanity project has blog posts created
2. Verify the API token is correct in `.env.local`
3. Check browser console for errors
4. The fallback data will be shown if Sanity is unavailable

### Image not displaying?

1. Ensure the image is properly uploaded in Sanity
2. Check that the image asset reference is correct in the post
3. Verify the image URL is being generated with `urlFor()`

## Next Steps

1. Set up your Sanity Studio dashboard
2. Create your first blog posts
3. Test the integration by viewing the blog page
4. Customize the schema if needed

For more information, visit:

- Sanity Documentation: https://www.sanity.io/docs
- Sanity Client Documentation: https://www.sanity.io/docs/js-client
