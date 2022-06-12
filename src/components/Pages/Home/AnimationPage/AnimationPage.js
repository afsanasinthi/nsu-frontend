import React from "react";
// import banner from "../../../../img/bullying-concept_23-2148599174 (1).png";
import complain from "../../../../img/bg1-01-01.png";
// import { Animated } from "react-animated-css";
import "./AnimationPage.css";
import Marquee from "react-fast-marquee";
// import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const AnimationPage = () => {
  return (
    <div className="banner css-selector">
      <div className="row container">
        <div className="col-lg-2"></div>
        <div className="col-lg-6">

          <h1 className="pb-3 pt-5 text-white">Do you have a trouble?</h1>

          <p className="text-white text-align">
            if you face any problem which break NSU protocol and policy . Let
            use work together. Submit your problems, we will help you to solve
            your issue. Lets keep our life peace.
          </p>

          {/* <Link
              to="/login"
              className="btn px-4 py-2 align fw-bold custom-botton rounded-3 btn-outline-warning"
            >
              Login
            </Link> */}
          <span className="custom-botton">
            <Link to="/login" className="link"></Link>
          </span>

        </div>
        <div className="col-lg-4">
          <img className="w-100 zoomIn" src={complain} alt="Third slide" />
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12">
            <div className="d-flex justify-content-between align-items-center breaking-news bg-white">
              <div className="d-flex flex-row flex-grow-1 flex-fill justify-content-center py-2 text-white px-1 news">
                <span className="d-flex align-items-center pb-4 pt-3 text-warning fw-bold">
                  Note
                </span>
              </div>
              <Marquee
                class="news-scroll"
                behavior="scroll"
                direction="left"
                onmouseover="this.stop();"
                onmouseout="this.start();"
              >
                <p className="pt-2">
                  For any type of complaint, you must have good evidence.
                </p>
                <span className="dot"></span>
                <p className="pt-2">Your evidence must be in pdf format.</p>
                <span className="dot"></span>
                <p className="pt-2">
                  Only university members are allowed to file a complaint.
                </p>
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimationPage;
