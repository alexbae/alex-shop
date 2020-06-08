import React, { useState, useContext, useEffect } from 'react'
import { UserContext } from '../context/userContext'

import Main from '../components/Main'
import { db } from '../config/fire'

import '../styles/Home.css'
import SearchByCategory from '../components/SearchByCategory'

const Home = () => {
    const [cards, setCards] = useState([])
    const [result, setResult] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const myCardCollection = []

    const user = useContext(UserContext)

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

    if (cards.length > 0) {
        cards.map(card => (
            db.collection("collections").doc(card).get()
                .then(doc => {
                    if (doc.exists) {
                        myCardCollection.push(doc.data())
                    } else {
                        console.log('no doc!')
                    }
                })
                .catch(err => console.log('error', err))
        ))
    }

    const searchBy = value => {
        const resultCards = myCardCollection.filter(card => {
            if (!card.benefits) return
            return card.benefits.indexOf(value) > -1
        })

        const resultEverythingCards = myCardCollection.filter(card => {
            if (!card.benefits) return
            return card.benefits.indexOf("everything") > -1
        })

        const hasSameCard = () => {
            const matchName = resultCards.map(card => {
                return resultEverythingCards.map(c => {
                    return card.name === c.name
                })
            })

            return matchName.reduce((a, c) => a || c[0], false)
        }

        const mergedCards = hasSameCard() ? resultCards : [...resultCards, ...resultEverythingCards]

        setSearchValue(value)
        setResult(mergedCards)
    }

    return (
        <Main user={user}>
            <SearchByCategory searchBy={(category) => searchBy(category)} selected={searchValue} />
            <div className="benefit-cards-wrapper">
                {result.map((card, idx) => {
                    return (
                        <div className="card-each-box" key={idx}>
                            <a 
                                className="card-name"
                                target="_blank"
                                href={card.website}
                            >
                                {card.name}
                            </a>
                            <ul>
                                {(card[searchValue] || card['everything']).map((obj, idx) => (
                                    <li className="benefit-card-list" key={idx}>
                                        <a 
                                            className="card-value"
                                            target="_blank"
                                            href={card.website}
                                        >
                                            {obj.value}
                                        </a>
                                        <span className="card-desc">{obj.desc && obj.desc}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )
                })}
            </div>
        </Main>
    )
}

export default Home