import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <motion.div
        className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
          Get In Touch
        </h2>

        <p className="text-lg text-slate-600 mb-12 leading-relaxed">
          I’m currently open to new opportunities to build web or mobile
          applications. Whether you have a project in mind, a collaboration,
          or just want to say hi — my inbox is always open.
        </p>

        {/* Contact Links */}
        <div className="flex justify-center gap-6 flex-wrap">
          {/* Email */}
          <motion.a
            whileHover={{ y: -3 }}
            href="mailto:saravanakkumarta@retrocoders.dev"
            className="flex items-center gap-3 border-2 border-slate-900 px-7 py-3 rounded-lg font-semibold text-slate-900 hover:bg-slate-900 hover:text-white transition-colors"
          >
            <FaEnvelope className="text-xl" />
            Email Me
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            whileHover={{ y: -3 }}
            href="https://www.linkedin.com/in/saravanak-kumar-annadurai/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 border-2 border-slate-900 px-7 py-3 rounded-lg font-semibold text-slate-900 hover:bg-slate-900 hover:text-white transition-colors"
          >
            <FaLinkedin className="text-xl" />
            LinkedIn
          </motion.a>

          {/* GitHub */}
          <motion.a
            whileHover={{ y: -3 }}
            href="https://github.com/saravanakkumarta-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 border-2 border-slate-900 px-7 py-3 rounded-lg font-semibold text-slate-900 hover:bg-slate-900 hover:text-white transition-colors"
          >
            <FaGithub className="text-xl" />
            GitHub
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;

const Footer = () => {
  return (
    <footer className="bg-slate-50 py-8 text-center border-t border-slate-200">
      <p className="text-slate-500 text-sm">
        &copy; {new Date().getFullYear()} Saravanak Kumar T A, Built with React & Tailwind.
      </p>
    </footer>
  );
};

export { Contact, Footer };