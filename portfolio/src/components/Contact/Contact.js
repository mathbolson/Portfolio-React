import React from "react";
// import { Link, Route } from "react-router-dom";
// import Learn from "./Learn";

function Contact(props) {
  return (
    <div>
      
      <form>

        <div class="container">
          <div class="p-3 mb-5 bg-dark text-white" id="main-section">
            <h1 class="border-bottom mb-4" id="h1">Contact</h1>
            <div class="form-group">
            <label for="formGroupExampleInput">Name</label>
            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Name"/>
            </div>
            <div class="form-group">
            <label for="formGroupExampleInput2">Email</label>
            <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Example@email.com"/>
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput3">Message</label>
            <input type="text" class="form-control" id="formGroupExampleInput3" placeholder=""/>
          </div>
          <button type="submit" class="btn btn-primary">submit</button>


            </div>

         </div>

      </form>
     
    </div>
  );
}

export default Contact;
