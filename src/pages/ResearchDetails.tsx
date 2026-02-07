import { motion } from "framer-motion";
import { ArrowLeft, ArrowUp, FlaskConical, Microscope, Dna, Atom, BookOpen, ExternalLink, Calendar, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import con1 from "@/assets/con_1.png";
import con2 from "@/assets/con_2.png";

const ResearchDetails = () => {
  const conferencesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToConferences = () => {
    conferencesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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
            className="mb-12 relative"
          >
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-primary hover:text-foreground transition-colors mb-6"
            >
              <ArrowLeft size={18} />
              <span>Back to Home</span>
            </Link>

            {/* Conference Gallery Button */}
            <motion.button
              onClick={scrollToConferences}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="fixed top-24 right-6 inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-black rounded-lg transition-all duration-300 font-medium text-sm shadow-lg hover:shadow-xl z-50"
            >
              <Sparkles size={18} />
              <span>Check my conference gallery</span>
            </motion.button>
            
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
              Research <span className="text-gradient">Works</span>
            </h1>
            <div className="w-16 h-1 bg-primary rounded-full mb-4" />
            <p className="text-lg text-muted-foreground max-w-3xl">
              A summary of my research works and current research interests, highlighting key projects, publications, and scientific contributions.
            </p>
          </motion.div>

          {/* Publications Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <div className="card-glass rounded-xl p-8 border-l-4 border-l-primary">
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="text-primary" size={28} />
                <h2 className="text-2xl font-heading font-bold text-foreground">
                  Publications
                </h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-3">
                    Biosynthesis, antimicrobial and in vitro antiproliferative activities of silver/silver chloride nanoparticles from mixed fruit extracts of Capsicum frutescens and Tamarindus indica
                  </h3>
                  
                  <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      ✅ Peer-Reviewed Article
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      📘 Journal: ScienceDirect (Elsevier)
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      📅 Published: 2024
                    </span>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm text-secondary-foreground">
                      <span className="text-foreground">👥 Authors:</span> <span className="font-bold text-foreground">Ramim Hasan Naim</span>, Md. Belal Uddin, Syed Rashel Kabir, A. K. M. Asaduzzaman, Ranajit Kumar Shaha, Imtiaj Hasan
                    </p>
                  </div>

                  <a
                    href="https://www.sciencedirect.com/science/article/pii/S2772753X24001692"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-all duration-300 text-sm font-medium"
                  >
                    <ExternalLink size={16} />
                    Read Online: ScienceDirect Article
                  </a>

                  <div className="mt-6 p-4 bg-background/50 rounded-lg border border-border">
                    <h4 className="text-sm font-semibold text-foreground mb-2">Abstract:</h4>
                    <p className="text-sm text-secondary-foreground leading-relaxed">
                      This study presents an eco-friendly approach to synthesizing silver/silver chloride nanoparticles using mixed fruit extracts, demonstrating significant antimicrobial properties and antiproliferative activities against cancer cells.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Research Interests Detailed */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-heading font-bold text-foreground mb-8">
              Research <span className="text-gradient">Interests</span>
            </h2>

            <div className="space-y-8">
              {/* Bioinformatics */}
              <div className="card-glass rounded-xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Atom size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-foreground">
                    Bioinformatics & Computational Biology
                  </h3>
                </div>
                <p className="text-secondary-foreground text-[15px] leading-relaxed mb-4">
                  Computational approaches are essential for modern biological research. I am developing skills in:
                </p>
                <ul className="list-disc list-inside space-y-2 text-secondary-foreground text-[15px] ml-4">
                  <li>Sequence analysis and genomic data interpretation</li>
                  <li>Transcriptomics and proteomics data analysis</li>
                  <li>Machine learning applications in biology</li>
                  <li>Development of bioinformatics pipelines using Python</li>
                  <li>Phylogenetic analysis and evolutionary studies</li>
                  <li>Systems biology approaches to understand complex biological networks</li>
                  <li>Integration of multi-omics data</li>
                </ul>
              </div>

              {/* Structural Biology */}
              <div className="card-glass rounded-xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Microscope size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-foreground">
                    Structural Biology & Molecular Modeling
                  </h3>
                </div>
                <p className="text-secondary-foreground text-[15px] leading-relaxed mb-4">
                  Structure-function relationships are crucial for understanding biological systems. My interests include:
                </p>
                <ul className="list-disc list-inside space-y-2 text-secondary-foreground text-[15px] ml-4">
                  <li>Three-dimensional structure determination of proteins</li>
                  <li>Molecular dynamics simulations</li>
                  <li>Structure-based drug design and virtual screening</li>
                  <li>Protein folding and misfolding mechanisms</li>
                  <li>Enzyme catalysis and inhibition studies</li>
                  <li>Computational prediction of protein structures using tools like AlphaFold</li>
                </ul>
              </div>

              {/* Molecular Biology */}
              <div className="card-glass rounded-xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Dna size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-foreground">
                    Molecular Biology & Gene Expression
                  </h3>
                </div>
                <p className="text-secondary-foreground text-[15px] leading-relaxed mb-4">
                  Understanding molecular mechanisms that govern biological processes is central to my research interests:
                </p>
                <ul className="list-disc list-inside space-y-2 text-secondary-foreground text-[15px] ml-4">
                  <li>Gene expression regulation in disease states</li>
                  <li>Protein-protein and protein-DNA interactions</li>
                  <li>Molecular pathways involved in cancer progression</li>
                  <li>Signal transduction mechanisms</li>
                  <li>Epigenetic modifications and their functional consequences</li>
                  <li>Application of molecular techniques for disease diagnosis</li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* MSc Thesis Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-16"
          >
            <div className="card-glass rounded-xl p-8 border-l-4 border-l-primary">
              <div className="flex items-center gap-3 mb-4">
                <FlaskConical className="text-primary" size={28} />
                <h2 className="text-2xl font-heading font-bold text-foreground">
                  Thesis Project (2020-2022)
                </h2>
              </div>
              
              <h3 className="text-xl font-semibold text-primary mb-4">
                Green Synthesis of Antimicrobial Silver/Silver Chloride Nanoparticles
              </h3>
              
              <p className="text-sm text-muted-foreground mb-6 italic">
                "Green Synthesis of Antimicrobial Silver/Silver Chloride Nanoparticles from the mixed extracts of C. Frutescens and T. Indica Fruits with Antiproliferative Activity against Ehrlich Ascites Carcinoma and MCF-7 Cells"
              </p>

              <div className="space-y-4 text-secondary-foreground text-[15px] leading-relaxed">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Objective:</h4>
                  <p>
                    This research focused on developing an environmentally friendly method for synthesizing silver and silver chloride nanoparticles using plant extracts from Capsicum frutescens (chili pepper) and Tamarindus indica (tamarind) fruits. The goal was to create nanoparticles with both antimicrobial and anticancer properties.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">Key Findings:</h4>
                  <ul className="list-disc list-inside space-y-2 ml-2">
                    <li>Successfully synthesized silver/silver chloride nanoparticles using green chemistry principles</li>
                    <li>Demonstrated strong antimicrobial activity against various bacterial strains</li>
                    <li>Showed antiproliferative effects against Ehrlich Ascites Carcinoma cells</li>
                    <li>Exhibited cytotoxic activity against MCF-7 breast cancer cells</li>
                    <li>Characterized nanoparticles using UV-Vis spectroscopy, SEM, and XRD techniques</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">Significance:</h4>
                  <p>
                    This work contributes to the growing field of nanobiotechnology by providing a sustainable and cost-effective method for nanoparticle synthesis. The dual antimicrobial and anticancer properties make these nanoparticles promising candidates for biomedical applications, particularly in cancer therapy and infection control.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">Institution:</h4>
                  <p>Department of Biochemistry & Molecular Biology, University of Rajshahi, Bangladesh (2019-2022)</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Conferences Section */}
          <motion.section
            ref={conferencesRef}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-heading font-bold text-foreground mb-8">
              <span className="text-gradient">Conferences</span>
            </h2>

            <div className="space-y-6">
              {/* Conference 1 */}
              <div className="card-glass rounded-xl p-8">
                <div className="grid md:grid-cols-[1fr,auto] gap-6 items-start">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Calendar size={24} className="text-primary" />
                      </div>
                      <h3 className="text-lg font-heading font-semibold text-foreground">
                        BSBMB - SABC - OMC International Conference 2023 on Molecules of Life for Sustainability
                      </h3>
                    </div>
                    <div className="ml-15 space-y-2 text-secondary-foreground text-[15px]">
                      <p>
                        <span className="font-semibold text-foreground">Organized by:</span> University of Dhaka
                      </p>
                      <p>
                        <span className="font-semibold text-foreground">Date:</span> 04-05 February 2023
                      </p>
                    </div>
                  </div>
                  <div className="w-full md:w-64 flex-shrink-0">
                    <motion.div
                      whileHover={{ scale: 1.05, y: -8 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      <img 
                        src={con1} 
                        alt="BSBMB - SABC Conference" 
                        className="w-full h-auto rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-primary/20"
                      />
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Conference 2 */}
              <div className="card-glass rounded-xl p-8">
                <div className="grid md:grid-cols-[1fr,auto] gap-6 items-start">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Calendar size={24} className="text-primary" />
                      </div>
                      <h3 className="text-lg font-heading font-semibold text-foreground">
                        2nd International Conference on Genomics, Nanotech, and Bioengineering-2022 (ICGNB)
                      </h3>
                    </div>
                    <div className="ml-15 space-y-2 text-secondary-foreground text-[15px]">
                      <p>
                        <span className="font-semibold text-foreground">Hosted by:</span> North South University, Dhaka
                      </p>
                      <p>
                        <span className="font-semibold text-foreground">Date:</span> 26-28 June 2022
                      </p>
                    </div>
                  </div>
                  <div className="w-full md:w-64 flex-shrink-0">
                    <motion.div
                      whileHover={{ scale: 1.05, y: -8 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      <img 
                        src={con2} 
                        alt="2nd International Conference on Genomics, Nanotech, and Bioengineering" 
                        className="w-full h-auto rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-primary/20"
                      />
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Move to Top Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center pt-2"
          >
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary hover:bg-primary/90 text-black rounded-lg transition-all duration-300 font-medium text-sm shadow-lg hover:shadow-xl"
            >
              <ArrowUp size={20} />
              <span>Move to top</span>
            </motion.button>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ResearchDetails;
