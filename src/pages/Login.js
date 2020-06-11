import React, { useContext } from 'react'
import Login from '../components/Login'
import { useHistory } from 'react-router-dom'
import { UserContext } from '../context/userContext'

const LoginPage = () => {
    const history = useHistory()
    const user = useContext(UserContext)

    if (user) {
        history.push('/home')
    }
    
    return <Login />
}

export default LoginPage
