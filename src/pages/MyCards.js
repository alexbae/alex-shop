import React, { useContext } from 'react'
import { UserContext } from '../context/userContext'

import Main from '../components/Main'
import MyCardList from '../components/MyCardList'

const MyCards = () => {
    const user = useContext(UserContext)

    return (
        <Main user={user}>
            <MyCardList user={user} />
        </Main>
    )
}

export default MyCards