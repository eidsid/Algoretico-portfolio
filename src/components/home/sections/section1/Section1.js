import Circel from "components/shapes/circel/Circel";
import group1 from "assetss/images/Group 10.png";
import "./style.scss";
import { Link } from "react-router-dom";
import bannerImg from "assetss/images/banner.png";
const Section1 = () => {
  return (
    <div className="section1">
      <div className="left">
        <p>We help brands that do good</p>
        <h1>
          LOOK <span>GOOD</span>
        </h1>
        <Circel arrowType="down" />
      </div>
      <div className="right">
        <img src={bannerImg} alt="" />
      </div>
      <div className="bottom-circel">
        <div className="circle"></div>
        <img src={group1} alt="get in touch icon" />
        <Link to="contact">
          <span>GET</span>
          <span>IN</span>
          <span>TOUCH</span>
        </Link>
      </div>
    </div>
  );
};
export default Section1;
