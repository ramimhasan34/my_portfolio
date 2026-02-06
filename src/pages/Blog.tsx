import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const blogPosts = [
  {
    id: 1,
    title: "CRISPR-Cas9: Revolutionizing Gene Editing Technology",
    excerpt: "Explore how CRISPR-Cas9 is transforming biotechnology and opening new possibilities in medicine, agriculture, and beyond.",
    date: "January 15, 2026",
    readTime: "8 min read",
    category: "Gene Editing",
    content: `CRISPR-Cas9 has emerged as one of the most groundbreaking technologies in modern biotechnology. This revolutionary gene-editing tool has transformed our ability to precisely modify DNA sequences, offering unprecedented opportunities in medicine, agriculture, and basic research.

The technology works by using a guide RNA to direct the Cas9 enzyme to a specific location in the genome, where it cuts the DNA. This allows scientists to delete, insert, or modify genes with remarkable precision. The simplicity and efficiency of CRISPR have made it accessible to laboratories worldwide.

In medicine, CRISPR is being explored for treating genetic disorders, cancer, and infectious diseases. Recent clinical trials have shown promising results in treating sickle cell disease and beta-thalassemia. The technology is also being used to develop more effective cancer immunotherapies.

Agricultural applications include developing drought-resistant crops, improving nutritional content, and creating disease-resistant plants. These advancements could play a crucial role in addressing food security challenges.

However, the technology also raises important ethical questions about human genome editing, off-target effects, and equitable access. As we continue to refine CRISPR technology, it's essential to balance innovation with responsible use.`,
  },
  {
    id: 2,
    title: "Synthetic Biology: Engineering Life from Scratch",
    excerpt: "Discover how synthetic biology is enabling scientists to design and create new biological systems with applications ranging from medicine to sustainable materials.",
    date: "January 10, 2026",
    readTime: "7 min read",
    category: "Synthetic Biology",
    content: `Synthetic biology represents a paradigm shift in biotechnology, combining engineering principles with biological systems to create novel organisms and biological circuits. This interdisciplinary field is pushing the boundaries of what's possible in life sciences.

At its core, synthetic biology involves designing and constructing new biological parts, devices, and systems. Scientists are now able to write DNA sequences from scratch, insert them into organisms, and program cells to perform specific functions. This approach has led to remarkable innovations.

One exciting application is in medicine, where engineered bacteria are being designed to detect and treat diseases. CAR-T cell therapy, which engineers immune cells to fight cancer, exemplifies how synthetic biology is revolutionizing treatment approaches.

In sustainable manufacturing, synthetic biology is enabling the production of biomaterials, biofuels, and chemicals through fermentation processes. Companies are now producing spider silk, plastics, and even perfumes using engineered microorganisms.

The field also contributes to environmental solutions, with engineered organisms designed to clean up pollution, sequester carbon dioxide, or break down plastic waste. These applications could be crucial in addressing climate change and environmental degradation.

As synthetic biology advances, questions about biosafety, biosecurity, and ethical implications must be carefully considered. Establishing robust regulatory frameworks and engaging in public dialogue will be essential for responsible development of this transformative technology.`,
  },
  {
    id: 3,
    title: "Bioinformatics and Big Data: Transforming Biological Research",
    excerpt: "Learn how computational tools and big data analytics are accelerating discoveries in genomics, drug development, and personalized medicine.",
    date: "January 5, 2026",
    readTime: "6 min read",
    category: "Bioinformatics",
    content: `The explosion of biological data has made bioinformatics an indispensable tool in modern biotechnology. With advances in sequencing technologies, we can now generate massive amounts of genomic, proteomic, and metabolomic data at unprecedented speeds and costs.

Bioinformatics combines computer science, statistics, and biology to analyze and interpret complex biological data. Machine learning and artificial intelligence are increasingly being applied to identify patterns, predict protein structures, and discover new drug candidates.

In genomics, bioinformatics tools enable researchers to sequence entire genomes, identify disease-causing mutations, and understand evolutionary relationships between species. The Human Genome Project, completed in 2003, laid the groundwork for personalized medicine approaches that tailor treatments to individual genetic profiles.

Drug discovery has been dramatically accelerated by computational approaches. In silico screening of billions of compounds, molecular dynamics simulations, and structure-based drug design reduce the time and cost of bringing new therapeutics to market.

Structural biology has benefited enormously from advances like AlphaFold, which uses deep learning to predict protein structures with remarkable accuracy. This breakthrough is accelerating research in understanding disease mechanisms and designing new therapeutics.

The future of bioinformatics lies in integrating multi-omics data, improving predictive models, and making computational tools more accessible to researchers worldwide. As biological data continues to grow exponentially, the importance of bioinformatics will only increase.`,
  },
  {
    id: 4,
    title: "Nanobiotechnology: The Intersection of Nanotechnology and Biology",
    excerpt: "Explore how nanoscale materials and devices are revolutionizing drug delivery, diagnostics, and our understanding of biological systems.",
    date: "December 28, 2025",
    readTime: "7 min read",
    category: "Nanotechnology",
    content: `Nanobiotechnology, working at the nanoscale (1-100 nanometers), is opening new frontiers in medicine, diagnostics, and biological research. By manipulating materials at this tiny scale, scientists can create tools that interact with biological systems in unprecedented ways.

Nanoparticles are being engineered for targeted drug delivery, carrying therapeutic agents directly to diseased cells while minimizing side effects on healthy tissues. This approach is particularly promising in cancer treatment, where nanoparticles can be designed to accumulate in tumors and release drugs in response to specific triggers.

In diagnostics, nanosensors can detect disease biomarkers at extremely low concentrations, enabling earlier disease detection. Quantum dots and gold nanoparticles are being used to create highly sensitive imaging agents for visualizing biological processes in real-time.

Tissue engineering benefits from nanomaterials that can mimic the natural extracellular matrix, providing scaffolds for cell growth and tissue regeneration. These materials can be designed to promote specific cellular behaviors and integrate seamlessly with native tissue.

Antimicrobial applications of nanobiotechnology include silver nanoparticles and other nanomaterials that can combat antibiotic-resistant bacteria. This approach offers hope in addressing the growing crisis of antimicrobial resistance.

Research in my MSc thesis focused on green synthesis of silver/silver chloride nanoparticles with antimicrobial and antiproliferative properties, demonstrating the potential of sustainable approaches in nanobiotechnology.

As the field advances, addressing potential toxicity concerns and ensuring safe translation to clinical applications remains crucial. The promise of nanobiotechnology is immense, but responsible development is essential.`,
  },
];

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
              A collection of thoughts on research, personal experiences, and travels in science.
            </p>
          </motion.div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-glass rounded-xl p-6 hover:glow-primary transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                    {post.category}
                  </span>
                  <span className="text-xs text-muted-foreground">•</span>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar size={12} />
                    <span>{post.date}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">•</span>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock size={12} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h2 className="text-xl font-heading font-bold text-foreground mb-3 hover:text-primary transition-colors">
                  {post.title}
                </h2>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="prose prose-invert prose-sm max-w-none">
                  <p className="text-sm text-secondary-foreground leading-relaxed">
                    {post.content.split('\n\n')[0]}...
                  </p>
                </div>

                <button className="mt-4 text-sm text-primary hover:text-foreground transition-colors font-medium">
                  Read More →
                </button>
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
