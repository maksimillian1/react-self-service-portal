import React from 'react';

import {useOnLoadFetch} from '../hooks/useOnLoadFetch';
import Preloader from '../components/Preloader';

export function TaskPage(props) {
    
    const id = props.match.params.id;
    
    const {result, loading, errors} = useOnLoadFetch(`/api/x_395143_employee/em_task_api/task/${id}`);
    

    if(loading || errors || !result.sys_id){
        return <Preloader />;
    }
    
    let task = result;
    
    return (
        <div className="row row--flex">
            <div className="col">
                <div className="info-panel">
                    <h1 className="heading-primary">
                        {task.number} - {task.short_description}
                    </h1>
                    <div className="info-panel__element">
                        <span className="info-panel__label">Assigned to</span>
                        <p className="info-panel__value">{task.assigned_to.name}</p>
                    </div>
                    <div className="info-panel__element">
                        <span className="info-panel__label">Description</span>
                        <p className="info-panel__value">{task.description}</p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="control-panel">
                    <button className="control-panel__button">Close</button>
                </div>
            </div>
        </div>
    );
}