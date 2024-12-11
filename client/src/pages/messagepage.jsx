import React, { useEffect, useState } from "react";

function ListItem(props) {
    return <li>{props.animal || props.matchUser}</li>;
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
            const currentUserUsername = localStorage.getItem("username");
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
                        {matches.map((match) => (
                            <ListItem
                               // key={match.match_id}
                                matchUser={match.matchedWith} />
                        ))}
                    </ul>
                </div>
            );
        }

export default MessagePage;
