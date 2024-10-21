function signUpPressed()
{
    const nameStr = document.getElementById("name").value
    const emailStr = document.getElementById("email").value
    const passwordStr = document.getElementById("password").value
    const request = new Request("http://localhost:3000/signup",
    {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({name: nameStr, email: emailStr, password: passwordStr}),
    });
    // NOTE: Need to better understand then() chaining
    //fetch(request).then(response => response.text()).then(text => console.log(text))

    fetch(request)
        .then(response => response.text())
        .then(text => console.log(text))
        .then(localStorage.setItem("username", nameStr))
        .then(() => window.location.href = "http://localhost:5173/")
}
const signUpButton = document.getElementById("sign-up")
signUpButton.addEventListener("click", signUpPressed)