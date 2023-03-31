import "../styles/css/Card.css"
import { Link } from 'react-router-dom'


function Card({postId, postCover, postTitle}){
    return (
        <Link to={`/accommodation/${postId}`}>
            <div className="card">
                <img className="card-img" src={postCover} alt={postTitle} crossOrigin="anonymous"/>
                <h2 className="card-img-title">{postTitle}</h2>
            </div>
        </Link>
    )
}

export default Card