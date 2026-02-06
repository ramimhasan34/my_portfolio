import { motion } from "framer-motion";
import { ArrowLeft, FlaskConical, Microscope, Dna, Binary } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ResearchDetails = () => {
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
              Research <span className="text-gradient">Works</span>
            </h1>
            <div className="w-16 h-1 bg-primary rounded-full mb-4" />
            <p className="text-lg text-muted-foreground max-w-3xl">
              Detailed overview of my research interests, works, and contributions in biochemistry, molecular biology, and computational biomedicine.
            </p>
          </motion.div>

          {/* MSc Thesis Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <div className="card-glass rounded-xl p-8 border-l-4 border-l-primary">
              <div className="flex items-center gap-3 mb-4">
                <FlaskConical className="text-primary" size={28} />
                <h2 className="text-2xl font-heading font-bold text-foreground">
                  MSc Thesis Project
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

          {/* Research Interests Detailed */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-heading font-bold text-foreground mb-8">
              Research <span className="text-gradient">Interests</span>
            </h2>

            <div className="space-y-8">
              {/* Nanoparticle Synthesis */}
              <div className="card-glass rounded-xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <FlaskConical size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-foreground">
                    Nanoparticle Synthesis & Nanobiotechnology
                  </h3>
                </div>
                <p className="text-secondary-foreground text-[15px] leading-relaxed mb-4">
                  My research in this area focuses on developing eco-friendly synthesis methods for metallic nanoparticles with biomedical applications. I am particularly interested in:
                </p>
                <ul className="list-disc list-inside space-y-2 text-secondary-foreground text-[15px] ml-4">
                  <li>Green synthesis approaches using plant-based reducing agents</li>
                  <li>Characterization of nanoparticles using spectroscopic and microscopic techniques</li>
                  <li>Evaluation of antimicrobial properties against pathogenic bacteria</li>
                  <li>Assessment of anticancer activities in various cell lines</li>
                  <li>Understanding mechanisms of nanoparticle-cell interactions</li>
                  <li>Development of targeted drug delivery systems</li>
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

              {/* Bioinformatics */}
              <div className="card-glass rounded-xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Binary size={24} className="text-primary" />
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
            </div>
          </motion.section>

          {/* Current Research Direction */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="card-glass rounded-xl p-8 border-l-4 border-l-primary">
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                Current Research Focus
              </h2>
              <p className="text-secondary-foreground text-[15px] leading-relaxed mb-4">
                I am currently pursuing an MSc in Computational Biomedicine at the University of Southern Denmark (2025-2027), where my research interests have expanded to include computational approaches to biological problems. My current focus areas include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-secondary-foreground text-[15px] ml-4">
                <li>Applying machine learning to predict protein functions and interactions</li>
                <li>Developing computational tools for analyzing large-scale biological datasets</li>
                <li>Integrating molecular biology knowledge with computational methodologies</li>
                <li>Contributing to open-source bioinformatics projects</li>
                <li>Exploring applications of AI in drug discovery and precision medicine</li>
              </ul>
            </div>
          </motion.section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ResearchDetails;
