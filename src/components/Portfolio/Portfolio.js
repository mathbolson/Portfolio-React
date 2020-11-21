import React from "react";
import "../Portfolio/Portfolio.css"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Portfolio() {
  return (
    <div className="Container">
      <div className="caixa"></div>
      <div className="carousel-wrapper">
            <Carousel infiniteLoop useKeyboardArrows autoPlay > 
            <div>
                    <img src="../project5.png" alt="" />
                    <p className="legend"> <a href="https://reastauranttracker.herokuapp.com/"> Restaurant Track </a> </p>
                </div>
                <div>
                    <img src="../project4.png" alt="" />
                    <p className="legend"> <a href="https://burger-eatery.herokuapp.com/"> Eat-da-Burger! </a> </p>
                </div>
                <div>
                    <img src="../project1.png" alt="" />
                    <p className="legend"> <a href="https://mathbolson.github.io/Mood-me/"> Mood-Me </a> </p>
                </div>
                <div>
                    <img src="../project2.png" alt=""/>
                    <p className="legend"> <a href="https://github.com/mathbolson/Note-Taker"> Note Taker </a> </p>
                </div>
                <div>
                    <img src="../project3.png" alt="" />
                    <p className="legend"> <a href="https://github.com/mathbolson/Code-quiz"> Code Quiz </a> </p>
                </div>
                <div>
                    <img src="../project6.png" alt="" />
                    <p className="legend"> <a href="https://trackyourbudgett.herokuapp.com/"> Budget Tracker </a> </p>
                </div>
            </Carousel>
            <div className="boxs"></div>
        </div>
      
    
    </div>
  );
}

export default Portfolio;
