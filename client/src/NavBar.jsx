import { Link } from 'react-router-dom'
import "./styles.css"
import logo from "/logo.svg"

function NavBar()
{
    return (
        <nav className={"navBarContainer"}>
            <img src={logo} alt={"a great logo"} className={"logo"}/>
            <ul className="navBar">
                <li>
                    <Link to="/">Home Page</Link>
                </li>
                <li>
                    <Link to="/messagePage">Message Page</Link>
                </li>
                <li>
                    <Link to="/signup">Sign-up Page</Link>
                </li>
                <li>
                    <Link to="/swipePage">Swipe Page</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
