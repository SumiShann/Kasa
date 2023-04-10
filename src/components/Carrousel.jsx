import left from "../assets/arrow_left.svg"
import right from "../assets/arrow_right.svg"
import "../styles/css/Carrousel.css"
import { useState} from "react"

function Carrousel({slider}){
    const [i, setI] = useState(0)
    const len = slider.length - 1
    const isOneSlide = slider.length === 1
    const isMobile = window.matchMedia("(max-width: 992px)").matches
    return (
        <div className="carrousel">
            <img src={slider[i]} className="carrousel-slide" alt=""/>
            {!isOneSlide && <img src={left} alt="flèche gauche" className="arrow arrow-left" onClick={()=> setI(i < 1 ? len : i - 1 )}/>}
            {!(isMobile || isOneSlide) && <p className="carrousel-count">{`${i + 1}/${slider.length}`}</p>}
            {!isOneSlide && <img src={right} alt="flèche droite" className="arrow arrow-right" onClick={()=> setI(i === len ? 0 : i + 1 )}/>}
        </div>
    )
}

export default Carrousel