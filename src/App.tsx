import { BrowserRouter as Router, Switch } from 'react-router-dom'

import { PrivateRoute, PublicRoute } from './routes'
import { HomePage, Test } from './pages'

import './App.scss'

const App: React.FC = () => {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <PrivateRoute path='/' exact={true} component={HomePage} />
          <PublicRoute path='/test' exact={true} component={Test} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
