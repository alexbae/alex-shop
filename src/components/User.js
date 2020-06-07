import React from 'react'
import fire from '../config/fire'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

const User = ({ user }) => {
    const history = useHistory()

    const logout = () => {
        fire.auth().signOut()
        history.push('/login')
    }

    return (
        user
            ? (
                <div>
                    <Link to='/settings'>{user.email}</Link>
                    <button className="logout-button" onClick={logout}>log out</button>
                </div>
            ) : <Link to='/login'>Login / Signup</Link>
    )
}

export default User