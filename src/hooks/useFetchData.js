import {useState, useCallback} from 'react';
import axios from 'axios';


export const useFetchData = () => {
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState(null);

    const request = useCallback( async (url) => {
        setLoading(true);
        try {

            const response = await axios.get(url);

            if(response.statusText !== 'OK') {
                throw new Error(response.message || 'Fetch error');
            } 

            setLoading(false);
            return response.data.result;

        }catch(e){
            setLoading(false);
            setErrors(e.message);
            throw e;
        }
    }, []);

    const clearError = useCallback(() => setErrors(null), []);

    return { loading, request, errors, clearError };
}