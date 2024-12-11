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
      <section className="main">
      <div className="indexContainer">
        {/* <NavBar /> */}

        <div className="topBarContainer">
            <img src={"/logo.svg"} alt={"a great logo"} className={"logo"}/>
            <h3>oommate Roundup</h3>
            <ul className="topBar">
              <li>
                {/* <button type="button" onClick={linkToSignUp}>Sign Up</button> */}
                <Link to="/signup" className="logoutButton" >Sign Up</Link>
              </li>
              <li>
                {/* <button type="button" onClick={linkToSignIn}>Sign In</button> */}
                <Link to="/signin" className="logoutButton" >Sign In</Link>
              </li>
            </ul>
          </div>
          <h1 className="indexText">Match Today!!</h1>
          {/* <button type="button" onClick={linkToSignUp}>Create Account</button> */}
          <Link to="/signup" className="CreateAccountButton" >Create Account</Link>
      </div>
      </section>
    );
}

export default IndexPage;