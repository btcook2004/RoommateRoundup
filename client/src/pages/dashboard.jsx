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
        </div>
      </div>
    );
}

export default Dashboard;