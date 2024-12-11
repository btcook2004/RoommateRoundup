import {useState} from 'react'
import NavBar from '../NavBar'
import "../styles.css"
import { Link } from 'react-router-dom';

// not sure why SignUpInfo exists, both components can probably become one
function SignUpPage() {
    return(
        <div>
            <SignUpInfo/>
        </div>
    )
}

function SignUpInfo() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const bio = "TempBio";

    function signUpPressed() {

        const request1 = new Request("http://localhost:3000/checkUsername", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({ name: name }),
        });

        fetch(request1)
            .then(response => response.text())
            .then(text => {
            if (text === "Username already exists") {
                alert("Username already exists");
                throw new Error("Username already exists");
            } else {

            // fetch('http://localhost:3000/saveAnswers', {
            //     method: 'POST',
            //     headers: {
            //       'Content-Type': 'application/json',
            //     },
            //     body: 
            //       JSON.stringify({
            //         name: localStorage.getItem('username'),
            //         Q1: "null",
            //         Q2: "null",
            //         Q3: "null",
            //         Q4: "null",
            //         Q5: "null",
            //         Q6: "null",
            //         Q7: "null"
            //       })
            //   })
            //     .then(response => response.json())
            //     .then(data => {
            //       console.log('Success:');
            //     })
            //     .catch((error) => {
            //       console.error('Error: here');
            //     });





                const request = new Request("http://localhost:3000/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, password, bio}),
                });

                fetch(request)
                .then(response => response.text())
                .then(text => {
                    console.log(text);
                    localStorage.setItem("username", name);
                    window.location.href = "/dashboard"; // Redirect after signup
                })
                .catch(error => console.error('Error:', error));




            }
            })
            .catch(error => console.error('Error:', error));

            // fetch('http://localhost:3000/saveAnswers', {
            //     method: 'POST',
            //     headers: {
            //       'Content-Type': 'application/json',
            //     },
            //     body: 
            //       JSON.stringify({
            //         name: localStorage.getItem('username'),
            //         Q1: "null",
            //         Q2: "null",
            //         Q3: "null",
            //         Q4: "null",
            //         Q5: "null",
            //         Q6: "null",
            //         Q7: "null"
            //       })
            //   })
            //     .then(response => response.json())
            //     .then(data => {
            //       console.log('Success:');
            //     })
            //     .catch((error) => {
            //       console.error('Error: here');
            //     });

    }


    return (
        <div className="backColor" style={{ textAlign: 'center' }}>
            <h1>Sign Up</h1>
            <div>
                <label htmlFor="name">Name:  </label>
                <br />
                <input
                    className='pass' 
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <br />
                <br />
                <label htmlFor="password">Password:  </label>
                <br />
                <input
                    className="pass"
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <br />
                <br />

                <button type="button" onClick={signUpPressed}>
                    Sign Up
                </button>

                {/* <Link to="/dashboard" className="CreateAccountButton" onClick={signUpPressed}>Sign Un</Link> */}
            </div>
        </div>
    );
}

export default SignUpPage