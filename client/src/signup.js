function signUpButtonClicked()
{
    console.log("hi :D");
    const passwordField = document.getElementById("password");
    const usernameField = document.getElementById("username");
    password = passwordField.value;
    username = usernameField.value;
    console.log(password);
    const request1 = new Request("http://localhost:3000/signuppost", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",  // Tell the server you're sending JSON
        },
        body: JSON.stringify({
            username: username,
            password: password
        }),
    });
    fetch(request1)
}

const signupbutton = document.querySelector("#signup");


signupbutton.addEventListener("click", signUpButtonClicked);
