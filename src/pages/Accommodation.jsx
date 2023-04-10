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
    const {data, isLoading, error} = useFetch('../logements.json')
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

    if (isLoading || post === null){
        return <div>Loading...</div>
    }
    
    if (error && !isLoading || post === undefined){
        return  <Navigate to='/*' replace={true} />
    }

    return (
        <main key={post.id}>
            <Carrousel slider={post.pictures}/>
            <div className="accmmdtn-basics">
                <h1 className="title">{post.title}</h1>
                <p className="location">{post.location}</p>
                <div className="tags">
                    {post.tags.map((tag, index) => 
                        <Tag key={`${tag}-${index}`} tag={tag}/>)}
                </div>
            </div>
            <div className="details">
                <Rating postRating={post.rating} />
                <Host name={post.host.name} picture={post.host.picture} />
            </div>        
            <div className="accmmdtn-collapse">
                <Collapse title={"Description"} content={post.description}/>
                <Collapse title={"Équipements"} content={post.equipments}/>
            </div>
        </main>
    )
}  

export default Accommodation