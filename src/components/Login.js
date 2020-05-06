import React, { useState } from 'react'
import fire from '../config/fire'
import useFormInput from '../utils/useFormInput'

const Login = () => {
    const [error, setError] = useState(null)
    const [isLogin, setIsLogin] = useState(true)
    const emailOnChange = useFormInput('')
    const passwordOnChange = useFormInput('')

    const loginForm = e => {
        e.preventDefault()
        fire.auth()
            .signInWithEmailAndPassword(emailOnChange.val, passwordOnChange.val)
            .catch(error => setError(error.message))
    }

    const signupForm = e => {
        e.preventDefault()
        fire.auth()
            .createUserWithEmailAndPassword(emailOnChange.val, passwordOnChange.val)
            .catch(error => setError(error.message))
    }

    const toggleLogin = () => setIsLogin(!isLogin)

    return (
        <div>
            <button onClick={toggleLogin}>{isLogin ? 'Create an account' : 'login with existing account'}</button>
            {isLogin ? (
                <form>
                    <input type="email" placeholder="email" onChange={emailOnChange.onChange} />
                    <input type="password" placeholder="password" onChange={passwordOnChange.onChange} />
                    <button type="submit" onClick={loginForm}>Log in</button>
                    {error && <p>{error}</p>}
                </form>
            ) : (
                <form>
                    <input type="email" placeholder="email" onChange={emailOnChange.onChange} />
                    <input type="password" placeholder="password" onChange={passwordOnChange.onChange} />
                    <button type="submit" onClick={signupForm}>Sign up</button>
                    {error && <p>{error}</p>}
                </form>
            )}
        </div>
    )
}

export default Login