import { useEffect } from "react"
import { useFetch } from "../utils/useFetch"
import Gallery from '../components/Gallery'
import Banner from '../components/Banner'

function Home() {
  const {data} = useFetch('./logements.json')

  useEffect(() => {
    document.title = "Kasa"
  }, [])

  return (
      <main>
        <Banner origin="home"/>
        <Gallery postList={data}/>
      </main>
  );
}

export default Home