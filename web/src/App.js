import Login from './components/login'
import Signup from './components/signup'
import MakeApi from './components/makeApi'
import { useEffect, useState } from 'react'
import { signout } from './vendor/firebase/auth'
import { STORAGE_KEY } from './constants'

function App() {
    const [currentUser, setCurrentUser] = useState({})

    useEffect(() => {
        setCurrentUser(JSON.parse(window.localStorage.getItem(STORAGE_KEY, {})))
    }, [])

    return (
        <div className='container'>
            <hr />
            {(
                currentUser &&
                (
                    <>
                        <div className='logged-session'>
                            <MakeApi />
                            <button onClick={() => signout()} className='signout-btn'>Sign Out</button>
                        </div>
                    </>
                )
            ) || (
                <>
                    <Login />
                    <hr />
                    <Signup />
                </>
            )}
            <hr />
        </div>
    )
}

export default App
