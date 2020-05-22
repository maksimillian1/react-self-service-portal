import React, {useState} from 'react';
import ReferenceField from '../components/ReferenceElement';
import Preloader from '../components/Preloader';
import {useOnLoadFetch} from '../hooks/useOnLoadFetch';
import AssetList from '../components/lists/AssetList';


export function AssetsPage() {

    const [limit, setLimit] = useState(24);
    const [url, setUrl] = useState(`/api/now/table/cmdb_ci?sysparm_limit=24`);
    const [assignedUser, setAssignedUser] = useState('');
    
    const [manufacturer, setManufacturer] = useState('');
    const [keyword, setKeyword] = useState('');
    const {result, loading, errors} = useOnLoadFetch(url);


    const loadMore = () => {
        setLimit(limit + 9);
        applyFilter();
    }

    //useInfiniteScroll(loadMore);
    

    const applyFilter = () => {
        const query = getQuery();
        let newUrl = `/api/now/table/cmdb_ci?sysparm_limit=${limit}${query ? `&sysparm_query=${query}`: ''}`;             
        if(newUrl != url) {
            setUrl(newUrl);
        }
    }

    const getQuery = () => {
        let paramList = [];
        if(assignedUser) {
            paramList.push(`assigned_to=${assignedUser}`);
        }
        if(manufacturer) {
            paramList.push(`manufacturer=${manufacturer}`);
        }
        if(keyword) {
            paramList.push(keyword.indexOf(':') !== -1 ? `${keyword.split(':')[0]}CONTAINS${keyword.split(':')[1]}`: `nameCONTAINS${keyword}`);
        }
        return paramList.join('^');
    }
    
    return (
        <>
            <div className="row">
                <div className="filter-bar">
                    <div className="filter-bar__element">
                        <input type="text" className="filter-bar__search" placeholder="Seach" onChange={(e)=> setKeyword(e.target.value)}/>
                    </div>
                    <div className="filter-bar__element">
                        <ReferenceField table="sys_user"primaryField="name" secondaryField="email" 
                        placeholder="Assigned User" onChange={(e) => setAssignedUser(e.sys_id.value)}/>
                    </div>
                    <div className="filter-bar__element">
                        <ReferenceField table="core_company" primaryField="name" secondaryField="" 
                        placeholder="Manufacturer" onChange={(e) => setManufacturer(e.sys_id.value)}/>
                    </div>
                    <div className="filter-bar__element">
                        <button className="filter-bar__submit" onClick={applyFilter}>
                            Apply
                        </button>
                    </div>
                </div>
                <div className="flex-container">
                    {loading ? <Preloader />: <AssetList list={result} loading={loading}/>}
                </div>
            </div>
        </>
    );
}