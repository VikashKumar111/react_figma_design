import Image1 from "../../../components/Image1";
import VectorLeft from "../../../components/VectorL";
import VectorRight from "../../../components/VectorR";
import Eclipse6 from "../../../components/Eclipse6";
import Eclipse5 from "../../../components/Eclipse5";
import Eclipse4 from "../../../components/Eclipse4";
import Eclipse3 from "../../../components/Eclipse3";
import Rectang17 from "../../../components/Rectangle17";
const Testimonials = () => {
  return (
    <div className="testimonialsSection">
      <div className="testimonials_rectangle13">
        <h1 className="testimonials_h1">What our customer are saying</h1>
        <Rectang17 />
        <Image1 />
        <h2 className="testimonials_h2">Edward Newgate</h2>
        <h3 className="testimonials_h3">Founder Circle</h3>
        <p className="testimonials_p">
          “Our dedicated patient engagement app and web portal allow you to
          access information instantaneously (no tedeous form, long calls, or
          administrative hassle) and securely”
        </p>
      </div>
      <VectorLeft />
      <Eclipse5 />
      <Eclipse3 />
      <Eclipse4 />
      <Eclipse6 />
      <VectorRight />
    </div>
  );
};
export default Testimonials;
