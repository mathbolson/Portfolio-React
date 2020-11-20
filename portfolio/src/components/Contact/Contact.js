import React from "react";
import "../Contact/Contact.css"


function Contact() {
  return (
    <div className="body">
      
      <form>

        <div className="container">
          <div className="p-3 mb-5 bg-dark text-white" id="main-section">
            <h1 className="border-bottom mb-4" id="h1">Contact</h1>
            <div className="form-group">
            <label for="formGroupExampleInput">Name</label>
            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Name"/>
            </div>
            <div className="form-group">
            <label for="formGroupExampleInput2">Email</label>
            <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Example@email.com"/>
          </div>
          <div className="form-group">
            <label for="formGroupExampleInput3">Message</label>
            <input type="text" className="form-control" id="formGroupExampleInput3" placeholder=""/>
          </div>
          <button type="submit" className="btn btn-primary">submit</button>


            </div>

         </div>

      </form>
     
    </div>
  );
}

export default Contact;
