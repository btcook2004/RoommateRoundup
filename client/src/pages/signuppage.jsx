import {useState} from 'react'
import NavBar from '../NavBar'
import "../styles.css"

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
                const request = new Request("http://localhost:3000/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, password }),
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

    }


    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Sign Up</h1>
            <div>
                <label htmlFor="name">Name:  </label>
                <br />
                <input 
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
            </div>
        </div>
    );
}

export default SignUpPage