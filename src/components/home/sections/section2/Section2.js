import "./style.scss";
import shafic from "assetss/images/shafic.png";
import Circel from "components/shapes/circel/Circel";
const Section2 = () => {
  return (
    <div className="section2">
      <h2>What project do you have in mind?</h2>
      <div className="circles">
        <Circel arrowType="down" />
        <Circel arrowType="down" />
      </div>
      <img src={shafic} alt="" />
      <div className="cards">
        <div className="card">A WEBSITE / E-COMMERCE</div>
        <div className="card">Artificial intelligence</div>
        <div className="card">Company portfolio</div>
        <div className="card">Personal portfolio</div>
        <div className="card">A TOOL FOR MY COMPANY</div>{" "}
        <div className="card">Services</div>
        <div className="card">Streeming</div>
        <div className="card">education</div>
        <div className="card">A TOOL FOR MY COMPANY</div>{" "}
      </div>
    </div>
  );
};
export default Section2;
