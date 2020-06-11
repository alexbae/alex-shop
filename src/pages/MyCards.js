import React, { useContext } from 'react'
import fire from '../config/fire'
import { UserContext } from '../context/userContext'
import { useHistory } from 'react-router-dom'

import Main from '../components/Main'
import MyCardList from '../components/MyCardList'

const MyCards = () => {
    const user = useContext(UserContext)

    const history = useHistory()

    const logout = () => {
        fire.auth().signOut()

        setTimeout(() => {
            history.push('/')
        }, 300)
    }

    return (
        <Main user={user}>
            <MyCardList user={user} />
            <button className="logout-button" onClick={logout}>log out</button>
        </Main>
    )
}

export default MyCards