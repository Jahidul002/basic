import { useEffect } from "react"
import { useState } from "react"

const useBuyer = email => {
    const [isBuyer, setIsBuyer] = useState(false)
    useEffect(() => {
        if (email) {
            fetch(`https://assignment-12-server-theta-orcin.vercel.app/isBuyer/${email}`)
                .then(res => res.json())
                .then(data => {
                    setIsBuyer(data.isBuyer)
                })
        }
    }, [email])
    return [isBuyer]
}

export default useBuyer;