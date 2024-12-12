import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function ChatPage() {
    const location = useLocation();
    const navigate = useNavigate();

    const { currentUser, matchUser } = location.state;

    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");

    useEffect(() => {
        if (!currentUser || !matchUser) {
            console.error("Missing info");
            navigate("/messagePage");
        }
    }, [currentUser, matchUser, navigate]);

    useEffect(() => {
        if (!currentUser || !matchUser) return;

        fetch(`http://localhost:3000/messages`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                currentUser,
                matchUser,
            }),
        })
            .then((response) => {
                if (!response.ok) throw new Error("Failed to fetch messages");
                return response.json();
            })
            .then((data) => setMessages(data))
            .catch((error) => console.error("Error fetching messages:", error));
    }, [currentUser, matchUser]);

    const sendMessage = () => {
        if (!newMessage.trim()) return;

        fetch('http://localhost:3000/send', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                messageContent: newMessage,
                senderUsername: currentUser,
                receiverUsername: matchUser,
            }),
        })
            .then((response) => {
                if (!response.ok) throw new Error("Failed to send message");
                setMessages((prevMessages) => [
                    ...prevMessages,
                    {
                        sender_username: currentUser,
                        receiver_username: matchUser,
                        message_content: newMessage,
                        date: new Date().toISOString(),
                    },
                ]);
                setNewMessage("");
            })
            .catch((error) => console.error("Error sending message:", error));
    };

    return (
        <div>
            <h1>Chat with {matchUser || "Unknown User"}</h1>
            <div style={{ border: "1px solid #ccc", padding: "10px", maxHeight: "300px", overflowY: "scroll" }}>
                {messages.map((msg, index) => (
                    <p key={index} style={{ textAlign: msg.sender_username === currentUser ? "right" : "left" }}>
                        <strong>{msg.sender_username}:</strong> {msg.message_content}
                    </p>
                ))}
            </div>
            <div style={{ marginTop: "10px" }}>
                <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type your message"
                    style={{ width: "80%", marginRight: "10px" }}
                />
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
}

export default ChatPage;
