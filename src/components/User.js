import React from 'react'
import { Link } from 'react-router-dom'

const User = ({ user }) => {
    return (
        user && (
            
                <Link to='/settings' className="setting-button">
                    <img className="gear-icon" src="https://img.icons8.com/material-rounded/24/000000/settings.png"/>
                </Link>
            
        )
    )
}

export default User