import '../styles/css/Host.css'

function Host({name, picture}){
    return(
        <div className="host">
            <p className="host-name">{name}</p>
            <img className="host-pic" src={picture} alt="photo de l'hôte"/>
        </div>
    )
}

export default Host