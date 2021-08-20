import React from "react";

import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./hero.css";
class Hero extends React.Component {
  render() {
    return (
      <div className="hero">
        <Carousel>
          <Carousel.Item>
            <div id="one"></div>
            <Carousel.Caption>
              
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div id="two"></div>

            <Carousel.Caption>
              <div id="here">
                <span className="star">
                  See the new  <img
                    className="starWars"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Star_wars2.svg/1200px-Star_wars2.svg.png"
                    alt="Second slide"
                    width="300px"
                  />{" "} collection!!{" "}
                 
                </span>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div id="three"></div>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default Hero;
