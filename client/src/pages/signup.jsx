import { useState } from 'react';

function SignUpInfo() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function signUpPressed() {
        const request = new Request("http://localhost:3000/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, password }),
        });

        fetch(request)
            .then(response => response.text())
            .then(text => {
                console.log(text);
                localStorage.setItem("username", name);
                window.location.href = "http://localhost:5173/"; // Redirect after signup
            })
            .catch(error => console.error('Error:', error));
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Sign Up for RoommateRoundup</h1>
            <div>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />

                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <button type="button" onClick={signUpPressed}>
                    Sign Up
                </button>
            </div>
        </div>
    );
}

export default SignUpInfo;