import React, { useState, useEffect } from 'react'
import { db } from '../config/fire'
import CardSearch from './CardSearch'

import '../styles/MyCardList.css'

const MyCardList = ({ user }) => {
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

    const addCards = card => {
        db.collection("users").doc(user.uid).set({
            email: user.email,
            creditcards: [...cards, card]
        })

        setCards([...cards, card])
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
        <div className="settings-wrapper">
            <CardSearch addCards={addCards} />
            <div>
                { cards.length > 0 ? (
                    <div>
                        <p className="header">Your cards</p>
                        <ul className="your-cards-box">
                            {cards.map((card, idx) => (
                                <li className='card-list' key={idx}>
                                    {card}
                                    <button className='remove-button' onClick={(e) => removeCard(e, card)}>remove</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    <p className="error-message">Please add your cards</p>
                )}
            </div>
        </div>
    )
}

export default MyCardList