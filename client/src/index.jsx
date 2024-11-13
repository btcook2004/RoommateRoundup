// import NavBar from "./NavBar.jsx";
import { Link } from 'react-router-dom'
function IndexPage()
{
    return (
      <div>
        {/* <NavBar /> */}
        <div className={"indexDiv"}>
          <h1>IndexPage</h1>
          <h2>The Reactified Version</h2>
          <h3>Brandon Specht Wasn't Here</h3>
        </div>

          <Link to="/signup">Sign Up</Link>

          <h1>Placeholder for sign-in link that will redirect to dashboard</h1>
          <h1>temp link to dashboard to bypass signin/signup:</h1>
          <Link to="/dashboard">Dashboard</Link>

      </div>
    );
}

export default IndexPage;