import "./style.scss";
import shafic from "assetss/images/shafic.png";
import Circel from "components/shapes/circel/Circel";
import group11 from "assetss/images/Group11.png";

const Section1 = () => {
  const background = { backgroundImage: `url(${shafic})` };
  return (
    <div className="a_section1" style={background}>
      <div className="container">
        <div className="circel">
          <Circel arrowType="none" />
        </div>
        <div>
          <h1> THERE IS A BETTER</h1>
          <p>
            <span>WAY</span> <span>algoretico</span>
          </p>
        </div>

        <div className="bottom-circel">
          <div className="circle"></div>
          <img src={group11} alt="MEET OUR TEAM icon" />
          <div className="textgroup">
            <span>MEET</span>
            <span>OUR</span>
            <span>TEAM</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
