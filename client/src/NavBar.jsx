import { Link } from 'react-router-dom'


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
                    <a href="./signup.html">Sign-up Page</a>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
