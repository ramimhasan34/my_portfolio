import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 section-gradient">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-5 gap-12 items-start max-w-5xl mx-auto"
        >
          {/* Photo */}
          <motion.div 
            className="md:col-span-2 flex justify-center md:pt-20"
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative group">
              {/* Gradient background glow */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-primary via-primary/50 to-primary/30 blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-300 -z-10" />
              
              {/* Main image container */}
              <div className="relative w-64 h-72 sm:w-72 sm:h-80 rounded-3xl overflow-hidden border-2 border-primary/40 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none z-10" />
                <img
                  src="/img_1.jpeg"
                  alt="Ramim Hasan Naim"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Decorative floating elements */}
              {/* Removed geometric shapes */}
            </div>
          </motion.div>

          {/* Bio */}
          <div className="md:col-span-3 md:pr-6">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-2">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-12 h-1 bg-primary rounded-full mb-6" />
            <p className="text-secondary-foreground leading-relaxed text-base text-left">
              Hello, I'm Ramim Hasan Naim, currently pursuing my MSc in Computational Biomedicine at the University of Southern Denmark (SDU). I enjoy applying computational tools, bioinformatics, and multi-omics analysis to understand complex biological problems and contribute to meaningful research.
            </p>
            <p className="text-secondary-foreground leading-relaxed text-base mt-4 text-left">
              My research interests include{" "}
              <strong className="text-foreground">
                Functional Genomics and Translational Cancer Biology
              </strong>
              , with a focus on computational and integrative approaches to study molecular mechanisms and disease
              . I have experience working with a variety of bioinformatics tools. I'm always eager to learn new methods and approaches to enhance my research. Previously, I worked as a{" "}
              <strong className="text-foreground">
                Research Assistant at the Protein and Nanomedicine Research Laboratory
              </strong>
              , Department of Biochemistry and Molecular Biology, University of Rajshahi, where I contributed to projects focused on protein research and nanomedicine.
            </p>
            <p className="text-secondary-foreground leading-relaxed text-base mt-4 text-left">
              Looking ahead, I aim to pursue a career in research and development, with a focus on computational approaches to addressing key challenges in biomedicine.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
