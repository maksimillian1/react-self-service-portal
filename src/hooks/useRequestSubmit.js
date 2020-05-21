import {useState, useCallback} from 'react';
import axios from 'axios';


export const useRequestSubmit = () => {
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState(null);

    const request = useCallback( async (url, body, headers={}) => {
        setLoading(true);
        try {

            headers['Content-Type'] = 'application/json';

            const response = await axios.post(url, body, {headers});

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