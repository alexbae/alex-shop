import React, { useState } from 'react'
import fire from '../config/fire'
import useFormInput from '../utils/useFormInput'
import { useHistory } from 'react-router-dom'

import '../styles/Login.css'

const Login = () => {
    const [error, setError] = useState(null)
    const [isLogin, setIsLogin] = useState(true)
    const emailOnChange = useFormInput('')
    const passwordOnChange = useFormInput('')
    const history = useHistory()

    const loginForm = e => {
        e.preventDefault()
        fire.auth()
            .signInWithEmailAndPassword(emailOnChange.val, passwordOnChange.val)
            .then(() => history.push('/'))
            .catch(error => setError(error.message))
    }

    const signupForm = e => {
        e.preventDefault()
        fire.auth()
            .createUserWithEmailAndPassword(emailOnChange.val, passwordOnChange.val)
            .then(() => history.push('/'))
            .catch(error => setError(error.message))
    }

    const toggleLogin = () => setIsLogin(!isLogin)

    return (
        <div className="login-wrapper">
            <div className="login-inner">
                <div className="login-card">
                    <h1 className="login-title">
                        {isLogin 
                            ? 'Log In to your account'
                            : 'Create your account'
                        }
                    </h1>
                    {isLogin ? (
                        <form className="login-form">
                            {error && <div className="error-message">Email or Password is incorrect</div>}
                            <input type="email" placeholder="email" onChange={emailOnChange.onChange} />
                            <input type="password" placeholder="password" onChange={passwordOnChange.onChange} />
                            <button type="submit" onClick={loginForm}>Log In</button>
                        </form>
                    ) : (
                        <form className="login-form">
                            {error && <div className="error-message">Something is wrong, please try again</div>}
                            <input type="email" placeholder="email" onChange={emailOnChange.onChange} />
                            <input type="password" placeholder="password" onChange={passwordOnChange.onChange} />
                            <button type="submit" onClick={signupForm}>Sign Up</button>
                        </form>
                    )}
                    <div className="link-bottom">
                        <button className="link-button" onClick={toggleLogin}>{isLogin ? 'Create an account' : 'Login with existing account'}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login