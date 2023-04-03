import '../App.css'
import React from 'react'
import { useFetch } from "../utils/useFetch"
import Gallery from '../components/Gallery'
import Banner from '../components/Banner'



function Home() {
  const {data} = useFetch('./logements.json')
  return (
    <React.Fragment>
      <main>
        <Banner origin="home"/>
        <Gallery postList={data}/>
      </main>
    </React.Fragment>
  );
}

export default Home
