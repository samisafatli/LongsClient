import { useState } from 'react'
import OngList from '../components/ongs/OngList'

const ongsURL = 'http://localhost:3333/ongs'

const AllOngsPage = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [loadedOngs, setLoadedOngs] = useState([])

  useState(() => {
    setIsLoading(true)
    fetch(ongsURL).then(response => {
      return response.json()
    }).then(data => {
      setIsLoading(false)
      setLoadedOngs(data)
    })
  }, [])

  if(isLoading){
    return(
    <section>
      <p>Loading...</p>
    </section>)
  }

  return (
    <section>
      <h1>All Ongs</h1>
      <OngList ongs={loadedOngs}/>
    </section>
  );
}

export default AllOngsPage;