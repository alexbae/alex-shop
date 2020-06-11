import React from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

const User = ({ user }) => {
    const history = useHistory()
    const isCurrentUrlSettings = history.location.pathname === '/settings'
    const settingButtonUrl = isCurrentUrlSettings ? '/home' : '/settings'

    return (
        user ? (
            <Link to={settingButtonUrl} className="setting-button">
                <img alt="" className="gear-icon" src="https://img.icons8.com/material-rounded/24/000000/settings.png"/>
            </Link>
        ) : <Link to='/' className="link-button">Log in</Link>
    )
}

export default User