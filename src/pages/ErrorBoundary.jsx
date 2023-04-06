import { Link } from "react-router-dom"
import "../styles/css/ErrorBoundary.css"

function ErrorBoundary(){
    const isMobile = window.matchMedia("(max-width: 992px)").matches
    return (
        <div className="notfound">
            <h1 className="notfound-title">404</h1>
            <p className="notfound-msg">Oups ! La page que {isMobile ? <br/> : null} vous demandez n'existe pas.</p>
            <Link className="notfound-link" to="/">Retourner sur la page d'accueil</Link>
        </div>
    )
}

export default ErrorBoundary