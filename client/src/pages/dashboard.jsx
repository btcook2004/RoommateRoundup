import React, { useEffect, useState } from 'react';

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
        <h1>Welcome {localStorage.getItem('username')}</h1>
        <button type="button" onClick={swipePage}>Start Swiping</button>
        {needsEditing && (
          <h1>Your profile is incomplete. Edit your profile here!</h1>
        )}
        <button type="button" onClick={editProfile}>Edit Profile</button>
      </div>
    </div>
  );
}

export default Dashboard;
