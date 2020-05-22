import {useState ,useEffect, useCallback} from "react";
import {useFetchData} from './useFetchData';


export const useOnLoadFetch = (url) => {
    const [result, setResult] = useState({});
    const { loading, request, errors } = useFetchData();

    const fetchData = useCallback( async () => {
        try {
            const fetched = await request(url);
            setResult(fetched);
        } catch (error) {
            console.log(error);
        }
    }, [request,url])

    useEffect(()=> {
        fetchData();
    }, [fetchData]) 

    return {result, loading, errors};
        
}