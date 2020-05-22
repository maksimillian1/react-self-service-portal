
import React, {useState} from 'react';
import DropDownField from '../components/DropDownElement';
import ReferenceField from '../components/ReferenceElement';
import Preloader from '../components/Preloader';
import {useOnLoadFetch} from '../hooks/useOnLoadFetch';
import ApprovalList from '../components/lists/ApprovalList';



export function ApprovalsPage() {

    const [limit, setLimit] = useState(24);
    const [url, setUrl] = useState(`/api/now/table/sysapproval_approver?sysparm_limit=24`);
    const [approver, setApprover] = useState('');
    
    const [state, setState] = useState('');
    const [keyword, setKeyword] = useState('');
    const {result, loading, errors} = useOnLoadFetch(url);


    const loadMore = () => {
        setLimit(limit + 9);
        applyFilter();
    }

    //useInfiniteScroll(loadMore);
    

    const applyFilter = () => {
        const query = getQuery();
        let newUrl = `/api/now/table/sysapproval_approver?sysparm_limit=${limit}${query ? `&sysparm_query=${query}`: ''}`;             
        if(newUrl != url) {
            setUrl(newUrl);
        }
    }

    const getQuery = () => {
        let paramList = [];
        if(approver) {
            paramList.push(`approver=${approver}`);
        }
        if(state) {
            paramList.push(`state=${state}`);
        }
        if(keyword) {
            paramList.push(keyword.indexOf(':') !== -1 ? `${keyword.split(':')[0]}CONTAINS${keyword.split(':')[1]}`: `approver.nameCONTAINS${keyword}`);
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
                        placeholder="Assigned User" onChange={(e)=> setApprover(e.sys_id.value)}/>
                    </div>
                    <div className="filter-bar__element">
                        <DropDownField table="sysapproval_approver" field="state" placeholder="State" onChange={(e)=> setState(e.value)}/>
                    </div>
                    <div className="filter-bar__element">
                        <button className="filter-bar__submit" onClick={applyFilter}>
                            Apply
                        </button>
                    </div>
                </div>
                <div className="flex-container">
                    {loading ? <Preloader />: <ApprovalList list={result} loading={loading}/>}
                </div>
            </div>
        </>
    );
}