import React from 'react';
import { Link } from 'react-router-dom';

export default function Incident({obj}) {
    const link = `/incident/${obj.sys_id}`;
    return (
        <div className="card">
            <Link className="card__link" to={link}>
                <h2>{obj.number}</h2>
            </Link>
            <h4 className="card__category">Type: {obj.category}</h4>
            <p className="card__short">{obj.short_description}</p>
        </div>
    );
}