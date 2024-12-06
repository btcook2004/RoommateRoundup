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
          <h5>How many roommates do you want?</h5>'
          <div className="answer">
            <label>
              <input type="radio" name="roommates" value="1" /> 1 
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
        <div classname="question">
          '<h5>Are you a morning or a night person?</h5>'
          <div className="answer">
            <label>
              <input type="radio" name="morning" value="Morning" /> Morning 
            </label>&nbsp;&nbsp;
            <label>
              <input type="radio" name="morning" value="Night" /> Night
            </label>

          </div>
        </div>
        <br></br>
        <div classname="question">
          '<h5>Enter any allergies:</h5>'
          <div className="answer">
            <label>
              <input type="text" name="allergies" placeholder="Enter any allergies" />
            </label>
          </div>  
        </div>
        <br></br>

        <div classname="question">
          '<h5>What is your cleanliness level?</h5>'
          <div className="answer">
            <label>
              <input type="radio" name="cleanliness" value="NeatFreak" /> Neat Freak 
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

        <div classname="question">
          '<h5>Are you okay with drinking?</h5>'
          <div className="answer">
            <label>
              <input type="radio" name="drinking" value="Yes" /> Yes 
            </label>&nbsp;&nbsp;
            <label>
              <input type="radio" name="drinking" value="No" /> No
            </label>
          </div>
        </div>
        <br></br>

        <div classname="question">
          '<h5>Are you okay with smoking?</h5>'
          <div className="answer">
            <label>
              <input type="radio" name="smoking" value="Yes" /> Yes
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

        <div classname="question">
          '<h5>Are you okay with overnight guests?</h5>'
          <div className="answer">
            <label>
              <input type="radio" name="Overnightguests" value="Yes" /> Yes 
            </label>&nbsp;&nbsp;
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
      <button className="done-button" onClick={edit}>Done</button>
    </div>
  );
}

export default EditComponent;