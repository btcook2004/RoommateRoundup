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
    <div>
      <div className="dashboard">

        <h1 className='welcome'>Welcome {localStorage.getItem('username')}!</h1>
        {/* <button type="button" onClick={swipePage}>Start Swiping</button> */}
        <Link className = "logoutButton" to="/SwipePage">Start Swiping</Link>

        {needsEditing && (
          <h1>Your profile is incomplete. Edit your profile!</h1>
        )}

        {/* <button type="button" onClick={editProfile}>Edit Profile</button> */}
        <Link className = "logoutButton" to="/editprofile">Edit Profile</Link>

        <div className='buttonContainer'>
          <div className='buttonColumn'>
            <button className="buttonDash" onClick={swipePage}>Start Swiping</button>
          </div>
          <div className='buttonColumn'>
            <button className="buttonDash" onClick={editProfile}>Edit Profile</button>
          </div>
          <div className='buttonColumn'>
            <button className="buttonDash" onClick={matching}>View Matches</button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;
