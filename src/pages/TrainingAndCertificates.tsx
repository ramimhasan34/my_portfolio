import { motion } from "framer-motion";
import { ArrowLeft, Book } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TrainingAndCertificates = () => {
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
              Training & <span className="text-gradient">Certificates</span>
            </h1>
            <div className="w-16 h-1 bg-primary rounded-full mb-4" />
            <p className="text-lg text-muted-foreground max-w-3xl">
              A collection of my professional certifications and training courses.
            </p>
          </motion.div>

          {/* Training & Certificates */}
          <div className="space-y-8">
            {/* Computational Drug Design */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card-glass rounded-xl p-8"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Book size={26} className="text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                    Computational Drug Design and Protein Modelling
                  </h3>
                  <p className="text-base text-secondary-foreground font-medium mb-2">
                    Bangladesh Biological Sciences Society
                  </p>
                  <p className="text-sm text-muted-foreground">
                    3 days
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Statistical Computing */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="card-glass rounded-xl p-8"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Book size={26} className="text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                    Statistical Computing in Real Life Data Analysis
                  </h3>
                  <p className="text-base text-secondary-foreground font-medium mb-2">
                    Department of Statistics, University of Rajshahi
                  </p>
                  <p className="text-sm text-muted-foreground">
                    1 month
                  </p>
                </div>
              </div>
            </motion.div>

            {/* In-Plant Training */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="card-glass rounded-xl p-8"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Book size={26} className="text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                    In-Plant Training
                  </h3>
                  <p className="text-base text-secondary-foreground font-medium mb-2">
                    Kemiko Pharmaceuticals Ltd., Rajshahi, Bangladesh
                  </p>
                  <p className="text-sm text-muted-foreground">
                    2 weeks
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

export default TrainingAndCertificates;
