import React, { useState, useEffect } from 'react'
import './styles/Main.css'
import Home from './pages/Home'
import Login from './pages/Login'
import MyCards from './pages/MyCards'
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
					<Route exact path={'/home'} component={Home} />
					<Route exact path={'/settings'} component={MyCards} />
					<Route exact path={'/'} component={Login} />
				</Switch>
			</Router>
		</UserContext.Provider>
	)
}

export default App
