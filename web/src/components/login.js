import { useState } from "react"
import { signin } from '../vendor/firebase/auth'

function Login () {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async () => {
        try {
            await signin(email, password)
            alert('Logged In')
        } catch (e) {
            alert('Something is wrong')
        }
    }

    return (
        <div className="login-div">
            <h1>Log IN Section</h1>
            <input value={email} placeholder="E-Mail" onChange={e => setEmail(e.target.value)} />
            <input type="password" value={password} placeholder="Password" onChange={e => setPassword(e.target.value)} />
            <button onClick={() => handleLogin()}>Log In</button>
        </div>
    )
}

export default Login
