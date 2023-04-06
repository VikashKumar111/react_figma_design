import Eclipse7 from "../../../components/Eclipse7";
import HeaderLogoText from "../../../components/HeaderLogoText";
import HeaderIllustration from "../../../components/HeaderIllustration";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="navbar-seaction">
          <div className="logo-wrapper">
            <Eclipse7 />
            <HeaderLogoText />
            <span className="logo-text">Trafalgar</span>
          </div>
          <div className="social-media-handles">
            <ul>
              <li className="home">Home</li>
              <li className="doctor">Find a doctor</li>
              <li className="apps">Apps</li>
              <li className="testimonials">Testimonials</li>
              <li className="about">About us</li>
            </ul>
          </div>
          <div>
            <HeaderIllustration />
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
