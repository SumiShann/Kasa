import { useState, useEffect } from 'react'

export function useFetch(url) {
    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    async function fetchData() {
        const response = await fetch(url)
        const data = await response.json()
        setData(data)
    }
    
    useEffect(() => {
        if (!url){
            return
        }
        try {
            setLoading(true)
            fetchData()
        } catch (error) {
            setError(true)
        } finally{
            setLoading(false)
        }
    }, [url])

    return { data, isLoading, error }
}