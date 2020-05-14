import React from 'react';
import { Link } from 'react-router-dom';

export default function Incident({obj}) {
    const link = `/x_elsr_react_app_index-html.do/incident/${obj.sys_id}`;
    return (
        <div className="incident-card">
            <Link className="incident-card__link" to={link}>
                <h2>{obj.number}</h2>
            </Link>
            <h4 className="incident-card__category">Type: {obj.category}</h4>
            <p className="incident-card__short">{obj.short_description}</p>
        </div>
    );
}