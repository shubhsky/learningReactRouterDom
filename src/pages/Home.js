import { Link } from "react-router-dom";

function Home(){
    return(
        <>
            <main><h1>Home Page</h1></main>
            <Link to="/about">About</Link>
            <br></br>
            <Link to="/items">Items</Link>
        </>
    )
}

export default Home;