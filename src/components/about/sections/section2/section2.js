import "./style.scss";

import Circel from "components/shapes/circel/Circel";
import group10 from "assetss/images/Group 10.png";

const Section2 = () => {
  return (
    <div className="a_section2">
      <div className="left">
        <h1>
          una tecnologia
          <span>su misura</span>
        </h1>
        <div className="circel">
          <img src={group10} alt="" />
        </div>
      </div>

      <div className="right">
        <p>
          L’anima di un’Intelligenza Artificiale è fatta di codici. Solo così
          può funzionare. Algoretico crea IA pensate solo per te e di cui sei il
          proprietario definitivo. Quell’anima ti appartiene, solo così creerai
          valore per la tua realtà.
        </p>
        <div className="circel">
          <Circel />
        </div>
      </div>
    </div>
  );
};

export default Section2;
