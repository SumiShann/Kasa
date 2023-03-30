import "../styles/css/Card.css"
import { Link } from 'react-router-dom'

function Card({postCover, postTitle}){
    return (
        <Link to="/location">
            <div className="card">
                <img className="card-img" src={postCover} alt={postTitle} crossOrigin="anonymous"/>
                <h2 className="card-img-title">{postTitle}</h2>
            </div>
        </Link>
    )
}

export default Card