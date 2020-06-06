import React from 'react'

import '../styles/Home.css'

import CardSearch from './CardSearch'
import User from './User'
import MyCardList from './MyCardList'

const Home = ({ user }) => (
    <div>
        <header className="shop-topbar">
            <div>
                <span>Logo</span>
            </div>
            <User user={user} />
        </header>
        <div className="shop-container">
            <main className="shop-main">
                {/* <CardSearch /> */}
                <MyCardList user={user} />
            </main>
        </div>
    </div>
)

export default Home