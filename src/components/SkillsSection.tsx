import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Terminal, Brain, Dna } from "lucide-react";

const skillCategories = [
  {
    title: "Progarmming",
    icon: Terminal,
    tools: ["Python", "R"],
  },
  {
    title: "Modeling & Visualization",
    icon: Dna,
    tools: ["Maestro", "PyMOL"],
  },
  {
    title: "Machine Learning",
    icon: Brain,
    tools: ["Weka", "KNIME"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-heading font-bold text-foreground mb-2">
            <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-12 h-1 bg-primary rounded-full mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true, margin: "-50px" }}
              className="card-glass rounded-xl p-6 group hover:border-primary/40 transition-colors duration-300"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-sm font-heading font-semibold text-foreground leading-tight">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1.5 text-sm font-medium rounded-full bg-secondary text-secondary-foreground border border-border hover:border-primary/30 hover:text-primary transition-colors duration-200"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Leadership Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/leadership">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-6 py-2.5 bg-gradient-to-r from-primary via-primary/90 to-primary/80 hover:from-primary/90 hover:via-primary/80 hover:to-primary/70 text-primary-foreground rounded-lg transition-all duration-300 font-semibold text-sm shadow-lg hover:shadow-xl hover:shadow-primary/30"
            >
              <span>Explore my leadership skills</span>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
