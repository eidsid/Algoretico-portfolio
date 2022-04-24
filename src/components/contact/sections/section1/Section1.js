import Circel from "components/shapes/circel/Circel";
import group1 from "assetss/images/Group 10.png";
import "./style.scss";

const Section1 = () => {
  return (
    <div className="C-section1">
      <h1>Dal bisogno alla soluzione, in tre mosse. </h1>
      <div className="cards">
        <div className="card">
          <span>🚀</span>
          <h3>Partiamo da te</h3>
          <p>
            Ogni progetto nasce da un’analisi del fabbisogno, da cui deriva una
            mappa dei processi: capiamo insieme cosa ti serve e decidiamo come
            procedere. Non ti costa niente, garantito.
          </p>
          <div className="circel">
            <Circel arrowType="right" />
          </div>
        </div>
        <div className="card">
          <span>❤️</span>
          <h3>Partiamo da te</h3>
          <p>
            Ogni progetto nasce da un’analisi del fabbisogno, da cui deriva una
            mappa dei processi: capiamo insieme cosa ti serve e decidiamo come
            procedere. Non ti costa niente, garantito.
          </p>
          <div className="circel">
            <Circel />
          </div>
        </div>
        <div className="card">
          <span>🔐</span>
          <h3>Partiamo da te</h3>
          <p>
            Ogni progetto nasce da un’analisi del fabbisogno, da cui deriva una
            mappa dei processi: capiamo insieme cosa ti serve e decidiamo come
            procedere. Non ti costa niente, garantito.
          </p>
          <div className="circel">
            <Circel arrowType="left" />
          </div>
        </div>
      </div>
      <div className="images">
        <img src={group1} alt="logo" className="left" />
        <img src={group1} alt="logo" className="right" />
      </div>
    </div>
  );
};
export default Section1;
