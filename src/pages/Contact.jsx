import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, Send, Sparkles } from "lucide-react";
import MagneticButton from "../components/MagneticButton";

export default function Contact({ darkMode }) {
  return (
    <div className={`contact-section ${darkMode ? "section-dark" : "section-light"}`}>
      <div className="contact-glow contact-glow-a" />
      <div className="contact-glow contact-glow-b" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 35 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="contact-panel"
      >
        <div className="contact-copy">
          <div className="contact-pill"><Sparkles size={16} /> Let’s work together</div>
          <h2>Have a project or frontend opportunity in mind?</h2>
          <p>Send me a message and let’s turn the idea into a clean, responsive web experience.</p>
          <div className="contact-meta">
            <span><Mail size={18} /> mrahmedkashif78@gmail.com</span>
            <span><MapPin size={18} /> Lahore, Pakistan</span>
          </div>
        </div>

        <div className="contact-actions">
          <motion.div
            className="paper-plane"
            animate={{ y: [0, -12, 0], rotate: [0, 4, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Send size={38} />
          </motion.div>
          <MagneticButton href="mailto:mrahmedkashif78@gmail.com" className="premium-btn premium-btn-primary">
            Say Hello <ArrowUpRight size={18} />
          </MagneticButton>
        </div>
      </motion.div>
    </div>
  );
}
