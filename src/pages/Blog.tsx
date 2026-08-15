import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useSanityBlogPosts } from "@/hooks/use-sanity-blog";
import { urlFor, SanityBlogPost } from "@/lib/sanity";
import { fallbackBlogPosts } from "@/lib/fallback-blog-posts";

const Blog = () => {
  const { posts: sanityPosts, loading, error } = useSanityBlogPosts();
  const [displayPosts, setDisplayPosts] = useState<Array<SanityBlogPost | typeof fallbackBlogPosts[0]>>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Use Sanity posts if available, otherwise use fallback data
  useEffect(() => {
    if (sanityPosts && sanityPosts.length > 0) {
      setDisplayPosts(sanityPosts);
    } else if (!loading) {
      // If Sanity posts are empty or not loading, use fallback
      setDisplayPosts(fallbackBlogPosts);
    }
  }, [sanityPosts, loading]);

  const formatDate = (dateString: string) => {
    if (!dateString) {
      return "";
    }
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getPlainText = (body: unknown) => {
    if (!Array.isArray(body)) {
      return "";
    }

    return body
      .filter((block) => block?._type === "block" && Array.isArray(block.children))
      .map((block) =>
        block.children
          .map((child: { text?: string }) => child.text || "")
          .join("")
      )
      .join(" ");
  };

  const getExcerpt = (post: typeof displayPosts[0]) => {
    // Priority: excerpt field > first paragraph of body > content field
    if (post?.excerpt) {
      return post.excerpt;
    }

    const bodyText = getPlainText(post?.body);
    const source = bodyText || post?.content || "";
    return source ? `${source.slice(0, 200)}${source.length > 200 ? "..." : ""}` : "";
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-primary hover:text-foreground transition-colors mb-6"
            >
              <ArrowLeft size={18} />
              <span>Back to Home</span>
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
              Lab, Life &amp; <span className="text-gradient">Luggage</span>
            </h1>
            <div className="w-16 h-1 bg-primary rounded-full mb-4" />
            <p className="text-lg text-muted-foreground max-w-2xl">
              Collection of thoughts on research, personal experiences, and traveling to beautiful places around the globe.
            </p>
            {loading && <p className="text-sm text-muted-foreground mt-4">Loading blog posts...</p>}
            {error && <p className="text-sm text-destructive mt-4">Error loading posts. Showing cached content.</p>}
          </motion.div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {displayPosts.map((post, index) => (
              <motion.article
                key={post._id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group card-glass rounded-xl overflow-hidden hover:glow-primary transition-all duration-300 flex flex-col h-full"
              >
                {/* Image Header - if available */}
                {post.image && (
                  <div className="relative w-full h-48 overflow-hidden bg-muted">
                    <img 
                      src={urlFor(post.image).width(800).height(400).url()} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {post.category && (
                      <span className="absolute top-4 left-4 px-3 py-1 bg-primary/90 backdrop-blur-sm text-xs font-semibold text-primary-foreground uppercase tracking-wider rounded-full">
                        {post.category}
                      </span>
                    )}
                  </div>
                )}

                <div className="p-6 flex flex-col flex-grow">
                  {/* Category badge if no image */}
                  {!post.image && post.category && (
                    <span className="inline-flex items-center w-fit px-3 py-1 mb-4 bg-primary/10 text-xs font-semibold text-primary uppercase tracking-wider rounded-full">
                      {post.category}
                    </span>
                  )}

                  {/* Title */}
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h2>

                  {/* Meta Info */}
                  <div className="flex items-center gap-3 mb-4 flex-wrap text-xs text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={14} />
                      <span>{formatDate(post.publishedAt)}</span>
                    </div>
                    {(post.readingTime || post.readTime) && (
                      <>
                        <span>•</span>
                        <div className="flex items-center gap-1.5">
                          <Clock size={14} />
                          <span>{post.readingTime || post.readTime} min read</span>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Excerpt */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6 line-clamp-3 flex-grow">
                    {getExcerpt(post)}
                  </p>

                  {/* Read More Link */}
                  {post?.slug?.current ? (
                    <Link
                      to={`/blog/${post.slug.current}`}
                      className="inline-flex items-center gap-2 text-sm text-primary hover:text-foreground transition-colors font-medium group/link"
                    >
                      <span>Read Full Article</span>
                      <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                    </Link>
                  ) : (
                    <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                      <span>Read Full Article</span>
                      <span>→</span>
                    </span>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
