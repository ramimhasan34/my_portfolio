import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const educationData = [
  {
    period: "2019 – 2022",
    degree: "M.Sc (Thesis) in Biochemistry & Molecular Biology",
    institution: "University of Rajshahi, Rajshahi-6205",
  },
  {
    period: "2015 – 2019",
    degree: "B.Sc in Biochemistry & Molecular Biology",
    institution: "University of Rajshahi, Rajshahi-6205",
  },
  {
    period: "2011 – 2013",
    degree: "Higher Secondary School Certificate (HSC)",
    institution: "Agricultural University College, Mymensingh",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-heading font-bold text-foreground mb-2">
            <span className="text-gradient">Education</span>
          </h2>
          <div className="w-12 h-1 bg-primary rounded-full mx-auto" />
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-border" />

          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true, margin: "-50px" }}
              className={`relative flex items-start gap-6 mb-12 md:mb-16 ${
                index % 2 === 0
                  ? "md:flex-row md:text-right"
                  : "md:flex-row-reverse md:text-left"
              }`}
            >
              {/* Content */}
              <div className="flex-1 ml-16 md:ml-0">
                <div className="card-glass rounded-xl p-6 hover:glow-primary transition-shadow duration-300">
                  <span className="text-xs font-heading font-semibold text-primary uppercase tracking-wider">
                    {edu.period}
                  </span>
                  <h3 className="text-lg font-heading font-semibold text-foreground mt-2 mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {edu.institution}
                  </p>
                </div>
              </div>

              {/* Timeline dot */}
              <div className="absolute left-3 md:left-1/2 md:-translate-x-1/2 top-6 w-7 h-7 rounded-full bg-secondary border-2 border-primary flex items-center justify-center z-10">
                <GraduationCap size={14} className="text-primary" />
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
