import { Link } from 'react-router-dom'
import NavBar from '../NavBar'
function edit() {
  window.location.href = "/editprofile";
}


function EditComponent(){
  function save() {
    //fill this in
    ;
  }

  return (

    <div>
      <div>
          <NavBar></NavBar>
      </div>

      <h1>Edit Mode</h1>
      <button className="save-button" onClinck={save}>Save</button>
      
      <div className="questionContainer">
        <div classname="question">
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

        <div classname="question">
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

        <div classname="question">
          <h2>Select any allergies</h2>
          <div>
            <label>
              <input type="text" name="allergies" placeholder="Enter any allergies" />
            </label>
          </div>  
        </div>

        <div classname="question">
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

        <div classname="question">
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

        <div classname="question">
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

        <div classname="question">
          <h2>Are you okay with overnight guests?</h2>'
          <div>
            <label>
              <input type="radio" name="Overnightguests" value="Yes" /> Yes 
            </label>
            <label>
              <input type="radio" name="Overnightguests" value="No" /> No
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
      <button className="save-button" onClinck={save}>Save</button>
      <button className="edit-button" onClick={edit}>Done</button>
    </div>
  );
}

export default EditComponent;