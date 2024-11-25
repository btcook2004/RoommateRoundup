import { Link } from 'react-router-dom'
import "./styles.css"
import logo from "/logo.svg"

function logOutPressed() {
    localStorage.setItem("username", "");
    window.location.href = "/";
}
function swipePage() {
    window.location.href = "/swipepage";
}
function messagePage() {
    window.location.href = "/messagePage";
}
function dashboard() {
    window.location.href = "/dashboard";
}
function EditProfile() {
    window.location.href = "/editpage";
}

function NavBar()
{
    return (
        <nav className={"navBarContainer"}>
            <a href="/dashboard">
            <img src={logo} alt={"a great logo"} className={"logo"}/>
            </a>
            <ul className="navBar">
                <li>
                    <button type="button" onClick={dashboard}>Dashboard</button>
                    {/* <Link to="/dashboard">Dashboard</Link> */}
                </li>
                <li>
                    <button type="button" onClick={messagePage}>Message Page</button>
                    {/* <Link to="/messagePage">Message Page</Link> */}
                </li>
                <li>
                    <button type="button" onClick={swipePage}>Swipe Page</button>
                    {/* <Link to="/swipePage">Swipe Page</Link> */}
                </li>

                <li>
                    <button type="button" onClick={EditProfile}>Edit Profile</button>
                    {/* <Link to="/editprofile">EditProfile</Link> */}
                </li>
            </ul>
            
            <button className="logoutButton" onClick={logOutPressed} /* style={{ marginLeft: 'auto' }} */>
                Sign Out
            </button>
        </nav>
    );
}

export default NavBar;
