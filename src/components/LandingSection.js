import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
// import FullScreenSection from "./FullScreenSction";
import image from "./image.jpeg";
import image2 from "./image.jpeg";
import styles from "./LandingSection.module.css";
import { Carousel } from "react-responsive-carousel";
import "bootstrap/dist/css/bootstrap.min.css";

import "react-responsive-carousel/lib/styles/carousel.min.css";

const bio1 = "Full Stack developer";
const bio2 = "specialised in React";

const LandingSection = () => {
  return (
    <>
      <div className={`${styles.pageHeader} ${styles.gradient} `}>
        <Carousel
          autoPlay={true}
          interval={3000}
          showArrows={false}
          showStatus={false}
          width={"100%"}
          showIndicators={false}
          infiniteLoop={true}
        >
          <VStack spacing={4} alignItems="center">
            <Avatar
              src={image}
              style={{ width: "200px", height: "200px", marginTop: "100px" }}
            />
            <Heading
              style={{
                fontSize: "14px",
                color: "#ffbd39",
                letterSpacing: "3px",
              }}
            >
              HELLO!
            </Heading>
            <Heading style={{ fontSize: "3.5rem", fontWeight: "800" }}>
              {" "}
              I'm <span style={{ color: "#ffbd39" }}>Sara</span>
            </Heading>
          </VStack>

          <div className="container " style={{ marginTop: "100px" }}>
            <div className="row">
              <div className="col-md-5">
                <Heading style={{ fontSize: "3.5rem" }}>{bio1}</Heading>
                <Heading>
                  specialised in <span style={{ color: "#ffbd39" }}>React</span>
                </Heading>
              </div>
              <div className="col-md-6">
                <img src={image2} alt="Header image" width={200} height={100} />
              </div>
            </div>
          </div>
        </Carousel>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fff"
            fill-opacity="1"
            d="M0,160L48,154.7C96,149,192,139,288,122.7C384,107,480,85,576,96C672,107,768,149,864,170.7C960,192,1056,192,1152,176C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </>
  );
};

export default LandingSection;
