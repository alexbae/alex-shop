import React, { useContext } from 'react'
import { UserContext } from '../context/userContext'

import Home from '../components/Home'

const HomePage = () => {
    const user = useContext(UserContext)

    return <Home user={user} />
}

export default HomePage