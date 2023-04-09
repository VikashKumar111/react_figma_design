import React from "react";
import Eclipse7 from "../../../components/Eclipse7";
import HeaderLogoText from "../../../components/HeaderLogoText";
import HeaderIllustration from "../../../components/HeaderIllustration";
import HeaderText from "../../../components/HeaderText";
import Vector from "../../../components/Vector";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="navbar-seaction">
          <div className="logo-wrapper">
            <Eclipse7 />
            <HeaderLogoText />
            <span className="logo-text">Trafalgar</span>
            <h6 className="vector_1">
              <Vector />
            </h6>
            <h6 className="vector_2">
              <Vector />
            </h6>
            <h6 className="vector_3">
              <Vector />
            </h6>
            <h6 className="vector_4">
              <Vector />
            </h6>
            <h6 className="vector_5">
              <Vector />
            </h6>
            <h6 className="vector_6">
              <Vector />
            </h6>
            <h6 className="vector_7">
              <Vector />
            </h6>
            <h6 className="vector_8">
              <Vector />
            </h6>
            <h6 className="vector_9">
              <Vector />
            </h6>
            <h6 className="vector_10">
              <Vector />
            </h6>
            <h6 className="vector_11">
              <Vector />
            </h6>
            <h6 className="vector_12">
              <Vector />
            </h6>
            <h6 className="vector_13">
              <Vector />
            </h6>
            <h6 className="vector_14">
              <Vector />
            </h6>
            <h6 className="vector_15">
              <Vector />
            </h6>
          </div>
          <div>
            <ul>
              <li className="home">
                <a href="/">Home</a>
              </li>
              <li className="doctor">
                <a href="/">Find a doctor</a>
              </li>
              <li className="apps">
                <a href="/">Apps</a>
              </li>
              <li className="testimonials">
                <a href="/">Testimonials</a>
              </li>
              <li className="about">
                <a href="/">About us</a>
              </li>
            </ul>
          </div>
          {/* <div>
            <HeaderText />
          </div>
          <div>
            <HeaderIllustration />
          </div> */}
        </div>
      </div>
    </header>
  );
};
export default Header;
