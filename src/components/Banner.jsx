import "../styles/css/Banner.css"
import homeBanner from "../assets/banner_home.jpg"
import aboutBanner from "../assets/banner_about.jpg"


function Banner({origin}){
    const isMobile = window.matchMedia("(max-width: 992px)").matches
    if (origin === "home") {
        return (
        <div className="banner">
            <img className="banner-img" src={homeBanner} alt=""/>
            <h1 className="banner-title">Chez vous,{isMobile && <br/>} partout et ailleurs</h1>
        </div>
        )
    } else if (origin === "about"){
        return (
            <div className="banner">
                <img className="banner-img" src={aboutBanner} alt=""/>
            </div>
        )
    }
    
}

export default Banner