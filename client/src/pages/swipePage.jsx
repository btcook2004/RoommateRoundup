import NavBar from '../NavBar'
import Swipe from './swipe'

function swipeRight() {
    console.log("swiped right")
}
function swipeLeft() {
    console.log("swiped left")
}


function SwipePage() {
    return(
    <div>
        <NavBar></NavBar>
        <Swipe/>

        <div class="columnsContainer">

            <div class="image-placeholder">
                <div class="column image-column">
                    <img src="../public/profile.svg" alt="Description of image"/>
                </div>
            </div>

            <div class="column text-column">
                <h1>Name Placeholder</h1>
                <textarea placeholder="Enter your text here"></textarea>
            </div>
        </div>

        <div class="swipeButtonsContainer">
            <button className="noButton" onClick={swipeLeft}>👎</button>
            <button className="yesButton" onClick={swipeRight}>👍</button>
        </div>
    </div>
    )
}

export default SwipePage