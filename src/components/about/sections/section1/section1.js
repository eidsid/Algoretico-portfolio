import "./style.scss";
import shafic from "assetss/images/shafic.png";
import Circel from "components/shapes/circel/Circel";
import group11 from "assetss/images/Group11.png";

const Section1 = () => {
  return (
    <div className="a_section1">
      <img src={shafic} alt="shafic image" />

      <div className="container">
        <div className="circel">
          <Circel arrowType="none" />
        </div>
        <h1>
          THERE IS A BETTER
          <span>
            WAY <span>algoretico</span>
          </span>
        </h1>

        <div className="bottom-circel">
          <div className="circle"></div>
          <img src={group11} alt="MEET OUR TEAM icon" />
          <span>MEET</span>
          <span>OUR</span>
          <span>TEAM</span>
        </div>
      </div>
    </div>
  );
};

export default Section1;
