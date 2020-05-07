import React, { useEffect } from 'react'
import fire from '../config/fire'

const Verify = () => {

    const sendVerifictaion = () => fire.auth().currentUser.sendEmailVerification()

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