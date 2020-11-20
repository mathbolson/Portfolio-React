import React from "react";
import "../Portfolio/Portfolio.css"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Portfolio() {
  return (
    <div className="Container">
      <div className="caixa"></div>
      <div class="carousel-wrapper">
            <Carousel infiniteLoop useKeyboardArrows autoPlay > 
            <div>
                    <img src="../project5.png" alt="" />
                </div>
                <div>
                    <img src="../project4.png" alt="" />
                </div>
                <div>
                    <img src="../project1.png" alt="" />
                </div>
                <div>
                    <img src="../project2.png" alt=""/>
                </div>
                <div>
                    <img src="../project3.png" alt="" />
                </div>
                <div>
                    <img src="../project6.png" alt="" />
                </div>
            </Carousel>
            <div className="boxs"></div>
        </div>
      
    
    </div>
  );
}

export default Portfolio;
