import "./style.scss";
import Circel from "components/shapes/circel/Circel";
const Section3 = () => {
  return (
    <div className="section3">
      <div className="left">
        <h1>
          THERE’S A BETTER
          <span>WAY</span>
          <Circel arrowType="right" />
        </h1>
        <h2>
          You are in time for the
          <span>future</span>
        </h2>
        <p>
          There is the technology you need out there. And we are out there.
          Artificial Intelligences are able to change the destiny of any
          reality. From classic commercial activities to the most visionary
          projects. This is not science fiction: it is the future that is
          already happening.
          <Circel arrowType="right" />
        </p>
      </div>

      <div className="right">
        <p>
          That they were permitted to do this by the will of Caesar; Further
          traveling there are certain things which are common. More things are
          good for me, incline, be loved they wanted to ask. They begged him to
          use the council of the whole of Gaul for a day on certain occasions.{" "}
          <Circel arrowType="right" />
        </p>
        <div className="circles">
          <Circel arrowType="none" />
        </div>
      </div>
    </div>
  );
};
export default Section3;
