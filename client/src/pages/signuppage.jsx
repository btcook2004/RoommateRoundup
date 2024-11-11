import React from 'react'
import NavBar from '../NavBar'
import SignUpInfo from './signup'

function SignUpPage() {
    return(
    <div>
        <NavBar></NavBar>
        <SignUpInfo/>
        <div>check server log!</div>
    </div>
    )
}

export default SignUpPage