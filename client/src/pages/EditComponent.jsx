import { Link } from 'react-router-dom'
import NavBar from '../NavBar'
function edit() {
  window.location.href = "/editprofile";
}

function EditComponent(){
  function save() {

    let roommates = document.querySelector('input[name="roommates"]:checked').value;
    console.log("Selected roommates:", roommates);

    let morning = document.querySelector('input[name="morning"]:checked').value;
    console.log("Selected morning:", morning);

    let allergies = document.querySelector('input[name="allergies"]').value;
    console.log("Entered allergies:", allergies);

    let cleanliness = document.querySelector('input[name="cleanliness"]:checked').value;
    console.log("Selected cleanliness:", cleanliness);

    let drinking = document.querySelector('input[name="drinking"]:checked').value;
    console.log("Selected drinking:", drinking);

    let smoking = document.querySelector('input[name="smoking"]:checked').value;
    console.log("Selected smoking:", smoking);

    let overnightGuests = document.querySelector('input[name="OvernightGuests"]:checked').value;
    console.log("Selected overnight guests:", overnightGuests);

    fetch('http://localhost:3000/saveAnswers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: 
        JSON.stringify({
          name: localStorage.getItem('username'),
          Q1: roommates,
          Q2: morning,
          Q3: allergies,
          Q4: cleanliness,
          Q5: drinking,
          Q6: smoking,
          Q7: overnightGuests
        })
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:');
      })
      .catch((error) => {
        console.error('Error: here');
      });
  }

  return (

    <div>
      <div>
          <NavBar></NavBar>
      </div>

      <h1>Edit Mode</h1>
      <button className="save-button" onClick={save}>Save</button>
      
      <div className="questionContainer">
        <div className="question">
          <h2>How many roommates do you want?</h2>
          <div>
            <label>
              <input type="radio" name="roommates" value="1" /> 1 
            </label>
            <label>
              <input type="radio" name="roommates" value="2" /> 2 
            </label>
            <label>
              <input type="radio" name="roommates" value="3" /> 3 
            </label>
            <label>
              <input type="radio" name="roommates" value="4" /> 4 
            </label>
          </div>
        </div>

        <div className="question">
          <h2>Are you a morning or a night person?</h2>
          <div>
            <label>
              <input type="radio" name="morning" value="Morning" /> Morning 
            </label>
            <label>
              <input type="radio" name="morning" value="Night" /> Night
            </label>

          </div>
        </div>

        <div className="question">
          <h2>Select any allergies</h2>
          <div>
            <label>
              <input type="text" name="allergies" placeholder="Enter any allergies" />
            </label>
          </div>  
        </div>

        <div className="question">
          <h2>What is your cleanliness level?</h2>
          <div>
            <label>
              <input type="radio" name="cleanliness" value="NeatFreak" /> Neat Freak 
            </label>
            <label>
              <input type="radio" name="cleanliness" value="Clean" /> Clean
            </label>
            <label>
              <input type="radio" name="cleanliness" value="Average" /> Average
            </label>
            <label>
              <input type="radio" name="cleanliness" value="Messy" /> Messy
            </label>
            <label>
              <input type="radio" name="cleanliness" value="PigSty" /> Pig Sty
            </label>
          </div>
        </div>

        <div className="question">
          <h2>Are you okay with drinking?</h2>'
          <div>
            <label>
              <input type="radio" name="drinking" value="Yes" /> Yes 
            </label>
            <label>
              <input type="radio" name="drinking" value="No" /> No
            </label>
          </div>
        </div>

        <div className="question">
          <h2>Are you okay with smoking?</h2>'
          <div>
            <label>
              <input type="radio" name="smoking" value="Yes" /> Yes 
            </label>
            <label>
              <input type="radio" name="smoking" value="YesNotInside" /> Yes (not inside) 
            </label>
            <label>
              <input type="radio" name="smoking" value="No" /> No
            </label>
          </div>
        </div> 

        <div className="question">
          <h2>Are you okay with overnight guests?</h2>'
          <div>
            <label>
              <input type="radio" name="OvernightGuests" value="Yes" /> Yes 
            </label>
            <label>
              <input type="radio" name="OvernightGuests" value="No" /> No
            </label>
          </div>
        </div> 


      </div>

      {/* <div className="columnsContainer">
        <div className="image-placeholder">
          <div className="column image-column">
              <img
                src={localStorage.imageUrl || "../public/profile.svg"}
                alt={`${localStorage.id}'s profile`}
              />
            </div>
        </div>
        <div className="column text-column">
        <h4>{localStorage.getItem('username')}</h4>

        </div>
      </div> */}
      <button className="save-button" onClick={save}>Save</button>
      <button className="edit-button" onClick={edit}>Done</button>
    </div>
  );
}

export default EditComponent;