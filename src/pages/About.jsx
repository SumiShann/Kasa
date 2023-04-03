import Banner from "../components/Banner"
import Collapse from "../components/Collapse"
import aboutData from "../data/aboutData"

function About(){
    const data = aboutData
    return (
        <main>
            <Banner origin="about" />
            {data.map(item => 
            <Collapse key={item.id} title={item.title} content={item.content} />
            )}
        </main>
        
    )
}

export default About