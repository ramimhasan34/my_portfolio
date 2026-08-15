import { SanityBlogPost } from "@/lib/sanity";

export const fallbackBlogPosts: Array<
  Partial<SanityBlogPost> & {
    _id: string;
    title: string;
    publishedAt: string;
    slug: { current: string };
    content?: string;
    id?: string;
  }
> = [
  {
    _id: "1",
    title: "CRISPR-Cas9: Revolutionizing Gene Editing Technology",
    excerpt:
      "Explore how CRISPR-Cas9 is transforming biotechnology and opening new possibilities in medicine, agriculture, and beyond.",
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
    excerpt:
      "Discover how traveling to different corners of the world--mountains, forests, coastlines, and quiet towns--offers perspective, inspiration, and a deeper connection with nature beyond everyday life.",
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
    excerpt:
      "Learn how computational tools and big data analytics are accelerating discoveries in genomics, drug development, and personalized medicine.",
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
    title:
      "Pursuing Higher Studies in Denmark: Opportunities, Challenges, and Insights",
    excerpt:
      "An overview of studying in Denmark, exploring academic culture, research opportunities, student life, and what international students should know before starting their journey.",
    publishedAt: "2025-12-28",
    readingTime: 7,
    category: "Higher Studies",
    content: `An overview of studying in Denmark, exploring academic culture, research opportunities, student life, and what international students should know before starting their journey.

Denmark has become an attractive destination for higher education due to its strong research environment, innovative teaching methods, and focus on work-life balance. This post shares personal insights into navigating the Danish education system, adapting to academic expectations, and making the most of student life abroad.`,
    slug: { current: "pursuing-higher-studies-denmark" },
  },
];