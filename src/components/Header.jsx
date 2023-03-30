import { NavLink } from "react-router-dom"
import logo from "../logo.svg"
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
                {navLinks.map((link) => isMobile ? (
                    <NavLink key={link.route} to={link.route} className="nav-link">{link.content.toUpperCase()}</NavLink>
                ):(
                    <NavLink key={link.route} to={link.route} className="nav-link">{link.content}</NavLink>
                ))}
            </nav>
        </header>
    )
}

export default Header;