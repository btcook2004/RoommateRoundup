import { Link } from 'react-router-dom'
import SwipePage from './swipePage';

function swipePage() {
  window.location.href = "/swipepage";
}

function checkLogIn() {
  if (localStorage.getItem('username') === null || localStorage.getItem('username') === "") {
    window.location.href = "/";
  }
}

function Dashboard()
{
  checkLogIn();
    return (
      <div>
        <div className = "dashboard">
          <h1>Welcome {localStorage.getItem('username')}</h1>
          <button type="button" onClick={swipePage}>Start Swiping</button>
          <h1>Placeholder for messages link</h1>
          <Link to="/messagePage">Message Page</Link>
          <h1>placeholder for matching stats</h1>
          <h1>placeholder for edit profile</h1>
          <Link to="/editprofile">Edit Profile</Link>

        </div>
      </div>
    );
}

export default Dashboard;