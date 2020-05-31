import React, { useEffect } from 'react'
import fire from '../config/fire'
import { useHistory } from 'react-router-dom'

const Verify = () => {
    const history = useHistory()
    const sendVerifictaion = () => fire.auth().currentUser?.sendEmailVerification()
    const isVerified = fire.auth().currentUser?.emailVerified
    
console.log({ isVerified })
    if (isVerified) {
        history.push('/')
    }

    useEffect(() => {
        sendVerifictaion()
    }, [])

    return (
        <div>
            <p>Please verify in your email.</p>
            <button onClick={sendVerifictaion}>resent email</button>
        </div>
    )
}

export default Verify