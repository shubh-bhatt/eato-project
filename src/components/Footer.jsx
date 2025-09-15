import play_store from "../assets/play_store.avif";
import app_store from "../assets/app_store.avif";
import logo from "../assets/logo.png";
import linkedin from "../assets/icon-linkedin.avif";
import instagram from "../assets/icon-instagram.avif";
import facebook from "../assets/icon-facebook.avif";
import twitter from "../assets/icon-twitter.avif";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-app-links">
        <p>For better experience, download the Eato app now</p>
        <img style={{ width: "196px", height: "64px" }} src={play_store} />
        <img style={{ width: "182px", height: "64px" }} src={app_store} />
      </div>

      <div className="footer-details-container">
        <div className="company-logo-container">
          <div className="logo-container">
            <img src={logo} />
            <span className="">Eato</span>
          </div>
          <div className="logo-copyright">
            © {new Date().getFullYear()} Eato Limited
          </div>
        </div>

        <div className="company-container">
          <p style={{ fontWeight: "bold" }}>Company</p>
          <span>About Us</span>
          <span>Eato Corporate</span>
          <span>Careers</span>
          <span>Team</span>
        </div>

        <div className="company-container">
          <p style={{ fontWeight: "bold" }}>Legal</p>
          <span>Terms & Conditions</span>
          <span>Cookie Policy</span>
          <span>Privacy Policy</span>
          <span>Investor Relations</span>
        </div>

        <div className="social-company-container">
          <div className="social-container">
            <p style={{ fontWeight: "bold" }}>Contact Us</p>
            <span>Help & Support</span>
            <span>Partner with us</span>
            <span>Ride with us</span>
          </div>
          <div className="social-links">
            <span>Social Links</span>
            <div>
              <img src={linkedin} />
              <img src={instagram} />
              <img src={facebook} />
              <img src={twitter} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
