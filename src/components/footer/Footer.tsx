import '../../styles/Footer.scss';
import FooterTop from './FooterTop'
import FooterBottom from './FooterBottom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
      <FooterTop/>
      <FooterBottom />
      </div>  
    </footer>
  );
};

export default Footer;

