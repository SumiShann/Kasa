import full from '../assets/star_full.svg'
import empty from '../assets/star_empty.svg'
import '../styles/css/Rating.css'

function Rating({postRating}){
    const rating = parseInt(postRating, 10)
    const noRating = 5 - rating
    return (
        <div>
            {Array(rating).fill().map((number, index) => 
            <img className='star' key={`${number}-${index}`} src={full}/>)}
            {Array(noRating).fill().map((number, index) =>
            <img className='star' key={`${number}-${index}`} src={empty}/>)}
        </div>
    )
}

export default Rating