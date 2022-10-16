import { useState } from "react"
import { GetStarted } from "../pages/getStarted"
import { LoadingPage } from "../pages/Loading"

export const Pages = () => {

    const [authenticated, setAuthenticated] = useState(false)

    function handleAuthenticated() {
        setAuthenticated(true)
    }

    if (authenticated) {
        return (
            <LoadingPage />
        )
    }

    return (
        <GetStarted handleAuthenticated={handleAuthenticated} />
    )

}