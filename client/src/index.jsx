import NavBar from "./NavBar.jsx";

function IndexPage()
{
    return (
      <div>
        <NavBar />
        <div className={"indexDiv"}>
          <h1>IndexPage</h1>
          <h2>The Reactified Version</h2>
          <h3>Brandon Specht Wasn't Here</h3>
        </div>

      </div>
    );
}

export default IndexPage;