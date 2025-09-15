import play_store from "../assets/play_store.avif";
import app_store from "../assets/app_store.avif";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-app-links">
        <p>For better experience, download the Eato app now</p>
        <img style={{ width: "196px", height: "64px" }} src={play_store} />
        <img style={{ width: "182px", height: "64px" }} src={app_store} />
      </div>

      <div className="footer-details-container">
        <div className="company-container">
          <div className="logo-container">
            <img src={logo} />
            <span className="">Eato</span>
          </div>
          <div className="logo-copyright">
            © {new Date().getFullYear()} Eato Limited
          </div>
        </div>

        <div>company</div>
      </div>
    </div>
  );
};
export default Footer;
