import React, { useState, useEffect } from 'react'
import { db } from '../config/fire'

import '../styles/CardSearch.css'

import { selectedCollection, splitString } from '../utils/search'

const CardSearch = ({ addCards }) => {
    const [collection, setCollection] = useState([])
    const [value, setValue] = useState('')

    useEffect(() => {
        db.collection("cards").doc("creditcards").get()
        .then(doc => {
            if (doc.exists) {
                setCollection(doc.data())
            }
        })
        .catch(err => console.log('error', err))
    }, [])

    const inputChange = e => {
        setValue(e.target.value)
    }

    const searchBlur = () => {
        setTimeout(() => {
            setValue('')
        }, 300)
    }
    
    const collectionArray = Object.keys(collection).map(card => card.toLowerCase())

    const cardList = selectedCollection(collectionArray, splitString(value))

    const { best, similar } = cardList

    return (
        <div>
            <p className="card-search-bar-label">Search your cards</p>
            <div className="card-search-bar-wrap">
                <input className="card-search-bar" onChange={inputChange} onBlur={searchBlur} value={value} />
                <ul className="search-list-wrap">
                    {best && best.map((card, key) => (
                        <li onClick={() => addCards(card)} className='card-search-best card-search-list' key={`best-${key}`}>
                            {card}
                        </li>
                    ))}
                    {similar && similar.map((card, key) => (
                        <li onClick={() => addCards(card)} className='card-search-list' key={`similar-${key}`}>
                            {card}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default CardSearch
