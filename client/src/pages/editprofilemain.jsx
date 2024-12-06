import NavBar from '../NavBar'
import EditProfile from './editprofile'
import editMode from './editmode.jsx'

function EditProfileMain() {
    return(
        <div>
            <NavBar></NavBar>

            {/* <EditProfile/> */}
            {/* <div>
                <h1>Main Section</h1>
            </div> */}
            <div>
                <editMode/>
            </div>
        </div>
    )
}

export default EditProfileMain;