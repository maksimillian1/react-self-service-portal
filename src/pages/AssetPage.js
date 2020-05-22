import React from 'react';

import {useOnLoadFetch} from '../hooks/useOnLoadFetch';
import Preloader from '../components/Preloader';

export function AssetPage(props) {
    
    const id = props.match.params.id;
    
    const {result, loading, errors} = useOnLoadFetch(`/api/x_395143_employee/em_asset_api/asset/${id}`);
            
    if(loading || errors || !result.sys_id){
        return <Preloader />;
    }
    
    console.log(result);

    let asset = result;
    
    return (
        <div className="row row--flex">
            <div className="col">
                <div className="info-panel">
                    <div className="info-panel__element">
                        <span className="info-panel__label">Assigned to</span>
                        <p className="info-panel__value">{asset.assigned_to.name}</p>
                    </div>
                    <div className="info-panel__element">
                        <span className="info-panel__label">Location</span>
                        <p className="info-panel__value">{asset.location}</p>
                    </div>
                    <div className="info-panel__element">
                        <span className="info-panel__label">Manufacturer</span>
                        <p className="info-panel__value">{asset.manufacturer}</p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="control-panel">
                    <button className="control-panel__button">Reassign</button>
                </div>
            </div>
        </div>
    );
}