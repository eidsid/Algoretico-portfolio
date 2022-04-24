import Circel from "components/shapes/circel/Circel";
import "./style.scss";

const Section2 = () => {
  return (
    <div className="C-section2">
      <h1>Get in Touch</h1>
      <p> Let's talk about everything!</p>
      <form action="#" method="get">
        <div className="group">
          <input type="text" placeholder=" Your Name" />
          <input type="text" placeholder=" Your email adress" />
        </div>
        <input type="text" placeholder=" Subject" />
        <textarea
          name="message"
          id=""
          cols="50"
          rows="5"
          placeholder="message"
        ></textarea>
        <input type="submit" value="Send" className="btn" />
      </form>
    </div>
  );
};
export default Section2;
