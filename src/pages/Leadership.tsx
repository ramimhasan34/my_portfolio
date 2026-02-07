import { motion } from "framer-motion";
import { ArrowLeft, Users, Award, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Leadership = () => {
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
              Leadership & <span className="text-gradient">Extracurricular Activities</span>
            </h1>
            <div className="w-16 h-1 bg-primary rounded-full mb-4" />
            <p className="text-lg text-muted-foreground max-w-3xl">
              A showcase of my leadership roles, community involvement, and extracurricular achievements.
            </p>
          </motion.div>

          {/* Leadership Positions */}
          <div className="space-y-8">
            {/* Vice President */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card-glass rounded-xl p-8"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Users size={26} className="text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="text-sm font-semibold text-primary px-3 py-1 bg-primary/10 rounded-full">
                      2019-2022
                    </span>
                  </div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                    VICE PRESIDENT
                  </h3>
                  <p className="text-base text-secondary-foreground font-medium">
                    BIOCHEMISTRY AND MOLECULAR BIOLOGY ENGLISH LANGUAGE CLUB
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Public Relations Officer */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="card-glass rounded-xl p-8"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Users size={26} className="text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="text-sm font-semibold text-primary px-3 py-1 bg-primary/10 rounded-full">
                      2018-2019
                    </span>
                  </div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                    PUBLIC RELATION OFFICER
                  </h3>
                  <p className="text-base text-secondary-foreground font-medium">
                    AMERICAN SOCIETY FOR MICROBIOLOGY
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    RAJSHAHI UNIVERSITY STUDENT CHAPTER
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Joint Secretary */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="card-glass rounded-xl p-8"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Users size={26} className="text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="text-sm font-semibold text-primary px-3 py-1 bg-primary/10 rounded-full">
                      2017-2018
                    </span>
                  </div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                    JOINT SECRETARY
                  </h3>
                  <p className="text-base text-secondary-foreground font-medium">
                    RAJSHAHI UNIVERSITY SCIENCE CLUB (RUSC)
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Leadership;
