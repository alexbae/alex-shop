import React from 'react'
import fire from '../config/fire'

const Logout = () => {
    const logout = () => {
        fire.auth().signOut()
    }
    
    return <button onClick={logout}>log out</button>
}

export default Logout