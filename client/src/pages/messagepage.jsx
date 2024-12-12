import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ListItem(props) {
    let matchUser = props.matchUser;
    return (
        <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
            <h5 style={{ margin: "0 10px 0 0" }}>{matchUser}</h5>
            <Link to={`/messages/${matchUser}`} style={{ textDecoration: "none", color: "blue" }}>
                Message
            </Link>
        </div>
    );
}

function MessagePage() {
    const [matches, setMatches] = useState([]);

    //logged-in user ID for demonstration purposes
    //const userId = localStorage.getItem('username'); //gotta use this/local storage
    //const [users, setUsers] = useState([]);
    /*useEffect(() => {
        async function fetchMatches() {
            try {
                const response = await fetch(`/matches/${userId}`);
                if (response.ok) {
                    const data = await response.json();
                    setMatches(data);
                } else {
                    const text = await response.text();
                    console.error("Error fetching matches:", response.status, text);
                }
            } catch (error) {
                console.error("Error fetching matches:", error);
            }
        }

        fetchMatches();
    }, [userId]); */
    /*const request1 = new Request("http://localhost:3000/matches", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body:
          JSON.stringify({
            name: localStorage.getItem('username'),

          })
      })
      fetch(request1)
        .then((response) => response.text())
        .then(text => console.log("Server response: ", text))
        .catch((error) => console.error("Error: ", error)); */

        useEffect(() =>  {
            // const currentUserUsername = localStorage.getItem("username");
            const request1 = new Request("http://localhost:3000/matches", {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body:
                  JSON.stringify({
                    name: localStorage.getItem('username'),
                  })
              })
            fetch(request1) // Fetch users from the backend
                .then((response) => response.json())
                .then((data) => {
                    // const filteredUsers = data.filter(user => user.person !== currentUserUsername);
                    console.log("Filtered users:", data);
                    setMatches(data);
                   //setMatches(filteredUsers);

                })
                .catch((error) => console.error("Error fetching matches:", error));
            }, []);

            return (
                <div className="backColor">
                    <div>
                        <h1>Matches</h1>
                    </div>
                    <ul>
                        {matches.map((match, index) => (
                            <li key={index}>
                                <ListItem matchUser={match.matchedWith} />
                            </li>
                        ))}
                    </ul>
                </div>
            );
        }

export default MessagePage;
