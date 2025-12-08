/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import ChangingProgressProvider from "./ChangingProgressProvider";
import "react-circular-progressbar/dist/styles.css";

function Skills() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skill mt-5" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p className="justify-content">
                Driven by a strong desire to gain deeper technical and
                industrial knowledge, I continuously strive to learn, build, and
                innovate. As a Full-Stack Developer, I specialize in creating
                seamless and efficient web applications using modern frontend
                and backend technologies. I have hands-on experience in building
                multiple real-world projects, backed by a solid understanding of
                Data Structures and Algorithms. With a focus on clean
                architecture, problem-solving, and continuous improvement, I aim
                to contribute to meaningful products and growing teams through
                dedication and hard work.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slide"
              >
                {/* HTML */}
                <div className="item">
                  <ChangingProgressProvider values={[0, 85]}>
                    {(percentage) => (
                      <CircularProgressbar
                        value={percentage}
                        text={`${percentage}%`}
                        background
                        backgroundPadding={20}
                        styles={buildStyles({
                          backgroundColor: "#151515",
                          textColor: "#fff",
                          textSize: "0.8rem",
                          pathColor: "#863494",
                          trailColor: "transparent",
                          pathTransitionDuration: 1,
                        })}
                      />
                    )}
                  </ChangingProgressProvider>
                  <h5>Html</h5>
                </div>

                {/* Css */}
                <div className="item">
                  <ChangingProgressProvider values={[0, 70]}>
                    {(percentage) => (
                      <CircularProgressbar
                        value={percentage}
                        text={`${percentage}%`}
                        background
                        backgroundPadding={20}
                        styles={buildStyles({
                          backgroundColor: "#151515",
                          textColor: "#fff",
                          textSize: "0.8rem",
                          pathColor: "#863494",
                          trailColor: "transparent",
                          pathTransitionDuration: 1,
                        })}
                      />
                    )}
                  </ChangingProgressProvider>
                  <h5>Css3</h5>
                </div>

                {/* Javascript */}
                <div className="item">
                  <ChangingProgressProvider values={[0, 80]}>
                    {(percentage) => (
                      <CircularProgressbar
                        value={percentage}
                        text={`${percentage}%`}
                        background
                        backgroundPadding={20}
                        styles={buildStyles({
                          backgroundColor: "#151515",
                          textColor: "#fff",
                          textSize: "0.8rem",
                          pathColor: "#863494",
                          trailColor: "transparent",
                          pathTransitionDuration: 1,
                        })}
                      />
                    )}
                  </ChangingProgressProvider>
                  <h5>Javascript</h5>
                </div>

                {/* ReactJs */}
                <div className="item">
                  <ChangingProgressProvider values={[0, 80]}>
                    {(percentage) => (
                      <CircularProgressbar
                        value={percentage}
                        text={`${percentage}%`}
                        background
                        backgroundPadding={20}
                        styles={buildStyles({
                          backgroundColor: "#151515",
                          textColor: "#fff",
                          textSize: "0.8rem",
                          pathColor: "#863494",
                          trailColor: "transparent",
                          pathTransitionDuration: 1,
                        })}
                      />
                    )}
                  </ChangingProgressProvider>
                  <h5>ReactJs</h5>
                </div>
                         {/* NextJs */}
                <div className="item">
                  <ChangingProgressProvider values={[0, 80]}>
                    {(percentage) => (
                      <CircularProgressbar
                        value={percentage}
                        text={`${percentage}%`}
                        background
                        backgroundPadding={20}
                        styles={buildStyles({
                          backgroundColor: "#151515",
                          textColor: "#fff",
                          textSize: "0.8rem",
                          pathColor: "#863494",
                          trailColor: "transparent",
                          pathTransitionDuration: 1,
                        })}
                      />
                    )}
                  </ChangingProgressProvider>
                  <h5>NextJs</h5>
                </div>
                {/* Nodejs */}
                <div className="item">
                  <ChangingProgressProvider values={[0, 70]}>
                    {(percentage) => (
                      <CircularProgressbar
                        value={percentage}
                        text={`${percentage}%`}
                        background
                        backgroundPadding={20}
                        styles={buildStyles({
                          backgroundColor: "#151515",
                          textColor: "#fff",
                          textSize: "0.8rem",
                          pathColor: "#863494",
                          trailColor: "transparent",
                          pathTransitionDuration: 1,
                        })}
                      />
                    )}
                  </ChangingProgressProvider>
                  <h5>Nodejs</h5>
                </div>

                {/* ExpressJs */}
                <div className="item">
                  <ChangingProgressProvider values={[0, 70]}>
                    {(percentage) => (
                      <CircularProgressbar
                        value={percentage}
                        text={`${percentage}%`}
                        background
                        backgroundPadding={20}
                        styles={buildStyles({
                          backgroundColor: "#151515",
                          textColor: "#fff",
                          textSize: "0.8rem",
                          pathColor: "#863494",
                          trailColor: "transparent",
                          pathTransitionDuration: 1,
                        })}
                      />
                    )}
                  </ChangingProgressProvider>
                  <h5>ExpressJs</h5>
                </div>

                {/* MongoDB */}
                <div className="item">
                  <ChangingProgressProvider values={[0, 80]}>
                    {(percentage) => (
                      <CircularProgressbar
                        value={percentage}
                        text={`${percentage}%`}
                        background
                        backgroundPadding={20}
                        styles={buildStyles({
                          backgroundColor: "#151515",
                          textColor: "#fff",
                          textSize: "0.8rem",
                          pathColor: "#863494",
                          trailColor: "transparent",
                          pathTransitionDuration: 1,
                        })}
                      />
                    )}
                  </ChangingProgressProvider>
                  <h5>MongoDb</h5>
                </div>
                {/* MySQL */}
                <div className="item">
                  <ChangingProgressProvider values={[0, 80]}>
                    {(percentage) => (
                      <CircularProgressbar
                        value={percentage}
                        text={`${percentage}%`}
                        background
                        backgroundPadding={20}
                        styles={buildStyles({
                          backgroundColor: "#151515",
                          textColor: "#fff",
                          textSize: "0.8rem",
                          pathColor: "#863494",
                          trailColor: "transparent",
                          pathTransitionDuration: 1,
                        })}
                      />
                    )}
                  </ChangingProgressProvider>
                  <h5>MySQL</h5>
                </div>
                {/* Tailwind Css */}
                <div className="item">
                  <ChangingProgressProvider values={[0, 60]}>
                    {(percentage) => (
                      <CircularProgressbar
                        value={percentage}
                        text={`${percentage}%`}
                        background
                        backgroundPadding={20}
                        styles={buildStyles({
                          backgroundColor: "#151515",
                          textColor: "#fff",
                          textSize: "0.8rem",
                          pathColor: "#863494",
                          trailColor: "transparent",
                          pathTransitionDuration: 1,
                        })}
                      />
                    )}
                  </ChangingProgressProvider>
                  <h5>Tailwind CSS</h5>
                </div>
                {/* Bootstrap */}
                <div className="item">
                  <ChangingProgressProvider values={[0, 60]}>
                    {(percentage) => (
                      <CircularProgressbar
                        value={percentage}
                        text={`${percentage}%`}
                        background
                        backgroundPadding={20}
                        styles={buildStyles({
                          backgroundColor: "#151515",
                          textColor: "#fff",
                          textSize: "0.8rem",
                          pathColor: "#863494",
                          trailColor: "transparent",
                          pathTransitionDuration: 1,
                        })}
                      />
                    )}
                  </ChangingProgressProvider>
                  <h5>Bootstrap</h5>
                </div>

                {/* Git and Github */}
                <div className="item">
                  <ChangingProgressProvider values={[0, 70]}>
                    {(percentage) => (
                      <CircularProgressbar
                        value={percentage}
                        text={`${percentage}%`}
                        background
                        backgroundPadding={20}
                        styles={buildStyles({
                          backgroundColor: "#151515",
                          textColor: "#fff",
                          textSize: "0.8rem",
                          pathColor: "#863494",
                          trailColor: "transparent",
                          pathTransitionDuration: 1,
                        })}
                      />
                    )}
                  </ChangingProgressProvider>
                  <h5>Git and Github</h5>
                </div>

                {/* Java */}
                <div className="item">
                  <ChangingProgressProvider values={[0, 50]}>
                    {(percentage) => (
                      <CircularProgressbar
                        value={percentage}
                        text={`${percentage}%`}
                        background
                        backgroundPadding={20}
                        styles={buildStyles({
                          backgroundColor: "#151515",
                          textColor: "#fff",
                          textSize: "0.8rem",
                          pathColor: "#863494",
                          trailColor: "transparent",
                          pathTransitionDuration: 1,
                        })}
                      />
                    )}
                  </ChangingProgressProvider>
                  <h5>Java</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
}

export default Skills;
