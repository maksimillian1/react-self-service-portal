import useAxios from '../hooks/useAxios';
import React from 'react';

import Preloader from '../components/Preloader';

export default function IncidentPage(props) {
    
    const id = props.match.params.id;
    
    const { loading, errors, result } = useAxios(`/api/x_395143_employee/em_incident_api/incident/${id}`, 'object');
    

    if(loading || errors){
        return <Preloader />;
    }
    
    let incident = result;
    
    return (
        <div className="row row--flex">
            <div className="col">
                <div className="info-panel">
                    <h1 className="heading-primary">
                        {incident.number} - {incident.short_description}
                    </h1>
                    <div className="info-panel__element">
                        <span className="info-panel__label">Caller</span>
                        <p className="info-panel__value">{incident.caller_id}</p>
                    </div>
                    <div className="info-panel__element">
                        <span className="info-panel__label">Category/Subcategory</span>
                        <p className="info-panel__value">{`${incident.category}/${incident.subcategory}`}</p>
                    </div>
                    <div className="info-panel__element">
                        <span className="info-panel__label">Description</span>
                        <p className="info-panel__value">{incident.description}</p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="control-panel">
                    <button className="control-panel__button">Resolved</button>
                    <button className="control-panel__button">Create Child Incident</button>
                </div>
            </div>
        </div>
    );
}