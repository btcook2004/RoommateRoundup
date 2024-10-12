function leftButtonClicked()
{
    const request1 = new Request("http://localhost:3000/console", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            text: "Left was clicked"
        }),
    });
    fetch(request1)
}

function rightButtonClicked()
{
    const request1 = new Request("http://localhost:3000/console", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            text: "Right was clicked"
        }),
    });
    fetch(request1)
}

const leftBtn = document.querySelector("#left");
const rightBtn = document.querySelector("#right");

leftBtn.addEventListener("click", leftButtonClicked);
rightBtn.addEventListener("click", rightButtonClicked);

fetch('http://localhost:3000/helloworld')
    .then((response) => {
        return response.text();
    })
    .then((text) => {
        console.log(text)
    })
    .catch((response) => {
        console.log("i am very sad :( " + response);
    });