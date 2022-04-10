import Circel from "components/shapes/circel/Circel";
import "./style.scss";
const Section2 = () => {
  return (
    <div className="S-section2">
      <div className="cards">
        <div className="card">
          <h1>Web</h1>
          <h2>semplice</h2>
          <p>
            <span>
              <strong> Le Intelligenze Artificiali</strong>
            </span>
            nascono per risolvere problemi e semplificare la vita delle persone.
            Algoretico realizza le IA che ti servono, e usarle è davvero
            semplicissimo.
            <Circel arrowType="left" />
          </p>
        </div>{" "}
        <div className="card">
          <h1>sceince</h1>
          <h2>of the data</h2>
          <p>
            <span>
              <strong> What gold mines once were now are data.</strong>
            </span>
            We deal with Big Data, Data Mining and Data Analysis: this is where
            the success of each strategy is played.
            <Circel arrowType="left" />
          </p>
        </div>{" "}
        <div className="card">
          <h1>YOUR PLACE</h1>
          <h2>your internet</h2>
          <p>
            <span>
              <strong>
                {" "}
                Artificial Intelligences are born to solve problems and simplify
                people's lives.
              </strong>
            </span>
            Algoretico makes the AIs you need, and using them is really easy.
            <Circel arrowType="left" />
          </p>
        </div>
      </div>
    </div>
  );
};
export default Section2;
