import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useAxios(url, type) {
    const [result, setResult] = useState(type == 'array'? []: {});
    const [errors, setErrors] = useState(false);
    const [loading, setLoading] = useState(false);
    let isMount = true;

    useEffect(()=>{
        
        async function fetchData() {
            if(isMount) {

                setErrors(false);
                setLoading(true);
                try {
                    var responce = await axios.get(url);
                
                    if(responce.statusText !== 'OK') {
                        throw new Error(responce.message || 'Fetch error');   
                    }

                    
                    setResult(responce.data.result);    
                    setLoading(false);    
                    

                } catch(e) {
                    setLoading(false);
                    setErrors(true);
                }
            }
                
        }
        
        fetchData();

        return () => {
            isMount = false;
        }
    }, [url])

    return {loading, errors, result};
}