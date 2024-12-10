import { Link } from 'react-router-dom'
import NavBar from '../NavBar'
import React, { useState } from 'react';
function edit() {
  window.location.href = "/editprofile";
}

function EditComponent(){


  let [saveSuccess, setSaveSuccess] = useState(false);

  function save() {

    if( document.querySelector('input[name="bio"]').value == "")
      console.log("Poopy");
    else
      console.log("Pee");
    let bio = document.querySelector('input[name="bio"]').value;
    console.log("Entered bio:", bio);


    if( document.querySelector('input[name="roommates"]:checked') == null)
      console.log("Poopy");
    else
      console.log("Pee");
    let roommates1 = document.querySelector('input[name="roommates"]:checked').value;
    console.log("Selected roommates:", roommates1);

    if( document.querySelector('input[name="morning"]:checked') == null)
      console.log("Poopy");
    else
      console.log("Pee");
    let morning = document.querySelector('input[name="morning"]:checked').value;
    console.log("Selected morning:", morning);

    if( document.querySelector('input[name="allergies"]:checked') == null)
      console.log("Poopy");
    else
      console.log("Pee");
    let allergies = document.querySelector('input[name="allergies"]').value;
    console.log("Entered allergies:", allergies);

    if( document.querySelector('input[name="cleanliness"]:checked') == null)
        console.log("Poopy");
    else
      console.log("Pee");
    let cleanliness = document.querySelector('input[name="cleanliness"]:checked').value;
    console.log("Selected cleanliness:", cleanliness);

    if( document.querySelector('input[name="drinking"]:checked') == null)
        console.log("Poopy");
    else
    console.log("Pee");
    let drinking = document.querySelector('input[name="drinking"]:checked').value;
    console.log("Selected drinking:", drinking);

    if( document.querySelector('input[name="smoking"]:checked') == null)
        console.log("Poopy");
    else
    console.log("Pee");
    let smoking = document.querySelector('input[name="smoking"]:checked').value;
    console.log("Selected smoking:", smoking);

    if( document.querySelector('input[name="OvernightGuests"]:checked') == null)
        console.log("Poopy");
    else
    console.log("Pee");
    let overnightGuests = document.querySelector('input[name="OvernightGuests"]:checked').value;
    console.log("Selected overnight guests:", overnightGuests);


    const request = new Request("http://localhost:3000/saveAnswers", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: 
        JSON.stringify({
          name: localStorage.getItem('username'),
          Q1: roommates1,
          Q2: morning,
          Q3: allergies,
          Q4: cleanliness,
          Q5: drinking,
          Q6: smoking,
          Q7: overnightGuests
        })
    })
    fetch(request)
      .then((response) => response.text())
      .then(text => console.log("Server response: ", text))
      .catch((error) => console.error("Error: ", error));
    setSaveSuccess(true);

    const request1 = new Request("http://localhost:3000/saveBio", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: 
        JSON.stringify({
          name: localStorage.getItem('username'),
          Bio: bio
        })
    })
    fetch(request1)
      .then((response) => response.text())
      .then(text => console.log("Server response: ", text))
      .catch((error) => console.error("Error: ", error));
    setSaveSuccess(true);
  }

  return (
    <div>
      <div>
        <NavBar></NavBar>
      </div>

      <h1>Edit Mode</h1>
      <button className="save-button" onClick={save}>Save</button>
      {saveSuccess && <p>Save successful!</p>}
      
      <div className="questionContainer">
        <div className="question">
          <h5>Bio</h5>
          <br></br>
          <div className="answer">
            <label>
              <input type="text" name="bio" placeholder="Enter your bio" />
            </label>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>


        <div className="question">
          <h5>How many roommates do you want?</h5>
          <br></br>
          <div className="answer">
            <label>
              <input type="radio" name="roommates" value="1" defaultChecked /> 1 
            </label> &nbsp;&nbsp;
            <label>
              <input type="radio" name="roommates" value="2" /> 2 
            </label> &nbsp;&nbsp;
            <label>
              <input type="radio" name="roommates" value="3" /> 3 
            </label> &nbsp;&nbsp;
            <label>
              <input type="radio" name="roommates" value="4" /> 4 
            </label>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>

        <div className="question">
          <h5>Are you a morning or a night person?</h5>
          <br></br>
          <div className="answer">
            <label>
              <input type="radio" name="morning" value="Morning" defaultChecked /> Morning 
            </label>&nbsp;&nbsp;
            <label>
              <input type="radio" name="morning" value="Night" /> Night
            </label>
          </div>
        </div>

        <br></br>
        <br></br>

        <div className="question">
          <h5>Enter any allergies:</h5>
          <br></br>
          <div className="answer">
            <label>
              <input type="text" name="allergies" placeholder="Enter any allergies" />
            </label>
          </div>  
        </div>
        <br></br>
        <br></br>

        <div className="question">
          <h5>What is your cleanliness level?</h5>
          <br></br>
          <div className="answer">
            <label>
              <input type="radio" name="cleanliness" value="NeatFreak" defaultChecked /> Neat Freak 
            </label>&nbsp;&nbsp;
            <label>
              <input type="radio" name="cleanliness" value="Clean" /> Clean
            </label>&nbsp;&nbsp;
            <label>
              <input type="radio" name="cleanliness" value="Average" /> Average
            </label>&nbsp;&nbsp;
            <label>
              <input type="radio" name="cleanliness" value="Messy" /> Messy
            </label>&nbsp;&nbsp;
            <label>
              <input type="radio" name="cleanliness" value="PigSty" /> Pig Sty
            </label>
          </div>
        </div>
        <br></br>
        <br></br>

        <div className="question">
          <h5>Are you okay with drinking?</h5>
          <br></br>
          <div className="answer">
            <label>
              <input type="radio" name="drinking" value="Yes" defaultChecked /> Yes 
            </label>&nbsp;&nbsp;
            <label>
              <input type="radio" name="drinking" value="No" /> No
            </label>
          </div>
        </div>
        <br></br>
        <br></br>

        <div className="question"></div>
        <div className="question">
          <h5>Are you okay with smoking?</h5>
          <br></br>
          <div className="answer">
            <label>
              <input type="radio" name="smoking" value="Yes" defaultChecked /> Yes
            </label>&nbsp;&nbsp;
            <label>
              <input type="radio" name="smoking" value="YesNotInside" /> Yes (not inside) 
            </label>&nbsp;&nbsp;
            <label>
              <input type="radio" name="smoking" value="No" /> No
            </label>
          </div>
        </div> 
        <br></br>
        <br></br>

        <div className="question">
          <h5>Are you okay with overnight guests?</h5>
          <br></br>
          <div className="answer">
            <label>
              <input type="radio" name="OvernightGuests" value="Yes" defaultChecked /> Yes 
            </label>&nbsp;&nbsp;
            <label>
              <input type="radio" name="OvernightGuests" value="No" /> No
            </label>
          </div>
        </div>
        <br></br> 


      </div>

      <button className="save-button" onClick={save}>Save</button>
      {saveSuccess && <p>Save successful!</p>}
      {/* <button className="done-button" onClick={edit}>Done</button> */}
      <Link to="/editprofile" className = "CreateAccountButton" >Done</Link>
    </div>
  );
}

export default EditComponent;