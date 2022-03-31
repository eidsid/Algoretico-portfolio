import Section1 from "./sections/section1/Section1";
import Section2 from "./sections/section2/Section2";
import "./style.scss";
const Home = () => {
  return (
    <div className="home ">
      <Section1 />
      <Section2 />
    </div>
  );
};
export default Home;
