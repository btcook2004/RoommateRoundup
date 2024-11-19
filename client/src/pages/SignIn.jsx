import {useState} from 'react'
import NavBar from '../NavBar'
import "../styles.css"


function SignInPage() {
  const [name1, setName1] = useState('');
  const [password1, setPassword1] = useState('');

  
  function SignInPressed() {

    console.log("Sign In Pressed");
    console.log("Name: " + name1 + " Password: " + password1);
    if (name1 === "" || password1 === "") {
      alert("Please fill in all fields");
      return;
    }

    const request = new Request("http://localhost:3000/signIn", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name1,
        password: password1,
      }),
    });
    fetch(request)
      .then((response) => response.text())
      .then((text) => {
        console.log("Server response:", text);
        if (text === "Failure") {
          alert("Incorrect username or password");
          return;
        }
        else {
          localStorage.setItem("username", name1);
          window.location.href = "http://localhost:5173/dashboard";
          return;
      }
    })

    // localStorage.setItem("username", name1);
    // window.location.href = "http://localhost:5173/dashboard";
  }

  return(

    <div>
      <NavBar></NavBar>
      <div style={{ textAlign: 'center' }}>
        <h1>Sign In</h1>
        <div>
            <label htmlFor="name">Name:  </label>
            <br />
            <input 
                type="text"
                id="name"
                name="name"
                value={name1}
                onChange={(e) => setName1(e.target.value)}
                required
            />
            <br />
            <br />
            <label htmlFor="password">Password:  </label>
            <br />
            <input
                type="password"
                id="password"
                name="password"
                value={password1}
                onChange={(e) => setPassword1(e.target.value)}
                required
            />
            <br />
            <br />

            <button type="button" onClick={SignInPressed}>
                Sign In
            </button>
        </div>
      </div>
    </div>
  );
}

export default SignInPage