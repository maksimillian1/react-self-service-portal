import React, {useState} from 'react';
import DropDownField from '../components/DropDownElement';
import ReferenceField from '../components/ReferenceElement';

import Preloader from '../components/Preloader';
import {useOnLoadFetch} from '../hooks/useOnLoadFetch';
import TaskList from '../components/lists/TaskList';



export function TasksPage() {

    const [limit, setLimit] = useState(24);
    const [url, setUrl] = useState(`/api/now/table/sc_task?sysparm_limit=24`);
    const [priority, setPriority] = useState('');
    const [assignedUser, setAssignedUser] = useState('');
    const [keyword, setKeyword] = useState('');
    const {result, loading, errors} = useOnLoadFetch(url);


    const loadMore = () => {
        setLimit(limit + 9);
        applyFilter();
    }

    //useInfiniteScroll(loadMore);
    

    const applyFilter = () => {
        const query = getQuery();
        let newUrl = `/api/now/table/sc_task?sysparm_limit=${limit}${query ? `&sysparm_query=${query}`: ''}`;             
        if(newUrl != url) {
            setUrl(newUrl);
        }
    }

    
    const getQuery = () => {
        let paramList = [];
        if(assignedUser) {
            paramList.push(`assigned_to=${assignedUser}`);
        }
        if(priority) {
            paramList.push(`state=${priority}`);
        }
        if(keyword) {
            paramList.push(keyword.indexOf(':') !== -1 ? `${keyword.split(':')[0]}CONTAINS${keyword.split(':')[1]}`: `numberCONTAINS${keyword}`);
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
                        <DropDownField table="sc_task" field="priority" placeholder="Priority" onChange={(e)=> setPriority(e.value)}/>
                    </div>
                    <div className="filter-bar__element">
                        <ReferenceField table="sys_user"primaryField="name" secondaryField="email" 
                        placeholder="Assigned User" onChange={(e)=> setAssignedUser(e.sys_id.value)}/>
                    </div>
                    <div className="filter-bar__element">
                        <button className="filter-bar__submit" onClick={applyFilter}>
                            Apply
                        </button>
                    </div>
                </div>
                <div className="flex-container">
                    {loading ? <Preloader />: <TaskList list={result} loading={loading}/>}
                </div>
            </div>
        </>
    );
}