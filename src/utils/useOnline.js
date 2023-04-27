import { useState, useEffect } from "react"

const useOnline = () => {
    const [isOnline, setIsOnline] = useState(true)

    const handleOnline = () => {
        setIsOnline(true)
    }
    const handleOffline = () => {
        setIsOnline(false)
    }

    useEffect(() => {
        window.addEventListener("online", handleOnline)
        window.addEventListener("offline", handleOffline)

        // its a good practice to clear the event listener to prevent memory leakage
        return () => {
            window.removeEventListener("online", handleOnline)
            window.removeEventListener("offline", handleOffline)
        }
    },[])
    return isOnline;
}

export default useOnline;