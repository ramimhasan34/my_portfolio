import { motion } from "framer-motion";
import { Laptop, Microscope, Dna, FlaskConical } from "lucide-react";
import { Link } from "react-router-dom";

const researchInterests = [
  {
    icon: Microscope,
    title: "Proteomics",
    description:
      "Integrating computational and mass spectrometry-based proteomics to study protein expression, post-translational modifications, and signaling networks regulating cellular metabolism, differentiation, and disease.",
  },
  {
    icon: Dna,
    title: "Functional Genomics",
    description:
      "Integrating computational analysis of genomic and epigenomic data to study transcriptional regulation and gene regulatory networks, focusing on mechanisms controlling cell differentiation, metabolism, and disease.",
  },
  {
    icon: Laptop,
    title: "Computational Metabolomic",
    description:
      "Applying computational genomics and integrative multi-omics analysis to identify gene regulatory mechanisms and molecular pathways that contribute to metabolic diseases and therapeutic responses.",
  },
  {
    icon: Microscope,
    title: "Epigenomics & Metabolic Regulation",
    description:
      "Using computational and integrative analysis of noncoding RNAs, chromatin, and epigenomic data to study gene regulation, energy homeostasis, and disease mechanisms in obesity and type 2 diabetes.",
  },
  {
    icon: FlaskConical,
    title: "Hepatic Transcriptional Regulation",
    description:
      "Exploring how metabolic and environmental cues remodel chromatin and gene regulatory networks to control liver transcriptional plasticity and drive disease development and progression.",
  },
];

const ResearchSection = () => {
  return (
    <section id="research" className="py-24 section-gradient">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-heading font-bold text-foreground mb-2">
            Research <span className="text-gradient">Interests</span>
          </h2>
          <div className="w-12 h-1 bg-primary rounded-full mx-auto" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {researchInterests.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="card-glass rounded-xl p-4 text-center hover:glow-primary transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                <item.icon size={22} className="text-primary" />
              </div>
              <h3 className="text-base font-heading font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Learn More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-6"
        >
          <Link
            to="/research"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
          >
            Learn more about my work
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ResearchSection;
