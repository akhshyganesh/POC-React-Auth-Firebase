import axios from 'axios'
import { auth } from '../vendor/firebase'
import endPoint from '../vendor/config/endpoint.json'
import { DEFAULT_OPTIONS } from '../constants'

export async function makeAPIRequest(url, options=DEFAULT_OPTIONS) {
    try {
        const reqEndpoint = endPoint.server + url
        const response = await axios({
            url: reqEndpoint,
            data: options.data,
            method: options.method
        })
        return response
    } catch (error) {
        console.error(error)
    }
}

// Add a request interceptor
axios.interceptors.request.use(
    async config => {
        // Wait for the Firebase authentication initialization process to complete
        // Make sure auth is refreshed and we have currentUser all the time
        await new Promise((resolve) => {
            const unsubscribe = auth.onAuthStateChanged((user) => {
                unsubscribe()
                resolve()
            })
        })
        // get currentUser from firebase
        const user = auth.currentUser
        if (user) {
            const idTokenResult = await user.getIdTokenResult()
            const refreshToken = idTokenResult.token
            
            config.headers['Authorization'] = refreshToken
        } else {
            console.error('Unauthorized, No user is currently logged in.')
        }
        // config.headers['Content-Type'] = 'application/json'
        return config
    },
    error => {
        Promise.reject(error)
    }
)

// Add a response Interceptor
axios.interceptors.response.use(
    response => {
        return response.data
    }
)
