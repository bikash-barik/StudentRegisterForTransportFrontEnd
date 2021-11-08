import React, { Component } from "react";
import { Slide } from "react-slideshow-image";

//importing the images
import slide1 from "../resources/info-about-banner.jpg";
import slide2 from "../resources/inner-banner-01.jpg";
import slide3 from "../resources/cutm1.jpg";
import slide4 from "../resources/cutm.jpg";


//save it to an array
const slideImages = [slide1, slide2, slide3,slide4];

//slider properties
const properties = {
  duration: 2000,
  transitionDuration: 400,
  infinite: true,
  indicators: true,
  arrows: true
};

export default class HomeSlider extends Component {
  render() {
    return (
      <div className="slider" style={{ width: 1530 }}>
        <Slide {...properties}>
          <div className="each-slide">
            <div
              style={{
                backgroundImage: `url(${slideImages[0]})`,
                height: 650
              }}
            >
              <span>Centurion University of Technology & Management, Bhubaneswar</span>
            </div>
          </div>
          <div className="each-slide">
            <div
              style={{ backgroundImage: `url(${slideImages[1]})`, height: 650 }}
            >
              <span>Centurion University of Technology & Management, Bhubaneswar</span>
            </div>
          </div>
          <div className="each-slide">
            <div
              style={{ backgroundImage: `url(${slideImages[2]})`, height: 650, backgroundSize: 'cover' }}
            >
              <span>Centurion University of Technology & Management, Bhubaneswar</span>
            </div>
          </div>

          <div className="each-slide">
            <div
              style={{ backgroundImage: `url(${slideImages[3]})`, height: 650, backgroundSize: 'cover' }}
            >
              <span>Centurion University of Technology & Management, Bhubaneswar</span>
            </div>
          </div>
        </Slide>
      </div>
    );
  }
}