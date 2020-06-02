import React, { useState, useEffect } from 'react'
import './styles/Main.css'
import Main from './pages/Home'
import Login from './pages/Login'
import { UserContext } from './context/userContext'

import { 
	BrowserRouter as Router, 
	Switch, 
	Route 
} from 'react-router-dom'
import fire from './config/fire'

function App() {
    const [ user, setUser ] = useState(null)

    useEffect(() => {
        fire.auth().onAuthStateChanged(userAuth => {
            setUser(userAuth)
        })
    }, [])

	return (
		<UserContext.Provider value={user}>
			<Router>
				<Switch>
					<Route path={'/login'} component={Login} />
					<Route path={'/'} component={Main} />
				</Switch>
			</Router>
		</UserContext.Provider>
	)
}

export default App
