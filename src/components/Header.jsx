import { NavLink } from "react-router-dom"
import logo from "../assets/logo.svg"
import navLinks from "../data/navLinks"
import "../styles/css/Header.css"

function Header(){
    const links = navLinks
    const isMobile = window.matchMedia("(max-width: 992px)").matches
    return (
        <header className="header">
            <img src={logo} alt="logo"/>
            <nav className="nav">
                {links.map((link) => 
                    <NavLink key={link.id} to={link.route} className="nav-link">
                        {isMobile ? link.content.toUpperCase() : link.content}
                    </NavLink>
                )}
            </nav>
        </header>
    )
}

export default Header;