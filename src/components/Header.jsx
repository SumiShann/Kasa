import { NavLink } from "react-router-dom"
import logo from "../assets/logo.svg"
import "../styles/css/Header.css"

function Header(){
    const navLinks = [
        {
            route: "/",
            content: "Accueil"
        },
        {
            route: "/about",
            content: "A propos"
        }
    ]
    const isMobile = window.matchMedia("(max-width: 992px)").matches
    return (
        <header className="header">
            <img src={logo} alt="logo"/>
            <nav className="nav">
                {navLinks.map((link) => 
                    <NavLink key={link.route} to={link.route} className="nav-link">{isMobile ? link.content.toUpperCase() : link.content}</NavLink>
                )}
            </nav>
        </header>
    )
}

export default Header;