import React, { useState, useEffect } from "react";
import NavBar from '../NavBar';
import Swipe from './swipe';

function SwipePage() {
    const [users, setUsers] = useState([]); // Store user data from the backend
    const [currentIndex, setCurrentIndex] = useState(0); // Track the current user
    const [status, setStatus] = useState(true); // State to track if there are users left to swipe
    const [questions, setQuestions] = useState([]); // Store question data from the backend

    // Fetch users and set state
    useEffect(() => {
        const currentUserUsername = localStorage.getItem("username");
        fetch("http://localhost:3000/users") // Fetch users from the backend
            .then((response) => response.json())
            .then((data) => {
                const filteredUsers = data.filter(user => user.id !== currentUserUsername);
                console.log("Filtered users:", filteredUsers);
                setUsers(filteredUsers);
                if (filteredUsers.length > 0) {
                    fetchQuestions(filteredUsers[0].id); // Fetch questions for the first user in the list
                }
            })
            .catch((error) => console.error("Error fetching users:", error));
    }, []); // Empty dependency array to run only once on component mount

    // Function to fetch question data for a specific user
    const fetchQuestions = async (swipedUserId) => {
        const currentUserUsername = localStorage.getItem("username");
        if (!currentUserUsername) {
            console.error("No username found in localStorage");
            return;
        }

        try {
            const response = await fetch("http://localhost:3000/getQuestionAnswers", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name: swipedUserId }), // Send the swiped user's ID
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log("Fetched questions for user:", swipedUserId, data);

            // Assuming 'data' contains the questions for the swiped user
            if (Array.isArray(data) && data.length > 0) {
                const userQuestions = data[0]; // Access the questions data
                setQuestions(userQuestions); // Set the fetched questions for the swiped user
            } else {
                console.error("No question data found for the user:", swipedUserId);
            }

        } catch (error) {
            console.error("Error fetching questions:", error);
        }
    };

    function swipeRight() {
        console.log("swiped right");
        sendSwipe("right");
        nextUser();
        fetchQuestions(users[currentIndex + 1]?.id);  // Fetch questions for the next user after swiping
    }

    function swipeLeft() {
        console.log("swiped left");
        sendSwipe("left");
        nextUser();
        fetchQuestions(users[currentIndex + 1]?.id);  // Fetch questions for the next user after swiping
    }

    function sendSwipe(direction) {
        if (currentIndex < users.length) {
            const user = users[currentIndex]; 
            const request1 = new Request("http://localhost:3000/swipePage", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    swiper: localStorage.getItem("username"),
                    userId: user.id,
                    action: direction,
                }),
            });

            fetch(request1)
                .then((response) => response.text())
                .then((text) => console.log("Server response:", text))
                .catch((error) => console.error("Error:", error));
        }
    }

    function nextUser() {
        if (currentIndex + 1 < users.length) {
            setCurrentIndex(currentIndex + 1);
        } else {
            console.log("No more users to swipe on!");
            setStatus(false); 
        }
    }

    const currentUser = users[currentIndex];
    const userQuestions = questions ? Object.keys(questions).map((key) => ({
        question: key,
        answer: questions[key],
    })) : [];

    return (
        <div>
            <NavBar />
            <Swipe />
            {currentUser && status ? (
                <>
                    <div className="columnsContainer">
                        <div className="image-placeholder">
                            <div className="column image-column">
                                <img
                                    src={currentUser.imageUrl || "../public/profile.svg"}
                                    alt={`${currentUser.id}'s profile`}
                                />
                            </div>
                        </div>

                        <div className="column text-column">
                            <h1>{currentUser.id}</h1>
                            <div className="bio-box">{currentUser.bio}</div>
                        </div>

                        <div className="questionsContainer">
                            <h2 className="questionsTitle">{`${currentUser.id}'s Answers`}</h2>
                            <div className="scrollableCard">
                                {userQuestions.length > 0 ? (
                                    <div className="questionsList">
                                        {userQuestions.map((question, index) => (
                                            <div key={index} className="questionItem">
                                                <div className="questionText">
                                                    <h3 className="questionTitle">{question.question}</h3>
                                                    <p className="answerText">{question.answer}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <p className="noQuestionsMessage">No questions available</p>
                                )}
                            </div>
                        </div>
                        
                        <h1>Your Answers</h1>
                        <div className="userQuestionsContainer"></div>

                    </div>
                    <div className="swipeButtonsContainer">
                        <button className="noButton" onClick={swipeLeft}>👎</button>
                        <button className="yesButton" onClick={swipeRight}>👍</button>
                    </div>
                </>
            ) : (
                <h2>No more users to swipe on</h2>
            )}
        </div>
    );
}

export default SwipePage;

