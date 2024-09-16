function leftButtonClicked()
{
    console.log("left button has been clicked");
}

function rightButtonClicked()
{
    console.log("right button has been clicked");
}

const leftBtn = document.querySelector("#left");
const rightBtn = document.querySelector("#right");

leftBtn.addEventListener("click", leftButtonClicked)
rightBtn.addEventListener("click", rightButtonClicked)