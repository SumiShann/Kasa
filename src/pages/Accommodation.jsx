import { useFetch } from "../utils/useFetch"
import { useParams } from "react-router-dom"
import Carrousel from "../components/Carrousel"
import Collapse from "../components/Collapse"
import Tag from "../components/Tag"
import Rating from "../components/Rating"
import Host from "../components/Host"
import '../styles/css/Accommodation.css'

function Accommodation(){
    const params = useParams()
    const {data} = useFetch('../logements.json')
    const postData = data
    return (
        postData.map(post => params.id === post.id ?
            <main key={post.id}>
                <Carrousel slider={post.pictures}/>
                <h1 className="title">{post.title}</h1>
                <p className="location">{post.location}</p>
                <div className="tags">
                    {post.tags.map((tag, index) => 
                        <Tag key={`${tag}-${index}`} tag={tag}/>)}
                </div>
                <div className="details">
                    <Rating postRating={post.rating} />
                    <Host name={post.host.name} picture={post.host.picture} />
                </div>        
                <Collapse title={"Description"} content={post.description}/>
                <Collapse title={"Équipements"} content={post.equipments}/>
            </main>
            : null)
    )
}

export default Accommodation