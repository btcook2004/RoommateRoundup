import { Link } from 'react-router-dom'
function edit() {
  window.location.href = "/editprofile";
}

function EditProfile(){
  return (
    <div>
      <h1>Profile Page</h1>
    <div className="columnsContainer">
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
      <h2>Question: Answer</h2>
      <h2>Question: Answer</h2>
      <h2>Question: Answer</h2>
      <h2>Question: Answer</h2>
      </div>
    </div>
    <button className="edit-button" onClick={edit}>Edit Profile</button>
    </div>
  );
}

export default EditProfile;