import React from 'react'
import './styles/Main.css'
import Main from './components/Main'
import Login from './components/Login'
import Verify from './components/Verify'

import { 
	BrowserRouter as Router, 
	Switch, 
	Route 
} from 'react-router-dom'

function App() {
	return (
		<div>
			<Router>
				<Switch>
					<Route path={'/login'} component={Login} />
					<Route path={'/verify'} component={Verify} />
					<Route path={'/'} component={Main} />
				</Switch>
			</Router>
		</div>
	)
}

export default App
