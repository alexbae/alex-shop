import React, { useState } from 'react'
import fire from '../config/fire'
import { Link } from 'react-router-dom'

import '../styles/Home.css'

const Home = () => {
    const [toggleMenu, setTogglemenu] = useState(false)
    const userEmail = fire.auth().currentUser?.email
    // const status = fire.auth().currentUser.emailVerified

    // if (!status) {
    //     fire.auth().currentUser.sendEmailVerification()
    // }

    const onMenuClick = e => {
        setTogglemenu(!toggleMenu)
    }

    return (
        <div>
            <header className="shop-topbar">
                <div onClick={onMenuClick}>=</div>
                <div>Logo</div>
                <div>search bar</div>
                {userEmail 
                    ? <p>{userEmail}</p> 
                    : <Link to='/login'>Login / Signup</Link>
                }
            </header>
            <div className="shop-container">
                {toggleMenu && (
                    <aside className="shop-sidebar">
                        <div>Tops</div>
                        <div>Bottoms</div>
                        <div>Shoes</div>
                        <div>Bags</div>
                    </aside>
                )}
                <main className="shop-main">
                    <section className="shop-main-ads">[Main Ads Carousel]</section>
                </main>
            </div>
        </div>
    )
}

export default Home