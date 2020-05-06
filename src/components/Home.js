import React, { useEffect } from 'react'
import fire from '../config/fire'

const Home = () => {
    const logout = () => {
        fire.auth().signOut()
    }

    const name = fire.auth().currentUser.email
    const status = fire.auth().currentUser.emailVerified

    if (!status) {
        fire.auth().currentUser.sendEmailVerification().then(() => {})
    }

    return (
        <div>
            <p>HOME</p>
            <p>name: {name}</p>
            <p>status: {status ? 'verified' : 'verify your email'}</p>
            <button onClick={logout}>log out</button>
        </div>
    )
}

export default Home