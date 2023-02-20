import { useEffect } from "react"
import { useState } from "react"

const useSeller = email => {
    const [isSeller, setIsSeller] = useState(false)
    useEffect(() => {
        if (email) {
            fetch(`https://assignment-12-server-theta-orcin.vercel.app/isSeller/${email}`)
                .then(res => res.json())
                .then(data => {
                    setIsSeller(data.isSeller)
                })
        }
    }, [email])
    return [isSeller]
}

export default useSeller;