import React from 'react';
import { Link } from 'react-router-dom';

export default function Asset({obj}) {
    const link = `/asset/${obj.sys_id}`;
    return (
        <div className="card">
            <Link className="card__link" to={link}>
                <h2>{obj.name}</h2>
            </Link>
            <h4 className="card__category">Assigned: {obj.assigned_to.name}</h4>
        </div>
    );
}