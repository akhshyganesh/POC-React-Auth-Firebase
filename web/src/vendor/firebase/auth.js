import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";
import { auth } from './index'
import { STORAGE_KEY } from "../../constants";
import { makeAPIRequest } from "../../services"

export const signup = (email, password) => createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
        // Signed in 
        const user = userCredential.user;
        const data = {"uid":user.uid, "email":user.email}
        await makeAPIRequest('/create/user', {data: data, method: 'POST'})
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(user))
        window.location.reload(true)
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode)
        console.error(errorMessage)
        // ..
    });

export const signin = (email, password) => signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(user))
        window.location.reload(true)
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode)
        console.error(errorMessage)
        // ..
    });

export const signout = () => signOut(auth)
    .then(() => {
        window.localStorage.removeItem(STORAGE_KEY)
        window.location.reload(true)
    })
    .catch((error) => {
        console.error(error)
    })
