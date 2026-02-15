import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useSanityBlogPosts } from "@/hooks/use-sanity-blog";

// Fallback data for when Sanity is not yet set up
const fallbackBlogPosts = [
  {
    _id: "1",
    title: "CRISPR-Cas9: Revolutionizing Gene Editing Technology",
    excerpt: "Explore how CRISPR-Cas9 is transforming biotechnology and opening new possibilities in medicine, agriculture, and beyond.",
    publishedAt: "2026-01-15",
    readingTime: 8,
    category: "Gene Editing",
    content: `CRISPR-Cas9 has emerged as one of the most groundbreaking technologies in modern biotechnology. This revolutionary gene-editing tool has transformed our ability to precisely modify DNA sequences, offering unprecedented opportunities in medicine, agriculture, and basic research.

The technology works by using a guide RNA to direct the Cas9 enzyme to a specific location in the genome, where it cuts the DNA. This allows scientists to delete, insert, or modify genes with remarkable precision. The simplicity and efficiency of CRISPR have made it accessible to laboratories worldwide.

In medicine, CRISPR is being explored for treating genetic disorders, cancer, and infectious diseases. Recent clinical trials have shown promising results in treating sickle cell disease and beta-thalassemia. The technology is also being used to develop more effective cancer immunotherapies.

Agricultural applications include developing drought-resistant crops, improving nutritional content, and creating disease-resistant plants. These advancements could play a crucial role in addressing food security challenges.

However, the technology also raises important ethical questions about human genome editing, off-target effects, and equitable access. As we continue to refine CRISPR technology, it's essential to balance innovation with responsible use.`,
    slug: { current: "crispr-revolutionizing-gene-editing" },
  },
  {
    _id: "2",
    title: "Finding Calm in New Places: Traveling Beyond the Familiar",
    excerpt: "Discover how traveling to different corners of the world--mountains, forests, coastlines, and quiet towns--offers perspective, inspiration, and a deeper connection with nature beyond everyday life.",
    publishedAt: "2026-01-10",
    readingTime: 7,
    category: "Travel & Nature",
    content: `Discover how traveling to different corners of the world--mountains, forests, coastlines, and quiet towns--offers perspective, inspiration, and a deeper connection with nature beyond everyday life.

Traveling is more than moving from one place to another; it is a way to slow down, observe, and reconnect with the world around us. From peaceful natural landscapes to vibrant local cultures, each journey brings new stories, reflections, and moments of clarity.`,
    slug: { current: "finding-calm-traveling-beyond-familiar" },
  },
  {
    _id: "3",
    title: "Bioinformatics and Big Data: Transforming Biological Research",
    excerpt: "Learn how computational tools and big data analytics are accelerating discoveries in genomics, drug development, and personalized medicine.",
    publishedAt: "2026-01-05",
    readingTime: 6,
    category: "Bioinformatics",
    content: `The explosion of biological data has made bioinformatics an indispensable tool in modern biotechnology. With advances in sequencing technologies, we can now generate massive amounts of genomic, proteomic, and metabolomic data at unprecedented speeds and costs.

Bioinformatics combines computer science, statistics, and biology to analyze and interpret complex biological data. Machine learning and artificial intelligence are increasingly being applied to identify patterns, predict protein structures, and discover new drug candidates.

In genomics, bioinformatics tools enable researchers to sequence entire genomes, identify disease-causing mutations, and understand evolutionary relationships between species. The Human Genome Project, completed in 2003, laid the groundwork for personalized medicine approaches that tailor treatments to individual genetic profiles.

Drug discovery has been dramatically accelerated by computational approaches. In silico screening of billions of compounds, molecular dynamics simulations, and structure-based drug design reduce the time and cost of bringing new therapeutics to market.

Structural biology has benefited enormously from advances like AlphaFold, which uses deep learning to predict protein structures with remarkable accuracy. This breakthrough is accelerating research in understanding disease mechanisms and designing new therapeutics.

The future of bioinformatics lies in integrating multi-omics data, improving predictive models, and making computational tools more accessible to researchers worldwide. As biological data continues to grow exponentially, the importance of bioinformatics will only increase.`,
    slug: { current: "bioinformatics-big-data-research" },
  },
  {
    _id: "4",
    title: "Pursuing Higher Studies in Denmark: Opportunities, Challenges, and Insights",
    excerpt: "An overview of studying in Denmark, exploring academic culture, research opportunities, student life, and what international students should know before starting their journey.",
    publishedAt: "2025-12-28",
    readingTime: 7,
    category: "Higher Studies",
    content: `An overview of studying in Denmark, exploring academic culture, research opportunities, student life, and what international students should know before starting their journey.

Denmark has become an attractive destination for higher education due to its strong research environment, innovative teaching methods, and focus on work-life balance. This post shares personal insights into navigating the Danish education system, adapting to academic expectations, and making the most of student life abroad.`,
    slug: { current: "pursuing-higher-studies-denmark" },
  },
];

const Blog = () => {
  const { posts: sanityPosts, loading, error } = useSanityBlogPosts();
  const [displayPosts, setDisplayPosts] = useState<any[]>([]);

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

  const getPlainText = (body: any) => {
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

  const getExcerpt = (post: any) => {
    if (post?.excerpt) {
      return post.excerpt;
    }

    const bodyText = getPlainText(post?.body);
    const source = bodyText || post?.content || "";
    return source ? `${source.slice(0, 160)}${source.length > 160 ? "..." : ""}` : "";
  };

  const getPreview = (post: any) => {
    const bodyText = getPlainText(post?.body);
    const source = bodyText || post?.content || post?.excerpt || "";
    return source ? `${source.split("\n\n")[0]}...` : "";
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
                key={post._id || post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-glass rounded-xl p-6 hover:glow-primary transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                  {post.category && (
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                      {post.category}
                    </span>
                  )}
                  {post.category && (
                    <span className="text-xs text-muted-foreground">•</span>
                  )}
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar size={12} />
                    <span>{formatDate(post.publishedAt)}</span>
                  </div>
                  {(post.readingTime || post.readTime) && (
                    <span className="text-xs text-muted-foreground">•</span>
                  )}
                  {(post.readingTime || post.readTime) && (
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock size={12} />
                      <span>{post.readingTime || post.readTime} min read</span>
                    </div>
                  )}
                </div>

                <h2 className="text-xl font-heading font-bold text-foreground mb-3 hover:text-primary transition-colors">
                  {post.title}
                </h2>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {getExcerpt(post)}
                </p>

                <div className="prose prose-invert prose-sm max-w-none">
                  <p className="text-sm text-secondary-foreground leading-relaxed">
                    {getPreview(post)}
                  </p>
                </div>

                {post?.slug?.current ? (
                  <Link
                    to={`/blog/${post.slug.current}`}
                    className="mt-4 inline-flex text-sm text-primary hover:text-foreground transition-colors font-medium"
                  >
                    Read More →
                  </Link>
                ) : (
                  <span className="mt-4 inline-flex text-sm text-muted-foreground">
                    Read More →
                  </span>
                )}
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
