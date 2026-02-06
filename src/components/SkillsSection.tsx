import { motion } from "framer-motion";

const skills = [
  { name: "Python", level: 75 },
  { name: "PyMOL", level: 75 },
  { name: "R", level: 75 },
  { name: "Weka", level: 75 },
  { name: "SPSS", level: 75 },
  { name: "Photoshop", level: 75 },
];

const getSkillTier = (level: number) => {
  if (level >= 85) return "Expert";
  if (level >= 80) return "Advanced";
  if (level >= 70) return "Proficient";
  return "Familiar";
};

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

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true, margin: "-30px" }}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-heading font-medium text-foreground">
                  {skill.name}
                </span>
                <span className="text-xs text-muted-foreground">
                  {getSkillTier(skill.level)}
                </span>
              </div>
              <div className="h-2 rounded-full bg-secondary overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.3 + index * 0.08 }}
                  viewport={{ once: true }}
                  className="h-full rounded-full bg-primary"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
