import React, { useState, useEffect } from 'react'
import fire from './config/fire'
import Home from './components/Home'
import Login from './components/Login'

function App() {
	const [user, setUser] = useState(null)

	const authListener = () => {
		fire.auth().onAuthStateChanged((user) => {
			if (user) {
				setUser(user)
			} else {
				setUser(null)
			}
		})
	}

	useEffect(() => {
		authListener()
	}, [])

	return (
		<div>
			{user ? <Home /> : <Login />}
		</div>
	)
}

export default App
