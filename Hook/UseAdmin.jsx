import { useEffect } from "react"
import { useState } from "react"

const useAdmin = email => {
    const [isAdmin, setIsAdmin] = useState(false)
    useEffect(() => {
        if (email) {
            fetch(`https://assignment-12-server-theta-orcin.vercel.app/isAdmin/${email}`)
                .then(res => res.json())
                .then(data => {
                    setIsAdmin(data.isAdmin)
                })
        }
    }, [email])
    return [isAdmin]
}

export default useAdmin;