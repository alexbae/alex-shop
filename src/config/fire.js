import firebase from 'firebase/app'
import 'firebase/firebase-auth'

const config = {
    apiKey: "AIzaSyBuK969dlY-Tn_7s9umbJ7BtFJKNdtqT-g",
    authDomain: "alex-shop-f4ad9.firebaseapp.com",
    databaseURL: "https://alex-shop-f4ad9.firebaseio.com",
    projectId: "alex-shop-f4ad9",
    storageBucket: "alex-shop-f4ad9.appspot.com",
    messagingSenderId: "494436504233",
    appId: "1:494436504233:web:45765f4cbc17348e064fb8",
    measurementId: "G-NB42X4N01V"
}

const fire = firebase.initializeApp(config)

export default fire
