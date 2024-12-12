import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ListItem({ matchUser, currentUser }) {
    return (
        <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
            <h5 style={{ margin: "0 10px 0 0" }}>{matchUser}</h5>
            <Link
                to={`/messages/${matchUser}`} // URL path
                state={{ currentUser, matchUser }} // State object
                style={{ textDecoration: "none", color: "blue" }}
            >
                Message
            </Link>
        </div>
    );
}

function MessagePage() {
    const [matches, setMatches] = useState([]);

    useEffect(() => {
        const currentUserUsername = localStorage.getItem("username");

        const request1 = new Request("http://localhost:3000/matches", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: currentUserUsername,
            }),
        });

        fetch(request1)
            .then((response) => response.json())
            .then((data) => {
                console.log("Filtered users:", data);
                setMatches(data);
            })
            .catch((error) => console.error("Error fetching matches:", error));
    }, []);

    const currentUserUsername = localStorage.getItem("username");

    return (
        <div className="backColor">
            <div>
                <h1>Matches</h1>
            </div>
            <ul>
                {matches.map((match, index) => (
                    <li key={index}>
                        <ListItem matchUser={match.matchedWith} currentUser={currentUserUsername} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MessagePage;
