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
    
    const collectionArray = Object.keys(collection).map(card => card.toLowerCase())

    const cardList = selectedCollection(collectionArray, splitString(value))

    const { best, similar } = cardList

    return (
        <div>
            <input onChange={inputChange} />
            <ul>
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
    )
}

export default CardSearch
