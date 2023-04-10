import Banner from "../components/Banner"
import Collapse from "../components/Collapse"
import aboutData from "../data/aboutData"
import "../styles/css/About.css"

function About(){
    const data = aboutData
    return (
        <main>
            <Banner origin="about" />
            <section className="info">
                {data.map(item => 
                <Collapse key={item.id} title={item.title} content={item.content} />
                )}
            </section>
        </main>
        
    )
}

export default About