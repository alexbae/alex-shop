import React from 'react'

import '../styles/Home.css'

import User from './User'
import { Link } from 'react-router-dom'

const Main = ({ user, children }) => (
    <div>
        <header className="shop-topbar">
            <div>
                <Link to={'/'}>Logo</Link>
            </div>
            <User user={user} />
        </header>
        <div className="shop-container">
            <main className="shop-main">
                {children}
            </main>
        </div>
    </div>
)

export default Main