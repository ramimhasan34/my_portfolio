import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Scientific background with DNA helix"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--hero-gradient)" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-foreground mb-4 tracking-tight">
            Ramim Hasan Naim
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="text-lg sm:text-xl font-heading font-medium text-primary mb-3 italic">
            M.Sc (Thesis)
          </p>
          <p className="text-sm sm:text-base text-muted-foreground mb-1">
            Department of Biochemistry &amp; Molecular Biology
          </p>
          <p className="text-sm sm:text-base text-muted-foreground">
            University of Rajshahi, Rajshahi, Bangladesh
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-12"
        >
          <a
            href="#about"
            className="inline-flex items-center gap-2 text-sm text-primary hover:text-foreground transition-colors"
          >
            <span>Explore</span>
            <ChevronDown size={18} className="animate-float" />
          </a>
        </motion.div>
      </div>

      {/* Decorative glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-1 bg-primary/30 blur-xl" />
    </section>
  );
};

export default HeroSection;
