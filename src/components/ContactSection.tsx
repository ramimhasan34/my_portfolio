import { motion } from "framer-motion";
import { Mail, MapPin, GraduationCap } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 section-gradient">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-heading font-bold text-foreground mb-2">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-12 h-1 bg-primary rounded-full mx-auto" />
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="card-glass rounded-xl p-6 text-center"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <Mail size={20} className="text-primary" />
              </div>
              <h3 className="text-sm font-heading font-semibold text-foreground mb-1">
                Email
              </h3>
              <p className="text-xs text-muted-foreground break-all">
                ramimhasan.naim@gmail.com
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="card-glass rounded-xl p-6 text-center"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <MapPin size={20} className="text-primary" />
              </div>
              <h3 className="text-sm font-heading font-semibold text-foreground mb-1">
                Location
              </h3>
              <p className="text-xs text-muted-foreground">
                Rajshahi, Bangladesh
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="card-glass rounded-xl p-6 text-center"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <GraduationCap size={20} className="text-primary" />
              </div>
              <h3 className="text-sm font-heading font-semibold text-foreground mb-1">
                Affiliation
              </h3>
              <p className="text-xs text-muted-foreground">
                University of Rajshahi
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
