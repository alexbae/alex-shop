import React, { useState, useEffect } from 'react'

import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'

function App() {
	const [prods, setProds] = useState({})
	const [url, setUrl] = useState('')

	const db = firebase.firestore()
	const storageRef = firebase.storage().ref('/images/')

	useEffect(() => {
		db.collection('products').get().then(snapshot => {
			snapshot.docs.forEach(doc => {
				setProds(doc.data())
			})
		})

		storageRef.child('shoulderBag.jpg').getDownloadURL().then(imgPath => {
			setUrl(imgPath)
		})
	}, [db, storageRef])

	const { name, price, colors } = prods

  	return (
		<div>
			<p>{name}</p>
			<p>{price}</p>
			<p>{colors && colors.map(color => color + ', ')}</p>
			<img src={url} alt="" />
		</div>
  	)
}

export default App
