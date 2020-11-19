import React from "react";
import project1 from '../assets/project1.png'; 
// import project2 from '../assets/project2.png'; 
// import project3 from '../assets/project3.png'; 
// import project4 from '../assets/project4.png'; 
// import project5 from '../assets/project5.png'; 


function Portfolio() {
  return (
    <div>
      <h1 id="portfolio-header">My Portfolio</h1>
      <img src={project1} alt="Logo" width="400" height="400" />;

    </div>
  );
}

export default Portfolio;
