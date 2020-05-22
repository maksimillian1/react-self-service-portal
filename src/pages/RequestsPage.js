import React, {useContext, useState} from "react";
import Modal from "../components/Modal";
import {AuthContext} from '../contexts/AuthContext';
import {ModalContext} from '../contexts/ModalContext';
import {ActionContent} from '../components/ActionContent';

import ReferenceField from '../components/ReferenceElement';
import DropDownField from '../components/DropDownElement';
import Preloader from '../components/Preloader';
import RequestList from '../components/lists/RequestList';

import {actionToComponent} from '../utils/actionToComponent';
import {useOnLoadFetch} from '../hooks/useOnLoadFetch';

export default function RequestsPage() {
    const user = useContext(AuthContext);
    const action = useContext(ModalContext);

    const [limit, setLimit] = useState(24);
    const [url, setUrl] = useState(`/api/now/table/sc_req_item?sysparm_limit=24`);
    const [item, setItem] = useState('');
    const [state, setState] = useState('');
    const [keyword, setKeyword] = useState('');
    const {result, loading, errors} = useOnLoadFetch(url);

    const clickHandler = (item) => {
        action.setModalContent(actionToComponent[item.action_name]);
        action.setActionId(item.itemId);
        action.setModalOpen(true);
    }
    
    const applyFilter = () => {
        const query = getQuery();
        let newUrl = `/api/now/table/sc_req_item?sysparm_limit=${limit}${query ? `&sysparm_query=${query}`: ''}`;             
        if(newUrl != url) {
            setUrl(newUrl);
        }
    }

    const getQuery = () => {
        let paramList = [];
        if(item) {
            paramList.push(`cat_item=${item}`);
        }
        if(state) {
            paramList.push(`state=${state}`);
        }
        if(keyword) {
            paramList.push(keyword.indexOf(':') !== -1 ? `${keyword.split(':')[0]}CONTAINS${keyword.split(':')[1]}`: `numberCONTAINS${keyword}`);
        }
        return paramList.join('^');
    }
    //document.querySelector('modal-root').addEventListener('onclick', () => action.setModalOpen(false));

    return (
        <div className="row">
            <h1 className="heading-primary">
                Welcome to requests page
            </h1>
            
            <div className="row row--flex">
                {user.actions && 
                <div className="action-panel">
    {user.actions.map(item => <div className="action-panel__item" key={item.itemId} onClick={() => clickHandler(item)}>{item.name}</div>)}
                </div>}
                <div className="row row--rel">
                    <div className="filter-bar filter-bar--rel">
                        <div className="filter-bar__element">
                            <input type="text" className="filter-bar__search" placeholder="Seach" onChange={(e)=> setKeyword(e.target.value)}/>
                        </div>
                        <div className="filter-bar__element">
                            <ReferenceField table="sc_cat_item" primaryField="name" secondaryField="short_description" 
                            placeholder="Catalog Item" onChange={(e) => setItem(e.sys_id.value)}/>
                        </div>
                        <div className="filter-bar__element">
                            <DropDownField table="incident" field="state" placeholder="State" onChange={(e)=> setState(e.value)}/>
                        </div>
                        <div className="filter-bar__element">
                            <button className="filter-bar__submit" onClick={applyFilter}>
                                Apply
                            </button>
                        </div>
                    </div>
                    <div className="flex-container">
                        {loading ? <Preloader />: <RequestList list={result} loading={loading}/>}
                    </div>
                </div>
            </div>

            {action.modalOpen ? <Modal><ActionContent /></Modal>:null}
      </div>
    );
}