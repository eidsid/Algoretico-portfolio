import Circel from "components/shapes/circel/Circel";
import group1 from "assetss/images/Group 10.png";
import "./style.scss";
import { Link } from "react-router-dom";
import bannerImg from "assetss/images/banner.png";
import { useState } from "react";
const Section1 = () => {
  const [showVideo, setshowVideo] = useState(false);
  return (
    <div className="section1">
      <div className="left">
        <p>We help brands that do good</p>
        <h1>
          LOOK <span>GOOD</span>
        </h1>
        <Circel arrowType="down" />
      </div>
      <div className="right">
        <img src={bannerImg} alt="" />
        <div className="button" onClick={() => setshowVideo(!showVideo)}></div>
        {showVideo ? (
          <div className="vedoshow">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/wXNv-x5zVgE"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <div className="button" onClick={() => setshowVideo(!showVideo)}>
              X
            </div>
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="bottom-circel">
        <div className="circle"></div>
        <img src={group1} alt="get in touch icon" />
        <Link to="contact">
          <span>GET</span>
          <span>IN</span>
          <span>TOUCH</span>
        </Link>
      </div>
    </div>
  );
};
export default Section1;
