import React from "react";
import HealthCareIllustration from "../../../components/HealthIllustration";
import Rectang11 from "../../../components/Rectangle11";
const HealthProvider = () => {
  return (
    <div className="providers">
      <HealthCareIllustration />
      <div>
        <h1 className="providers_h1">Leading healthcare providers</h1>
        <Rectang11 />
        <p className="health_p">
          Trafalgar provides progressive, and affordable healthcare, accessible
          on mobile and online for everyone. To us, it’s not just work. We take
          pride in the solutions we deliver
        </p>
        <button className="healthbutton_rectangle">Learn More</button>
      </div>
    </div>
  );
};
export default HealthProvider;
