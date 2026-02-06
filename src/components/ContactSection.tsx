import { motion } from "framer-motion";
import { Mail, Linkedin, BookOpen, Facebook } from "lucide-react";

const contacts = [
  {
    icon: Mail,
    title: "Email",
    value: "Contact Me",
    link: "mailto:ramim.hasan34@gmail.com"
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    value: "Connect with me",
    link: "https://www.linkedin.com/in/rhasan34/"
  },
  {
    icon: BookOpen,
    title: "ResearchGate",
    value: "Follow my research",
    link: "https://www.researchgate.net/profile/Ramim-Naim?ev=hdr_xprf"
  },
  {
    icon: Facebook,
    title: "Facebook",
    value: "Follow me",
    link: "https://www.facebook.com/ramim.hasan34/"
  }
];

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

        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contacts.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <motion.a
                  key={index}
                  href={contact.link}
                  target={contact.link.startsWith("mailto:") ? "_self" : "_blank"}
                  rel={contact.link.startsWith("mailto:") ? "" : "noopener noreferrer"}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card-glass rounded-xl p-6 text-center hover:border-primary/40 transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-primary/20"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <Icon size={20} className="text-primary" />
                  </div>
                  <h3 className="text-sm font-heading font-semibold text-foreground mb-1">
                    {contact.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {contact.value}
                  </p>
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
