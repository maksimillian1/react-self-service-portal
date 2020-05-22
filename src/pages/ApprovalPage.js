import React from 'react';

import {useOnLoadFetch} from '../hooks/useOnLoadFetch';
import Preloader from '../components/Preloader';

export function ApprovalPage(props) {
    
    const id = props.match.params.id;
    
    const {result, loading, errors} = useOnLoadFetch(`/api/x_395143_employee/em_approval_api/approval/${id}`);
            
    if(loading || errors || !result.sys_id){
        return <Preloader />;
    }
    
    let approval = result;
    
    return (
        <div className="row row--flex">
            <div className="col">
                <div className="info-panel">
                    <div className="info-panel__element">
                        <span className="info-panel__label">Assigned to</span>
                        <p className="info-panel__value">{approval.approver.name}</p>
                    </div>
                    <div className="info-panel__element">
                        <span className="info-panel__label">State</span>
                        <p className="info-panel__value">{`${approval.state[0].toUpperCase()}${approval.state.slice(1)}`}</p>
                    </div>
                    <div className="info-panel__element">
                        <span className="info-panel__label">Approving</span>
                        <p className="info-panel__value">{approval.approving.value}</p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="control-panel">
                    <button className="control-panel__button">Approve</button>
                    <button className="control-panel__button">Reject</button>
                </div>
            </div>
        </div>
    );
}