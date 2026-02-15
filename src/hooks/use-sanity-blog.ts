import { useState, useEffect } from 'react';
import { sanityClient, SanityBlogPost, sanityQueries } from '@/lib/sanity';

export const useSanityBlogPosts = () => {
  const [posts, setPosts] = useState<SanityBlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const query = sanityQueries.getAllBlogPosts;
        const data = await sanityClient.fetch(query);
        setPosts(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch blog posts');
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return { posts, loading, error };
};

export const useSanityBlogPostBySlug = (slug: string) => {
  const [post, setPost] = useState<SanityBlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;

    const fetchPost = async () => {
      try {
        setLoading(true);
        const query = sanityQueries.getBlogPostBySlug(slug);
        const data = await sanityClient.fetch(query);
        setPost(data || null);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch blog post');
        setPost(null);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  return { post, loading, error };
};

export const useSanityBlogPostsByCategory = (category: string) => {
  const [posts, setPosts] = useState<SanityBlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!category) return;

    const fetchPosts = async () => {
      try {
        setLoading(true);
        const query = sanityQueries.getBlogPostsByCategory(category);
        const data = await sanityClient.fetch(query);
        setPosts(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch blog posts');
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [category]);

  return { posts, loading, error };
};
