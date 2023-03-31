import left from "../assets/arrow_left.png"
import right from "../assets/arrow_right.png"
import { useState, useEffect } from "react"

function Carrousel({postPics}){
    let [i, setI] = useState(0)
    console.log(postPics)
    useEffect(() => {
        
    }, [i])
    return (
        <div className="carrousel">
            <img src={left} alt="flèche gauche" onClick={()=>setI(i-1)}/>
            <img src={postPics[i]}/>
            <img src={right} alt="flèche droite" onClick={()=>setI(i+1)}/>
        </div>
    )
}

export default Carrousel