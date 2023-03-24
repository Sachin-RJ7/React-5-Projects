import "../styles/header.scss";
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <nav>
            <h1>TechyStar.</h1>
            <main>
                <Link to={"/"} >Home</Link> 
                <Link to={"/"} >Contact</Link> 
                <Link to={"/"} >About</Link> 
                <Link to={"/"} >Brands</Link> 
                <Link to={"/"} >Services</Link> 
            </main>
        </nav>
    )
}

export default Header;