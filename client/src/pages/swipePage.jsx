import React, { useState, useEffect } from "react";
import NavBar from '../NavBar'
import Swipe from './swipe'

function SwipePage() {

    const [users, setUsers] = useState([]); //store user data from the backend
    const [currentIndex, setCurrentIndex] = useState(0); //track the current user

    useEffect(() => {
        fetch("http://localhost:3000/users") //NEED A USERS ROUTE TO GET THE USERS!!!!!
            .then((response) => response.json())
            .then((data) => {
                setUsers(data);
            })
            .catch((error) => console.error("Error fetching users:", error));
    }, []);


    function swipeRight() {

        console.log("swiped right");
        sendSwipe("right");
        nextUser();
    }

    function swipeLeft() {
        console.log("swiped left");
        sendSwipe("left");
        nextUser();
    }

    function sendSwipe(direction) {
        //post request
        if (currentIndex < users.length) { //if still users to display
            const user = users[currentIndex]; 
            const request1 = new Request("http://localhost:3000/swipePage", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    userId: user.id, //give that id of person swiped
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
        //keep going up the list
        if (currentIndex + 1 < users.length) {
            setCurrentIndex(currentIndex + 1);
        } else {
            console.log("No more users to swipe on!");
        }
    }

    //get the current user to display
    const currentUser = users[currentIndex];
    
    
    return(
        <div>
            <NavBar />
            <Swipe />

            <div className="columnsContainer">
                {currentUser ? (
                    <>
                        <div className="image-placeholder">
                            <div className="column image-column">
                                <img
                                    src={currentUser.imageUrl || "../public/profile.svg"}
                                    alt={`${currentUser.name}'s profile`}
                                />
                            </div>
                        </div>

                        <div className="column text-column">
                            <h1>{currentUser.name}</h1>
                            <textarea
                                placeholder={currentUser.bio || "No bio available"}
                                readOnly
                            ></textarea>
                        </div>
                    </>
                ) : (
                    <h2>No more users to display</h2>
                )}
            </div>

            <div className="swipeButtonsContainer">
                <button className="noButton" onClick={swipeLeft}>
                    👎
                </button>
                <button className="yesButton" onClick={swipeRight}>
                    👍
                </button>
            </div>
        </div>
    )
}

export default SwipePage
