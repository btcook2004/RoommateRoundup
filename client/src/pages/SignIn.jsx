import {useState} from 'react'
import NavBar from '../NavBar'
import "../styles.css"


function SignInPage() {
  const [name1, setName1] = useState('');
  const [password1, setPassword1] = useState('');

  
  function SignInPressed() {
    localStorage.setItem("username", name1);
    window.location.href = "http://localhost:5173/dashboard";
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