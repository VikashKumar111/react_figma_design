import Eclipse8 from "../../../components/Eclipse8";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_bg">
        <div>
          <Eclipse8 />
          <h1 className="footer_eclipse_text">T</h1>
          <h1 className="footer_trafalgar_h1">Trafalgar</h1>
          <p className="footer_trafalgar_p">
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone
          </p>
          <p className="footer_trafalgar_p2">
            ©Trafalgar PTY LTD 2020. All rights reserved
          </p>
        </div>
        <div className="footer_company">
          <h2>Company</h2>
          <h3>About </h3>
          <h3>Testimonials</h3>
          <h3> Find a doctor</h3>
          <h3>Apps</h3>
        </div>
        <div className="footer_region">
          <h2>Region</h2>
          <h3>Indonesia </h3>
          <h3>Singapore</h3>
          <h3>Hongkong</h3>
          <h3>Canada</h3>
        </div>
        <div className="footer_help">
          <h2>Help</h2>
          <h3>Help center </h3>
          <h3>Contact support</h3>
          <h3>Instructions</h3>
          <h3>How It Works</h3>
        </div>
      </div>
    </div>
  );
};
export default Footer;
