import React, { useState, useEffect } from 'react'
import fire, { db } from '../config/fire'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

import '../styles/Home.css'

const Home = ({ user }) => {
    const history = useHistory()
    const [value, setValue] = useState('')
    const [cards, setCards] = useState([])

    useEffect(() => {
        if (user) {
            db.collection("users").doc(user.uid).get()
                .then(doc => {
                    if (doc.exists) {
                        setCards(doc.data().creditcards)
                    } else {
                        console.log('no doc!')
                    }
                })
                .catch(err => console.log('error', err))
        }
    }, [user])

    const logout = () => {
        // setCards([])
        fire.auth().signOut()
        history.push('/login')
    }

    const cardInput = e => {
        setValue(e.target.value)
    }

    const addCards = e => {
        e.preventDefault()  
        db.collection("users").doc(user.uid).set({
            email: user.email,
            creditcards: [...cards, value]
        })

        setCards([...cards, value])
    }

    const removeCard = (e, card) => {
        e.preventDefault()

        const removedCard = cards.filter(item => item !== card)

        db.collection("users").doc(user.uid).update({ 
            creditcards: removedCard
        })

        setCards(removedCard)
    }

    return (
        <div>
            <header className="shop-topbar">
                <div>
                    <span>Logo</span>
                </div>
                {user 
                    ? (
                        <div>
                            {user.email}
                            <button className="logout-button" onClick={logout}>log out</button>
                        </div>
                    ) : <Link to='/login'>Login / Signup</Link>
                }
            </header>
            <div className="shop-container">
                <main className="shop-main">
                    <ul>
                        {cards && cards.map((card, idx) => (
                            <li key={idx}>
                                {card}
                                <button onClick={(e) => removeCard(e, card)}>remove</button>
                            </li>
                        ))}
                    </ul>
                    <form>
                        <input type='text' name="card" onChange={cardInput} />
                        <button onClick={addCards} type="submit">add</button>
                    </form>
                </main>
            </div>
        </div>
    )
}

export default Home