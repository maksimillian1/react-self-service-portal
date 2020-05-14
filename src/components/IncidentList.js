import React from 'react';

import Preloader from '../components/Preloader';
import Incident from "./Incident";

export default function IncidentList({list, loading, onLoad}) {
    
    if(loading){
        return <Preloader />;
    }

    return (
        <div className="row">
            <div className="flex-container">
                {list.length ?
                    list.map(item=> <Incident key={item.sys_id} obj={item}/>)
                    : <h3 className="title--empty">No one found</h3>}
            </div>
            {list.length ? <div className="center-container">
                <button className="btn btn--loader" onClick={onLoad}>Load More</button>
            </div> : null}
            
        </div>
    );
}