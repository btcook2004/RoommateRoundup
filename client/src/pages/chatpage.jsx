import { useParams } from "react-router-dom";

function ChatPage() {
    const { matchUser } = useParams();

    return (
        <div>
            <h1>Chat with {matchUser}</h1>

        </div>
    );
}

export default ChatPage;
