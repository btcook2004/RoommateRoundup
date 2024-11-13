import { Link } from 'react-router-dom'
function Dashboard()
{
    return (
      <div>
        
        <h1>Dashboard</h1>

        <h2>Placeholder for start swiping link</h2>
        <Link to="/swipePage">Swipe Page</Link>
        <h1>Placeholder for messages link</h1>
        <Link to="/messagePage">Message Page</Link>
        <h1>placeholder for matching stats</h1>
        <h1>placeholder for edit profile</h1>
        <Link to="/editprofile">Edit Profile</Link>


      </div>
    );
}

export default Dashboard;