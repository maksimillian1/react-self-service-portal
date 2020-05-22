import React from 'react';
import { Link } from 'react-router-dom';

export default function Task({obj}) {
    const link = `/task/${obj.sys_id}`;
    return (
        <div className="card">
            <Link className="card__link" to={link}>
                <h2>{obj.number}</h2>
            </Link>
            <h4 className="card__category">State: {obj.state}</h4>
            <p className="card__short">{obj.short_description}</p>
        </div>
    );
}