import { useHistory } from 'react-router-dom'
import NewOngForm from '../components/ongs/NewOngForm'
import axios from 'axios'

const NewOng = () => {
  const ongURL = 'http://localhost:3333/ongs'

  const addOngHandler = ongData => {
    const {title, description, email, category} = ongData
    axios.post(ongURL, {
      title, description, email, category
    }).then(response => response).catch(error => error)
  }
  return (
    <section>
      <h1>NewOng Page :)</h1>
      <NewOngForm onAddOng={addOngHandler}/>
    </section>
  )
}

export default NewOng
