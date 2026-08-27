import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer id="contact" className="section-anchor footer-wrap">
      <div className="page-container">
        <div className="contact-card glass-card reveal">
          <div className="contact-copy">
            <p className="eyebrow">LET&apos;S CONNECT</p>
            <h2>Have a project or opportunity in mind?</h2>
            <p>Feel free to contact me for frontend work, internship opportunities or collaboration.</p>
            <div className="contact-list">
              <a href="mailto:mrahmedkashif78@gmail.com"><Mail size={18} aria-hidden="true" /> mrahmedkashif78@gmail.com</a>
              <span><MapPin size={18} aria-hidden="true" /> Lahore, Pakistan</span>
            </div>
          </div>

          <div className="contact-actions">
            <a className="btn btn-primary" href="mailto:mrahmedkashif78@gmail.com">Send Email <Send size={17} aria-hidden="true" /></a>
            <div className="social-row">
              <a href="https://github.com/ahmed-dew123" target="_blank" rel="noopener noreferrer" aria-label="Ahmed Kashif on GitHub"><Github aria-hidden="true" /></a>
              <a href="https://www.linkedin.com/in/ahmed-kashif-6665992b2" target="_blank" rel="noopener noreferrer" aria-label="Ahmed Kashif on LinkedIn"><Linkedin aria-hidden="true" /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <Logo />
          <p>© {new Date().getFullYear()} Ahmed Kashif. Built with React and lots of practice.</p>
        </div>
      </div>
    </footer>
  );
}
