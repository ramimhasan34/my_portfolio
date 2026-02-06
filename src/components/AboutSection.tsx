import { motion } from "framer-motion";
import profilePhoto from "@/assets/profile-photo.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 section-gradient">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-5 gap-12 items-center max-w-5xl mx-auto"
        >
          {/* Photo */}
          <div className="md:col-span-2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-72 sm:w-72 sm:h-80 rounded-2xl overflow-hidden glow-primary">
                <img
                  src={profilePhoto}
                  alt="Ramim Hasan Naim"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative border */}
              <div className="absolute -inset-1 rounded-2xl border border-primary/20 -z-10" />
              <div className="absolute -bottom-3 -right-3 w-24 h-24 rounded-xl border border-primary/10 -z-10" />
            </div>
          </div>

          {/* Bio */}
          <div className="md:col-span-3">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-2">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-12 h-1 bg-primary rounded-full mb-6" />
            <p className="text-secondary-foreground leading-relaxed text-[15px]">
              Hello, this is Ramim Hasan Naim. Recently I have completed my M.Sc
              in Biochemistry &amp; Molecular Biology from the University of
              Rajshahi (RU). I accomplished my M.Sc thesis on nanoparticles
              entitled{" "}
              <em className="text-primary/80">
                "Green Synthesis of Antimicrobial Silver/Silver Chloride
                Nanoparticles from the mixed extracts of C. Frutescens and T.
                Indica Fruits with Antiproliferative Activity against Ehrlich
                Ascites Carcinoma and MCF-7 Cells"
              </em>
              .
            </p>
            <p className="text-secondary-foreground leading-relaxed text-[15px] mt-4">
              I have a passion for{" "}
              <strong className="text-foreground">
                Molecular Biology, Structural Biology &amp; Bioinformatics
              </strong>
              . I am skilled in Python programming language. I'm constantly being
              persuaded to learn new skills. In the future, I want to pursue a
              career in the field of research &amp; development.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
