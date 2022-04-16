import Circel from "components/shapes/circel/Circel";
import Bitmap from "assetss/images/Bitmap.png";
import "./style.scss";
const Section1 = () => {
  return (
    <div className="M-section1">
      <div className="topsquire">
        <div className="front-side">
          <span>MAGAZINE</span>
        </div>
        <div className="left-side">
          <span>0.2</span>
        </div>
      </div>

      <div className="Circel">
        <img src={Bitmap} className="background" alt="bit map image" />
        <div className="content">
          <h1>
            Scopri il mondo di oggi domani
            <Circel arrowType="down" />
          </h1>
          <p>
            Algoretico ha tra i suoi obiettivi quello di
            <br />
            <span>raccontare il mondo che cambia attorno a noi.</span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Section1;
