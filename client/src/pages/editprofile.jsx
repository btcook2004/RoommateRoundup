import { Link } from 'react-router-dom'
import React, { useEffect } from 'react';
import { useState } from 'react';
function edit() {
  window.location.href = "/editMode";
}

function EditProfile(){
  
  let [answer1, setAnswer1] = useState("null1");
  let [answer2, setAnswer2] = useState("null1");
  let [answer3, setAnswer3] = useState("null1");
  let [answer4, setAnswer4] = useState("null1");
  let [answer5, setAnswer5] = useState("null1");
  let [answer6, setAnswer6] = useState("null1");
  let [answer7, setAnswer7] = useState("null1");

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
        <div className="column image-column">
            <img
              src={localStorage.imageUrl || "../public/profile.svg"}
              alt={`${localStorage.id}'s profile`}
            />
          </div>
      </div>
      <script></script>
      <div className="column text-column">
      <h4>{localStorage.getItem('username')}</h4>
      <h6>How many roommates do you want?</h6>
      <h7>{answer1}</h7>
      <h6>Are you a morning or night person?</h6>
      <h7>{answer2}</h7>
      <h6>Allergies?</h6>
      <h7>{answer3}</h7>
      <h6>What is your cleanliness leve?</h6>
      <h7>{answer4}</h7>
      <h6>Are you okay with drinking?</h6>
      <h7>{answer5}</h7>
      <h6>Are you okay with smoking?</h6>
      <h7>{answer6}</h7>
      <h6>Are you okay with overnight guests?</h6>
      <h7>{answer7}</h7>

      </div>
    </div>
    <button className="edit-button" onClick={edit}>Edit Profile</button>
    </div>
  );
}

export default EditProfile;