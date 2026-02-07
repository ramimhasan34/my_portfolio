import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const educationData = [
  {
    period: "2025 – 2027",
    degree: "MSc in Computational Biomedicine",
    institution: "University of Southern Denmark (SDU)",
    level: "Master's",
    color: "from-primary/20 to-primary/10",
  },
  {
    period: "2019 – 2022",
    degree: "MSc in Biochemistry & Molecular Biology",
    institution: "University of Rajshahi, Rajshahi-6205",
    level: "Master's",
    color: "from-primary/15 to-primary/5",
  },
  {
    period: "2015 – 2019",
    degree: "BSc in Biochemistry & Molecular Biology",
    institution: "University of Rajshahi, Rajshahi-6205",
    level: "Bachelor's",
    color: "from-primary/20 to-primary/10",
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
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-heading font-bold text-foreground mb-2">
            <span className="text-gradient">Education</span>
          </h2>
          <div className="w-12 h-1 bg-primary rounded-full mx-auto" />
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-24 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/30 to-transparent" />

          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true, margin: "-50px" }}
              className={`relative flex items-start gap-6 mb-8 md:mb-10 ${
                index % 2 === 0
                  ? "md:flex-row md:text-right"
                  : "md:flex-row-reverse md:text-left"
              }`}
            >
              {/* Content */}
              <div className="flex-1 ml-16 md:ml-0">
                <motion.div
                  whileHover={{ y: -4 }}
                  className={`bg-gradient-to-br ${edu.color} rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300 backdrop-blur-sm`}
                >
                  <div className={`flex items-center ${index % 2 === 0 ? "md:justify-end" : "justify-start"} mb-3`}>
                    <span className="text-xs font-date font-semibold text-primary uppercase tracking-wider py-1 px-3 bg-primary/10 rounded-full">
                      {edu.period}
                    </span>
                  </div>
                  <h3 className="text-lg font-heading font-bold text-foreground mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {edu.institution}
                  </p>
                </motion.div>
              </div>

              {/* Timeline dot */}
              <div className="absolute left-3 md:left-1/2 md:-translate-x-1/2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-background border-2 border-primary flex items-center justify-center z-10 hover:scale-110 transition-transform duration-300">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
                  <GraduationCap size={16} className="text-background" />
                </div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>

        {/* Training and Certificates Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/training">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-6 py-2.5 bg-gradient-to-r from-primary via-primary/90 to-primary/80 hover:from-primary/90 hover:via-primary/80 hover:to-primary/70 text-black rounded-lg transition-all duration-300 font-semibold text-sm shadow-lg hover:shadow-xl hover:shadow-primary/30"
            >
              <span>Check my training and certificates</span>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
