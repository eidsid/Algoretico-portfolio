import ToTop from "components/toTop/ToTop";
import Section1 from "./sections/section1/section1";
import Section2 from "./sections/section2/section2";
import Section3 from "./sections/section3/section3";
import "./style.scss";
const About = () => {
  return (
    <div className="about">
      <Section1 />
      <Section2 />
      <Section3 />
      <ToTop />
    </div>
  );
};
export default About;
