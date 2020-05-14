import React, {useState} from 'react';
import DropDownField from '../components/DropDownElement';
import Preloader from '../components/Preloader';

import useAxios from '../hooks/useAxios';
import IncidentList from '../components/IncidentList';



export default function IncidentPage() {

    const [limit, setLimit] = useState(27);
    const [url, setUrl] = useState(`/api/now/table/incident?sysparm_limit=${limit}`);
    const [category, setCategory] = useState('');
    const [state, setState] = useState('');

    const { loading, result } = useAxios(url, 'array');
    

    const onFilterChange = () => {
        const queryParams = (category ? '&category=' + category: '') + (state ? '&state=' + state: '');
        let newUrl = `/api/now/table/incident?sysparm_limit=${limit}${queryParams}`;
        if(newUrl !== url) {
            setUrl(newUrl);
        }
    }

    const loadMore = () => {
        setLimit(limit + 9);
        onFilterChange();
    }
    
    return (
        <>
            <div className="row">
                <div className="filter-bar">
                    <div className="filter-bar__element">
                        <DropDownField table="incident" field="category" placeholder="Category" onChange={(e)=> setCategory(e.value)}/>
                    </div>
                    <div className="filter-bar__element">
                        <DropDownField table="incident" field="state" placeholder="State" onChange={(e)=> setState(e.value)}/>
                    </div>
                    <div className="filter-bar__element">
                        <button className="filter-bar__submit" onClick={onFilterChange}>
                            Apply
                        </button>
                    </div>
                </div>
                <div className="flex-container">
                    {loading ? <Preloader />: <IncidentList list={result} loading={loading} onLoad={loadMore}/>}
                </div>
            </div>
        </>
    );
} 