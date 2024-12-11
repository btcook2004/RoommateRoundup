import { Link } from 'react-router-dom'
import "./styles.css"
import logo from "/logo.svg"

function logOutPressed() {
    localStorage.setItem("username", "");
    // window.location.href = "/";    
}

function NavBar()
{
    return (
        <nav className={"navBarContainer"}>
            {/* <a href="/dashboard">
            <img src={logo} alt={"a great logo"} className={"logo"}/>
            </a> */}
            <Link to="/dashboard">
                <img src={logo} alt={"a great logo"} className={"logo"}/>
            </Link>

            <div className='navBar'>
                <ul id = "navbar">
                    {/* <li><a className="active"
                     href="/dashboard">Dashboard</a></li> */}
                    <li><Link className="navButton" to="/dashboard" style={{fontSize: '20px'}}>Dashboard</Link></li>
                    {/* <li><a href="/messagePage">Matches</a></li> */}
                    <li><Link className="navButton" to="/messagePage" style={{fontSize: '20px'}}>Matches</Link></li>
                    {/* <li><a href="/swipepage">Swipe Page</a></li> */}
                    <li><Link className="navButton" to="/swipepage" style={{fontSize: '20px'}}>Swipe</Link></li>
                    {/* <li><a href="/editprofile">Edit Profile</a></li> */}
                    <li><Link className="navButton" to="/editprofile" style={{fontSize: '20px'}}>Profile</Link></li>
                </ul>
            </div>
{/*             
            <button className="logoutButton" onClick={logOutPressed}>
                Sign Out
            </button> */}
            {/* <button onClick={<Link className="logoutButton" onClick={logOutPressed} to="/">Sign Out</Link>}>
            Sign Out
            </button> */}
            <Link className="logoutButton" onClick={logOutPressed} to="/">Sign Out</Link>
        </nav>
    );
}

export default NavBar;
