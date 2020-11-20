import React from "react";
import logo from '../assets/face.jpg'; 
import "./About.css";


function About() {
  return (
    <div className="App">
      <div class="container">
      <div class="p-3 mb-5 bg-dark text-white" id="text"> 
            <h1 class="border-bottom mb-4" id="h1">About me</h1>
            <img src={logo} alt="Logo" width="200" height="200" id="foto"/>
            <p className="mt-2 text-center" id="bio-text">Welcome to my portfolio! My name is Matheus Weber Bolson. I was born in Brasilia, Brazil and it was always my dream to move to a different country and experience a different culture. When I was 21 I moved to San Diego to take college classNamees but was not quite sure what I wanted to study. After getting acquanited with computer science, I knew programming was a field I wanted to get into. Now I am here and ready to take my skills to the next level and pursue my dream of becoming a developer.</p>
        <div id="pics">
          <h4>Social Medias</h4>
          <a href="https://github.com/mathbolson"><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" className="social" alt="GitHub" width="80" height="80"/></a>
          <a href="https://www.linkedin.com/in/matheus-weber-bolson-1388421ab/"><img src="https://image.flaticon.com/icons/png/512/61/61109.png" className="social" alt="LinkedIn" width="80" height="80" /></a>
          <a href="https://stackoverflow.com/users/13667717/mathbolson"><img src="data:image/png;base64,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" className="social" alt="Stack Overflow" width="80" height="80"/></a>
        </div>

        <div id="pics2">



        </div>
        <h4>Contact me</h4>
            <a href="https://docs.google.com/document/d/1qG3ecfGqEKYcaO74kbqO_z958Aq_oS9LTUq47Sgwn5c/edit?usp=sharing"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQA7rHigJuORgfLdDDRU6xGEFqnUYXegydaNg&usqp=CAU" className="social" alt="resume" width="80" height="80"/></a>
            <a href = "mailto: mathbolson@hotmail.com"><img src="https://i.pinimg.com/originals/2b/b4/28/2bb428b7e4aa39078a119deccacae6f3.png" className="social" alt="email" width="80" height="80"/></a>
            <a href="tel:+018582621033"><img src="https://icon-library.com/images/phone-calling-icon/phone-calling-icon-0.jpg" className="social" alt="number" width="80" height="80"/></a>


      </div>
      </div>
    </div>
  );
}

export default About;
