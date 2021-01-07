import "./styles.css";
import { ReactComponent as Logo } from "./logo.svg";

function Navbar() {
    //1:16:15
    return (
        <nav className="main-navbar">
            <Logo />
            <a href="" className="logo-text">DS Delivery</a>
        </nav>
    )
}

export default Navbar;