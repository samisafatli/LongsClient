import { useHistory } from 'react-router-dom'
import NewOngForm from '../components/ongs/NewOngForm'

const NewOng = () => {
  const ongURL = 'http://localhost:3333/ongs'
  
  const history = useHistory()

  const addOngHandler = ongData => {
    fetch(ongURL, {
      method: 'POST',
      body: JSON.stringify(ongData),
      headers: { 'Content-Type': 'application/json'}
    }).then(() => history.replace('/'))
  }
  return (
    <section>
      <h1>NewOng Page :)</h1>
      <NewOngForm onAddOng={addOngHandler}/>
    </section>
  )
}

export default NewOng
