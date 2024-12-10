import NavBar from '../NavBar'
import EditProfile from './editprofile'
import EditComponent from './EditComponent'

function EditProfileMain() {
    return(
        <div className='backColor'>
            <NavBar></NavBar>

            <EditProfile/>

            {/* <EditComponent/> */}


        </div>
    )
}

export default EditProfileMain;