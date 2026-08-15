import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useSanityBlogPostBySlug } from "@/hooks/use-sanity-blog";
import { urlFor } from "@/lib/sanity";
import { fallbackBlogPosts } from "@/lib/fallback-blog-posts";

const BlogDetails = () => {
  const { slug } = useParams();
  const { post, loading, error } = useSanityBlogPostBySlug(slug || "");
  const fallbackPost = fallbackBlogPosts.find(
    (item) => item.slug.current === slug
  );
  const displayPost = post || fallbackPost;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const formatDate = (dateString?: string) => {
    if (!dateString) {
      return "";
    }
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
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
      .join("\n\n");
  };

  const renderBody = () => {
    const bodyText = getPlainText(displayPost?.body);
    const source = bodyText || displayPost?.content || "";
    if (!source) {
      return null;
    }

    return source.split("\n\n").map((paragraph, index) => (
      <p key={`${displayPost?._id || "post"}-${index}`} className="mb-4">
        {paragraph}
      </p>
    ));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-3xl">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-primary hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft size={18} />
            <span>Back to Blog</span>
          </Link>

          {loading && (
            <p className="text-sm text-muted-foreground">Loading post...</p>
          )}
          {error && !displayPost && (
            <p className="text-sm text-destructive">Failed to load post.</p>
          )}

          {!loading && !displayPost && !error && (
            <p className="text-sm text-muted-foreground">Post not found.</p>
          )}

          {displayPost && (
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="card-glass rounded-xl p-8"
            >
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                {displayPost?.category && (
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                    {displayPost.category}
                  </span>
                )}
                {displayPost?.category && (
                  <span className="text-xs text-muted-foreground">•</span>
                )}
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar size={12} />
                  <span>{formatDate(displayPost.publishedAt)}</span>
                </div>
                {(displayPost?.readingTime || displayPost?.readTime) && (
                  <span className="text-xs text-muted-foreground">•</span>
                )}
                {(displayPost?.readingTime || displayPost?.readTime) && (
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock size={12} />
                    <span>
                      {displayPost.readingTime || displayPost.readTime} min read
                    </span>
                  </div>
                )}
              </div>

              <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                {displayPost.title}
              </h1>

              {/* Featured Image */}
              {displayPost.image && (
                <div className="relative w-full h-64 md:h-96 overflow-hidden rounded-lg mb-8">
                  <img
                    src={urlFor(displayPost.image).width(1200).height(600).url()}
                    alt={displayPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <div className="prose prose-invert max-w-none text-secondary-foreground leading-relaxed">
                {renderBody()}
              </div>
            </motion.article>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogDetails;
