import React, { useState } from 'react';

import * as firebase from 'firebase'

function App() {
  const [prods, setProds] = useState({})

  const db = firebase.firestore()

  db.collection('products').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
      console.log(doc.data())
      setProds(doc.data())
    })
  })

  return (
    <div>
      {prods.shoes}
      {prods.jacket}
    </div>
  );
}

export default App;
