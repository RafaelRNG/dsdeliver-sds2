import "./styles.css";

import { ReactComponent as Youtube } from "./youtube.svg";
import { ReactComponent as Instagram } from "./instagram.svg";
import { ReactComponent as Linkedin } from "./linkedin.svg";

function Footer() {
    //1:16:15
    return (
        <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
            <div className="footer-icons">
                <a href="https://www.youtube.com/c/DevSuperior" target="_new">
                    <Youtube />
                </a>
                <a href="https://www.linkedin.com/in/rafael-neves-gomila-9bb211203/" target="_new">
                    <Instagram />
                </a>
                <a href="https://www.instagram.com/devsuperior.ig/">
                    <Linkedin />
                </a>
            </div>
        </footer>
    )
}

export default Footer;