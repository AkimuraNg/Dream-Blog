import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortFetch = new AbortController()

        setTimeout(() => {
            fetch(url, { signal: abortFetch.signal })
                .then(res => {
                    console.log(res)
                    if (!res.ok) {
                        throw Error('Unable to fetch data from server')
                    }
                    return res.json()
                })
                .then(data => {
                    setData(data)
                    setIsPending(false)
                    setError(null)
                })
                .catch(err => {
                    if (err.name === 'AbortError') {
                        console.log('Fetch Aborted')
                    }
                    else {
                        setIsPending(false)
                        setError(err.message)
                    }
                })
        }, 500)
        return () => abortFetch.abort()
    }, [url])

    return { data, isPending, error }
}

export default useFetch;