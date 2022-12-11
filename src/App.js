import { Route, Switch } from 'react-router-dom'
import AllOngs from './pages/AllOngs'
import NewOng from './pages/NewOng'
import Layout from './components/layout/Layout'
const App = () => {
  return (
    <div className="App">
    <Layout>
      <Switch>
          <Route path='/' exact>
            <AllOngs/>
          </Route>
          <Route path='/new-ong'>
            <NewOng/>
          </Route>
        </Switch>
    </Layout>
    </div>
  );
}

export default App;
