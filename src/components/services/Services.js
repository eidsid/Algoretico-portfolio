import Section1 from "./sections/section1/Section1";
import Section2 from "./sections/section2/Section2";
import Section3 from "./sections/section3/Section3";
import Section4 from "./sections/section4/Section4";
import "./style.scss";
const Services = () => {
  return (
    <div className="services">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
  );
};
export default Services;
