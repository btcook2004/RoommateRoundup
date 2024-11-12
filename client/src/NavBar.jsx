import { Link } from 'react-router-dom'
import "./styles/navbar.css"

function NavBar()
{
    return (
        <nav>
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
