// import NavBar from "./NavBar.jsx";
import { Link } from 'react-router-dom'

function linkToSignUp()
{
    window.location.href = "/signup";
}

function linkToSignIn()
{
    window.location.href = "/signin";
}

function IndexPage()
{
    return (
      <div>
        {/* <NavBar /> */}

        <nav className="topBarContainer">
            <img src={"/logo.svg"} alt={"a great logo"} className={"logo"}/>
            <ul className="topBar">
              <li>
                <button type="button" onClick={linkToSignUp}>Sign Up</button>
              </li>
              <li>
                <button type="button" onClick={linkToSignIn}>Sign In</button>
              </li>
            </ul>
          </nav>

          {/* <Link to="/signup">Sign Up</Link> */}

          <h1>Placeholder for sign-in link that will redirect to dashboard</h1>
          <h1>temp link to dashboard to bypass signin/signup:</h1>
          <Link to="/dashboard">Dashboard</Link>

      </div>
    );
}

export default IndexPage;