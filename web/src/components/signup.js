import { useState } from "react"
import { signup } from '../vendor/firebase/auth'

function Signup () {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSignUp = async () => {
        try {
            await signup(email, password)
            alert('Account Created, Logged In')
        } catch (e) {
            alert('Something is wrong')
        }
    }

    return (
        <div className="signup-div">
            <h1>Sign UP Section</h1>
            <input value={email} placeholder="E-Mail" onChange={e => setEmail(e.target.value)} />
            <input type="password" value={password} placeholder="Password" onChange={e => setPassword(e.target.value)} />
            <button onClick={() => handleSignUp()}>Sign Up</button>
        </div>
    )
}

export default Signup
