import ToTop from "components/toTop/ToTop";
import Section1 from "./sections/section1/Section1";
import Section2 from "./sections/section2/Section2";
import "./style.scss";
const Magazine = () => {
  return (
    <div className="container">
      <Section1 />
      <Section2 />
      <ToTop />
    </div>
  );
};
export default Magazine;
