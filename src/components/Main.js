import React, { useState, useEffect } from 'react'
import fire from '../config/fire'
import { Redirect } from 'react-router-dom'

import Home from './Home'

const Main = () => {
    const status = fire.auth().currentUser?.emailVerified
    return (
        status === false ? <Redirect to='/verify' /> : <Home />
    )
}

export default Main