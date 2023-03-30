import Card from "./Card"
import { useFetch } from "../utils/useFetch"

function Gallery(){
    const {data} = useFetch('./logements.json')
    const postList = data
    return (
        <section className="gallery">
            {postList.map(post => 
                <Card key={post.id} postCover={post.cover} postTitle={post.title}/>
            )}
        </section>
    )
}

export default Gallery