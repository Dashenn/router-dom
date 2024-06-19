import React, { useCallback, useEffect, useState } from "react";
const useGetData = (url, options) => {
    const [data, setData]= useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const FetchServerData = useCallback(async (controller) => {
        setLoading(true)
        setError(null)
        try {
            const response = await fetch(url, {...options, signal: controller.signal})
            const result = await response.json()
            setData(result)
        
        }catch (e) {
            setError(e)
            console.log('Error')
        }finally {
            setLoading(false)
        }
    }, [url, options])

    useEffect(() => {
        const controller = new AbortController()
        FetchServerData(controller)
        return () => {
            controller.abort()
        }
    }, [FetchServerData])


    return {data, loading, error, refetch: () => FetchServerData(new AbortController())}
}
export default useGetData;