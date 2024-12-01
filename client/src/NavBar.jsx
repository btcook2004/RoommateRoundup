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

            <div>
                <ul id = "navbar">
                    <li><a className="active"
                     href="/dashboard">Dashboard</a></li>
                    <li><a href="/messagePage">Messages</a></li>
                    <li><a href="/swipepage">Swipe Page</a></li>
                    <li><a href="/editpage">Edit Profile</a></li>
                </ul>
            </div>
            
            <button className="logoutButton" onClick={logOutPressed}>
                Sign Out
            </button>
        </nav>
    );
}

export default NavBar;
