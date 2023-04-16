import 'firebase/auth'
import firebaseConfig from '../config/firebaseConfig.json'

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

// Initialize Firebase
const app = initializeApp(firebaseConfig)


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app)
