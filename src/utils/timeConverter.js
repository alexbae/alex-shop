import firebase from 'firebase/app'
import 'firebase/firestore'

export const timeConverter = t => {
    return t && t.toDate()
}

export const today = new Date()