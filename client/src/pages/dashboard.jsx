import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function swipePage() {
  window.location.href = "/swipepage";
}

function editProfile() {
  window.location.href = "/editprofile";
}

function checkLogIn() {
  if (localStorage.getItem('username') === null || localStorage.getItem('username') === "") {
    window.location.href = "/";
  }
}
function matching() {
  window.location.href = "/messagePage";

}

function Dashboard() {
  const [needsEditing, setNeedsEditing] = useState(false); // State to track if the profile needs editing

  useEffect(() => {
    // Check if user is logged in
    checkLogIn();

    // Check if the profile needs editing
    const currentUserUsername = localStorage.getItem('username');
    fetch("http://localhost:3000/getQuestionAnswers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: currentUserUsername }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        if (
          Array.isArray(data) &&
          data.some(profile =>
            Object.values(profile).some(value => value === 'null')
          )
        ) {
          setNeedsEditing(true); // At least one profile is incomplete
        } else {
          setNeedsEditing(false); // All profiles are complete
        }
      })
      .catch((err) => console.error("Error fetching profile data:", err));
  }, []);

  return (
    <div className= "backColor">
      <div className="dashboard">

        <h1 className='welcome'>Welcome {localStorage.getItem('username')}!</h1>
        {/* <button type="button" onClick={swipePage}>Start Swiping</button> */}
        {/* <Link className = "logoutButton" to="/SwipePage">Start Swiping</Link> */}

        {needsEditing && (
          <h1>Your profile is incomplete. Edit your profile!</h1>
        )}

        {/* <button type="button" onClick={editProfile}>Edit Profile</button> */}
        {/* <Link className = "logoutButton" to="/editprofile">Edit Profile</Link> */}

        <div className='buttonContainer'>
          <div className='buttonColumn'>
            <Link className="buttonDash" to="/swipePage">Start Swiping</Link>
          </div>
          <div className='buttonColumn'>
            <Link className="buttonDash" to="/editprofile">Edit Profile</Link>
          </div>
          <div className='buttonColumn'>
            <Link className="buttonDash" to="/messagePage">View Matches</Link>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;
