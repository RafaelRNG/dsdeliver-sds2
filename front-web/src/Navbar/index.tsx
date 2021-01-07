import "./styles.css";
import { ReactComponent as Logo } from "./logo.svg";

function Navbar() {
    //56:22
    return (
        <nav className="main-navbar">
            <Logo />
            <a href="" className="logo-text">DS Delivery</a>
        </nav>
    )
}

export default Navbar;