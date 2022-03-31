import "./style.scss";
import Bitmap from "assetss/images/Bitmap.png";
const Circel = (props) => {
  return (
    <div className="circleContainer">
      <img src={Bitmap} alt="" />
      <div className={`arrow ${props.arrowType}`}></div>
    </div>
  );
};
export default Circel;
