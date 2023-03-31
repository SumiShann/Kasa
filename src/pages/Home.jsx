import '../App.css'
import Gallery from '../components/Gallery'
import React from 'react'
import { useFetch } from "../utils/useFetch"


function Home() {
  const {data} = useFetch('./logements.json')
  return (
    <React.Fragment>
      <Gallery postList={data}/>
    </React.Fragment>
  );
}

export default Home
