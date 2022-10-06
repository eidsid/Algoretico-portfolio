import "./style.scss";
const Footer = () => {
  return (
    <div className="footer">
      <div className="circels">
        <div className="group">
          <div className="small"></div>
          <div className="big"></div>
        </div>

        <div className="group">
          <div className="small"></div>
          <div className="big"></div>
        </div>
      </div>

      <div className="info">
        <div className="col">
          <p> SEDE COMMERCIALE Piazza San Sepolcro</p>
          <span> 2, 20123 Milano (MI) SEDE LEGALE</span>
          <span> Piazza Vttorio Alfieri 26, 14100 Asti (AT)</span>
        </div>
        <div className="col">
          <span>
            Algoretico realizza qualsiasi tipo di software. Il nostro preferito?
            L'Intelligenza Artificiale.
          </span>
          <span>Algoretico Srls PIVA e CF IT01696200052</span>
        </div>
        <div className="col">
          <p> SEDE COMMERCIALE Piazza San Sepolcro 2,</p>
          <span>
            20123 Milano (MI) SEDE LEGALE Piazza Vttorio Alfieri 26, 14100 Asti
            (AT)
          </span>
        </div>{" "}
      </div>
    </div>
  );
};
export default Footer;
