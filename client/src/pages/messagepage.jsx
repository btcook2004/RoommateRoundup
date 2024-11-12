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
            <div>
                <h1>Messages</h1>
            </div>
            <ul>
                {animals.map((animal) => <ListItem key={animal} animal={animal} suffix={"Woo"}> </ListItem>)}
            </ul>
        </div>
    );
}

export default MessagePage;