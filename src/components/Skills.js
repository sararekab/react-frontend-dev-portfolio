import React from 'react'
import FullScreenSection from "./FullScreenSction";
import { Box, Heading } from "@chakra-ui/react";
function Skills() {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
        <path
          fill="rgb(24, 11, 231)"
          fill-opacity="1"
          d="M0,160L48,154.7C96,149,192,139,288,122.7C384,107,480,85,576,96C672,107,768,149,864,170.7C960,192,1056,192,1152,176C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <FullScreenSection
        backgroundColor="rgb(24, 11, 231)"
        isDarkBackground
        p={8}
        alignItems="flex-start"
        spacing={8}
      >
        <Heading as="h1" id="skills-section" style={{ color: "white" }}>
          Skills
        </Heading>
        <div className="row ">
          <div className="col-md-6 pb-4">
            <div className="progress-wrap">
              <h4>ReactJs</h4>
              <div className="progress">
                <div
                  className="progress-bar"
                  style={{
                    backgroundColor: "#ffbd39",
                    width: "90%",
                    color: "black",
                  }}
                  role="progressbar"
                  aria-valuemin={0}
                  aria-valuenow={90}
                  aria-valuemax={100}
                >
                  <span>90%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 pb-4">
            <div className="progress-wrap">
              <h4>Java Script</h4>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={85}
                  aria-valuemax={100}
                  style={{
                    backgroundColor: "#ffbd39",
                    width: "85%",
                    color: "black",
                  }}
                  aria-valuemin={0}
                >
                  <span>85%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 pb-4">
            <div className="progress-wrap">
              <h4>HTML5</h4>
              <div className="progress">
                <div
                  className="progress-bar color-1"
                  role="progressbar"
                  aria-valuenow={95}
                  aria-valuemax={100}
                  style={{
                    backgroundColor: "#ffbd39",
                    width: "95%",
                    color: "black",
                  }}
                  aria-valuemin={0}
                >
                  <span>95%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 pb-4">
            <div className="progress-wrap">
              <h4>CSS3</h4>
              <div className="progress">
                <div
                  className="progress-bar color-1"
                  role="progressbar"
                  aria-valuenow={85}
                  aria-valuemax={100}
                  style={{
                    backgroundColor: "#ffbd39",
                    width: "85%",
                    color: "black",
                  }}
                  aria-valuemin={0}
                >
                  <span>85%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 pb-4">
            <div className="progress-wrap">
              <h4>Bootstrap</h4>
              <div className="progress">
                <div
                  className="progress-bar"
                  style={{
                    backgroundColor: "#ffbd39",
                    width: "85%",
                    color: "black",
                  }}
                  role="progressbar"
                  aria-valuenow={85}
                  aria-valuemax={100}
                  aria-valuemin={0}
                >
                  <span>85%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 pb-4">
            <div className="progress-wrap">
              <h4>NextJS</h4>
              <div className="progress">
                <div
                  className="progress-bar color-1"
                  role="progressbar"
                  aria-valuenow={75}
                  aria-valuemax={100}
                  style={{
                    backgroundColor: "#ffbd39",
                    width: "75%",
                    color: "black",
                  }}
                  aria-valuemin={0}
                >
                  <span>75%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 pb-4">
            <div className="progress-wrap">
              <h4>GIT</h4>
              <div className="progress">
                <div
                  className="progress-bar color-1"
                  role="progressbar"
                  aria-valuenow={80}
                  aria-valuemax={100}
                  style={{
                    backgroundColor: "#ffbd39",
                    width: "80%",
                    color: "black",
                  }}
                  aria-valuemin={0}
                >
                  <span>80%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 pb-4">
            <div className="progress-wrap">
              <h4>Node JS</h4>
              <div className="progress">
                <div
                  className="progress-bar color-1"
                  role="progressbar"
                  aria-valuenow={75}
                  aria-valuemax={100}
                  style={{
                    backgroundColor: "#ffbd39",
                    width: "75%",
                    color: "black",
                  }}
                  aria-valuemin={0}
                >
                  <span>75%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 pb-4">
            <div className="progress-wrap">
              <h4>Python</h4>
              <div className="progress">
                <div
                  className="progress-bar color-1"
                  role="progressbar"
                  aria-valuenow={75}
                  aria-valuemax={100}
                  style={{
                    backgroundColor: "#ffbd39",
                    width: "75%",
                    color: "black",
                  }}
                  aria-valuemin={0}
                >
                  <span>75%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 pb-4">
            <div className="progress-wrap">
              <h4>Java</h4>
              <div className="progress">
                <div
                  className="progress-bar color-1"
                  role="progressbar"
                  aria-valuenow={70}
                  aria-valuemax={100}
                  style={{
                    backgroundColor: "#ffbd39",
                    width: "75%",
                    color: "black",
                  }}
                  aria-valuemin={0}
                >
                  <span>70%</span>
                </div>
              </div>
            </div>
          </div>
          <div
            class="col-md-6 text-center ftco-animate fadeInUp ftco-animated "
            style={{ margin: "auto" }}
          >
            <p style={{ marginTop: "60px" }}>
              <a
                href="/SaraRekab_CV_2025_.pdf"
                target="_blank"
                class="btn btn-primary py-4 px-5"
                style={{
                  backgroundColor: "#ffbd39",
                  color: "black",
                  border: "1px solid  !important",
                  borderRadius: "40px",
                }}
              >
                Download CV
              </a>
            </p>
          </div>
        </div>
      </FullScreenSection>
      <svg
        style={{ backgroundColor: "rgb(24, 11, 231)" }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 220"
      >
        <path
          fill="#512DA8"
          fill-opacity="1"
          d="M0,160L48,154.7C96,149,192,139,288,122.7C384,107,480,85,576,96C672,107,768,149,864,170.7C960,192,1056,192,1152,176C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </>
  );
}

export default Skills