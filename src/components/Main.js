import React from 'react'

import '../styles/Home.css'

import User from './User'

const Main = ({ user, children }) => (
    <div>
        <header className="shop-topbar">
            <div>
                <span>Logo</span>
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