import React, { useState, useContext, useEffect } from 'react'
import { UserContext } from '../context/userContext'

import Main from '../components/Main'
import { db } from '../config/fire'

import '../styles/Home.css'
import SearchByCategory from '../components/SearchByCategory'
import CardMoreDetail from '../components/CardMoreDetail'
import { removeSameCards } from '../utils/removeSameCards'
import { useHistory } from 'react-router-dom'

const Home = () => {
    const history = useHistory()
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
            if (!card.benefits) return null
            return card.benefits.indexOf(value) > -1
        })

        const resultEverythingCards = myCardCollection.filter(card => {
            if (!card.benefits) return null
            return card.benefits.indexOf("everything") > -1
        })

        const flatResult = removeSameCards(resultCards, resultEverythingCards)

        setSearchValue(value)
        setResult(flatResult)
    }

    const hasCards = localStorage.getItem('hasCards')

    if (hasCards === "false" || hasCards == null) {
        history.push('/settings')
    }

    const noResult = result.length <= 0

    return (
        <Main user={user}>
            <SearchByCategory searchBy={(category) => searchBy(category)} selected={searchValue} />
            <div className="benefit-cards-wrapper">
                {noResult && (
                    <div className="card-each-box">
                        <p>Sorry, we couldn't find any cards mathing your search.</p>
                        <p>Recommend credit cards for you.</p>
                        <div>American Express Blue Sky Credit Cards</div>
                        <div>Benefit ... </div>
                    </div>
                )}
                {result.map((card, idx) => {
                    return (
                        <div className="card-each-box" key={idx}>
                            <div className="card-top">
                                <a 
                                    className="card-name"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href={card.website}
                                >
                                    {card.name}
                                </a>
                            </div>
                            
                            <div>
                                {(card[searchValue] || card['everything']).map((obj, idx) => {
                                    if (obj.type === 'benefit') return null
                                    return (
                                        <CardMoreDetail
                                            copies={[obj.more]}
                                            label={obj.label && obj.label}
                                            value={obj.value}
                                            detail={obj.detail && obj.detail}
                                            key={idx}
                                        />
                                    )
                                })}
                            </div>
                            <div className="benefit-collect">
                                {(card[searchValue] || card['everything']).map((obj, idx) => {
                                    if (obj.type !== 'benefit') return null
                                    return (
                                        <CardMoreDetail
                                            type={obj.type}
                                            copies={[obj.detail, obj.more]}
                                            label={obj.label && obj.label}
                                            value={obj.value}
                                            key={idx}
                                        />
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </Main>
    )
}

export default Home