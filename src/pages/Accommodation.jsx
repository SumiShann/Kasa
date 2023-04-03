import { useFetch } from "../utils/useFetch"
import { useParams } from "react-router-dom"
import Carrousel from "../components/Carrousel"

function Accommodation(){
    const params = useParams()
    const {data} = useFetch('../logements.json')
    const postData = data
    return (
        postData.map(post => params.id === post.id ?
            <main key={post.id}>
                <Carrousel slider={post.pictures}/>
            </main>
            : null)
    )
}

export default Accommodation