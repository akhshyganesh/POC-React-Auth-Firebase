import { useState } from "react"
import { makeAPIRequest } from "../services"

function MakeApi () {
    const [response, setResponse] = useState('')
    const [error, setError] = useState('')

    const callBackend = async () => {
        try {
            const res = await makeAPIRequest('profile')
            setResponse(JSON.stringify(res.data))
            setResponse(res.data)
            window.alert('Profile Data received' + res.data.email)
            console.log(res.data)
        } catch (error) {
            setError(JSON.stringify(error))
        }
        console.log(response, error)
    }

    return (
        <>
            <button onClick={() => callBackend()}>Make Backend API Call</button>
            {/* <div className="greetings">{response ? (
                <p>Hello {response.first_name}</p>
                ): (
                    error && <p>Error {error}</p>
                )
            }</div> */}
        </>
    )
}

export default MakeApi
