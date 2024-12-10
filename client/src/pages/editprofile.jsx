import { Link } from 'react-router-dom'
import React, { useEffect } from 'react';
import { useState } from 'react';
function edit() {
  window.location.href = "/editMode";
}

function EditProfile(){
  
  let [bio, setBio] = useState("null1");
  let [answer1, setAnswer1] = useState("null1");
  let [answer2, setAnswer2] = useState("null1");
  let [answer3, setAnswer3] = useState("null1");
  let [answer4, setAnswer4] = useState("null1");
  let [answer5, setAnswer5] = useState("null1");
  let [answer6, setAnswer6] = useState("null1");
  let [answer7, setAnswer7] = useState("null1");

  useEffect(() => {
    const request = new Request("http://localhost:3000/getBio", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: localStorage.getItem('username'),
      })
    });
    fetch(request)
      .then((response) => response.text())
      .then((text) => {
        setBio(text);
        console.log("Bio: ", bio);
      })
      .catch((error) => console.error("Error: ", error));
  }, []);

  useEffect(() => {
    const request = new Request("http://localhost:3000/getAnswer", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: localStorage.getItem('username'),
        QNumber: "1"
      })
    });
    fetch(request)
      .then((response) => response.text())
      .then((text) => {
        setAnswer1(text);
        console.log("Answer1: ", answer1);
      })
      .catch((error) => console.error("Error: ", error));
  }, []);

  useEffect(() => {
    const request = new Request("http://localhost:3000/getAnswer", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: localStorage.getItem('username'),
        QNumber: "2"
      })
    });
    fetch(request)
      .then((response) => response.text())
      .then((text) => {
        setAnswer2(text);
        console.log("Answer2: ", answer2);
      })
      .catch((error) => console.error("Error: ", error));
  }, []);
  
  useEffect(() => {
    const request = new Request("http://localhost:3000/getAnswer", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: localStorage.getItem('username'),
        QNumber: "3"
      })
    });
    fetch(request)
      .then((response) => response.text())
      .then((text) => {
        setAnswer3(text);
        console.log("Answer3: ", answer3);
      })
      .catch((error) => console.error("Error: ", error));
  }, []);

  useEffect(() => {
    const request = new Request("http://localhost:3000/getAnswer", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: localStorage.getItem('username'),
        QNumber: "4"
      })
    });
    fetch(request)
      .then((response) => response.text())
      .then((text) => {
        setAnswer4(text);
        console.log("Answer4: ", answer4);
      })
      .catch((error) => console.error("Error: ", error));
  }, []);

  useEffect(() => {
    const request = new Request("http://localhost:3000/getAnswer", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: localStorage.getItem('username'),
        QNumber: "5"
      })
    });
    fetch(request)
      .then((response) => response.text())
      .then((text) => {
        setAnswer5(text);
        console.log("Answer5: ", answer5);
      })
      .catch((error) => console.error("Error: ", error));
  }, []);

  useEffect(() => {
    const request = new Request("http://localhost:3000/getAnswer", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: localStorage.getItem('username'),
        QNumber: "6"
      })
    });
    fetch(request)
      .then((response) => response.text())
      .then((text) => {
        setAnswer6(text);
        console.log("Answer6: ", answer6);
      })
      .catch((error) => console.error("Error: ", error));
  }, []);

  useEffect(() => {
    const request = new Request("http://localhost:3000/getAnswer", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: localStorage.getItem('username'),
        QNumber: "7"
      })
    });
    fetch(request)
      .then((response) => response.text())
      .then((text) => {
        setAnswer7(text);
        console.log("Answer7: ", answer7);
      })
      .catch((error) => console.error("Error: ", error));
  }, []);

  return (
    <div>
      <h1>Profile Page</h1>
    <div className="columnsContainer">
      <div className="image-placeholder">
      <h1>{localStorage.getItem('username')}</h1>
      <br></br>
        <div className="image-column">
            <img
              src={localStorage.imageUrl || "../public/profile.svg"}
              alt={`${localStorage.id}'s profile`}
            />
          </div>
      </div>

      <div className="text-column">
      <h6>Bio:</h6>
      <h6 className='answer'>{bio}</h6>
      <h6>How many roommates do you want?</h6>
      <h6 className='answer'>{answer1}</h6>
      {/* <br></br> */}
      <h6>Are you a morning or night person?</h6>
      <h6 className='answer'>{answer2}</h6>
      {/* <br></br> */}
      <h6>Allergies?</h6>
      <h6 className='answer'>{answer3}</h6>
      {/* <br></br> */}
      <h6>What is your cleanliness level?</h6>
      <h6 className='answer'>{answer4}</h6>
      {/* <br></br> */}
      <h6>Are you okay with drinking?</h6>
      <h6 className='answer'>{answer5}</h6>
      {/* <br></br> */}
      <h6>Are you okay with smoking?</h6>
      <h6 className='answer'>{answer6}</h6>
      {/* <br></br> */}
      <h6>Are you okay with overnight guests?</h6>
      <h6 className='answer'>{answer7}</h6>
      <br></br>

      </div>
    </div>
    {/* <button className="edit-button" onClick={edit}>Edit Profile</button> */}
    <Link to="/editMode" className="CreateAccountButton">Edit Profile</Link>
    </div>
  );
}

export default EditProfile;