import { motion } from "framer-motion";
import { FlaskConical, Microscope, Dna, Binary } from "lucide-react";

const researchInterests = [
  {
    icon: FlaskConical,
    title: "Nanoparticle Synthesis",
    description:
      "Green synthesis of antimicrobial silver/silver chloride nanoparticles using plant extracts with antiproliferative activity.",
  },
  {
    icon: Dna,
    title: "Molecular Biology",
    description:
      "Understanding molecular mechanisms underlying biological processes, gene expression, and protein interactions.",
  },
  {
    icon: Microscope,
    title: "Structural Biology",
    description:
      "Studying three-dimensional structures of biomolecules to understand their function and interactions.",
  },
  {
    icon: Binary,
    title: "Bioinformatics",
    description:
      "Computational analysis of biological data, molecular modeling, and sequence analysis using Python.",
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
          className="text-center mb-16"
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
              className="card-glass rounded-xl p-6 text-center hover:glow-primary transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon size={26} className="text-primary" />
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

        {/* Thesis highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mt-14"
        >
          <div className="card-glass rounded-xl p-8 border-l-4 border-l-primary">
            <h3 className="text-sm font-heading font-semibold text-primary uppercase tracking-wider mb-3">
              M.Sc Thesis
            </h3>
            <p className="text-secondary-foreground text-[15px] leading-relaxed italic">
              "Green Synthesis of Antimicrobial Silver/Silver Chloride
              Nanoparticles from the mixed extracts of C. Frutescens and T.
              Indica Fruits with Antiproliferative Activity against Ehrlich
              Ascites Carcinoma and MCF-7 Cells"
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResearchSection;
