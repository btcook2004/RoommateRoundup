import React, { useState, useEffect } from "react";
import NavBar from '../NavBar'
import Swipe from './swipe'

function SwipePage() {

    const [users, setUsers] = useState([]); //store user data from the backend
    const [currentIndex, setCurrentIndex] = useState(0); //track the current user
    const [status, setStatus] = useState(true); // state to track if there are users left to swipe

    useEffect(() => {
        const currentUserUsername = localStorage.getItem("username")
        fetch("http://localhost:3000/users") //NEED A USERS ROUTE TO GET THE USERS!!!!!   //CHANGE TO ADDRESS OF SERVER SIDE WHEN DEPLOYED
            .then((response) => response.json())
            .then((data) => {
                const filteredUsers = data.filter(user => user.id !== currentUserUsername);
                console.log(filteredUsers);
                setUsers(filteredUsers);
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
            const request1 = new Request("http://localhost:3000/swipePage", { //CHANGE TO ADDRESS OF SERVER SIDE WHEN DEPLOYED
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    swiper: localStorage.getItem("username"), //get the username of the swiper
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
            setStatus(false); 
            console.log(status);
        }
    }

    // Get the current user to display
    const currentUser = users[currentIndex];
    //ID IS USED HERE IN INSTEAD OF USERNAME
    
    return(

        
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
                                <div
                                    className="bio-box">{currentUser.bio}
                                </div>
                            </div>
                        </div>
                        <div className="swipeButtonsContainer">
                            <button className="noButton" onClick={swipeLeft}>
                                👎
                            </button>
                            <button className="yesButton" onClick={swipeRight}>
                                👍
                            </button>
                        </div>
                    </>
                    
                ) : (
                    <h2>No more users to swipe on</h2>
                )}
            </div>


    )
}

export default SwipePage
