import React from 'react';

import {useOnLoadFetch} from '../hooks/useOnLoadFetch';
import Preloader from '../components/Preloader';

export function RequestPage(props) {
    
    const id = props.match.params.id;
    
    const {result, loading, errors} = useOnLoadFetch(`/api/x_395143_employee/em_ritm_api/ritm/${id}`);
    

    if(loading || errors){
        return <Preloader />;
    }
    
    let request = result;
    
    return (
        <div className="row row--flex">
            <div className="col">
                <div className="info-panel">
                    <h1 className="heading-primary">
                        {request.number} - {request.short_description}
                    </h1>
                    <div className="info-panel__element">
                        <span className="info-panel__label">Requested for</span>
                        <p className="info-panel__value">{request.requested_for.name}</p>
                    </div>
                    <div className="info-panel__element">
                        <span className="info-panel__label">Description</span>
                        <p className="info-panel__value">{request.description}</p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="control-panel">
                    <button className="control-panel__button">Cancel</button>
                </div>
            </div>
        </div>
    );
}