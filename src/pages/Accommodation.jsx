import { useFetch } from "../utils/useFetch"
import { useParams, Navigate } from "react-router-dom"
import { useEffect, useState } from "react"
import Carrousel from "../components/Carrousel"
import Collapse from "../components/Collapse"
import Tag from "../components/Tag"
import Rating from "../components/Rating"
import Host from "../components/Host"
import '../styles/css/Accommodation.css'

function Accommodation(){
    const {data} = useFetch('../logements.json')
    const params = useParams()
    const [post, setPost] = useState(null)
    useEffect(() => {
        if (data.length !== 0) {
            const postInfo = data.find(post => post.id === params.id)
            setPost(postInfo)
        } else {
            setPost(null)
        }
    }, [data])
    if (post === null){
        return <div>Loading...</div>
    } else if (post === undefined){
        return  (
                    <Navigate to='/*' replace={true} />
                )
    } else if (post !== null){
        return (
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
        )
    }
}  

export default Accommodation