const username = localStorage.getItem("username");
document.getElementById("username").textContent = username;

function leftButtonClicked()
{
    const request1 = new Request("http://localhost:3000/console", { //CHANGE TO ADDRESS OF SERVER SIDE WHEN DEPLOYED
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            text: "Left was clicked"
        }),
    });
    fetch(request1).then(response => response.text()).then(text => console.log(text))
}

function rightButtonClicked()
{
    const request1 = new Request("http://localhost:3000/console", { //CHANGE TO ADDRESS OF SERVER SIDE WHEN DEPLOYED
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            text: "Right was clicked"
        }),
    });
    fetch(request1).then(response => response.text()).then(text => console.log(text))
}

const leftBtn = document.querySelector("#left");
const rightBtn = document.querySelector("#right");

leftBtn.addEventListener("click", leftButtonClicked);
rightBtn.addEventListener("click", rightButtonClicked);