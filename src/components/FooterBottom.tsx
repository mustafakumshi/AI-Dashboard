// FooterBottom.tsx
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa'; // Import icons

const FooterBottom = () => (
  <div className="footer-bottom">
    <p>Built by Mustafa Kumshi</p>
    <div className="social-icons">
      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
        <FaGithub size={24} />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={24} />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram size={24} />
      </a>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook size={24} />
      </a>
    </div>
  </div>
);

export default FooterBottom;
