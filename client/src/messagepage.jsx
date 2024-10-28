function NavBar()
{
    return (
        <nav>
            <ul className="navBar">
                <li>
                    <a href="../index.html">Swipe Page</a>
                </li>
                <li>
                    <a href="./signup.html">Sign-up Page</a>
                </li>
            </ul>
        </nav>
    )
}

function ListItem(props)
{
    // props: {animal: "Dog",
    return <li>{props.animal}{props.suffix}</li>;
}

function MessagePage()
{
    let animals = ['Dog', 'Lemur', 'Wombat'];
    return (
        <div>
            <NavBar />
            <div>
                <h1>Messages</h1>
            </div>
            <ul>
                {animals.map((animal) => <ListItem key={animal} animal={animal} suffix={"Woo"}> </ListItem>)}
            </ul>
        </div>
    );
}

export default MessagePage