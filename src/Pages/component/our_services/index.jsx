import RectangleService from "../../../components/RectangleS";
const Services = () => {
  return (
    <div className="services_maincontainer">
      <h1 className="services">Our Services</h1>
      <RectangleService />
      <p className="services_p">
        We provide to you the best choiches for you. Adjust it to your health
        needs and make sure your undergo treatment with our highly qualified
        doctors you can consult with us which type of service is suitable for
        your health
      </p>
      <div className="services_container">
        <div className="services_rectangle5">Search doctor</div>
        <div className="services_rectangle7">Online pharmacy</div>
        <div className="services_rectangle6">Consultation</div>
        <div className="services_rectangle8">Details info</div>
        <div className="services_rectangle9">Emergency care</div>
        <div className="services_rectangle10">Tracking</div>
      </div>
      <div>
        <button className="services_button">Learn More</button>
      </div>
    </div>
  );
};
export default Services;
