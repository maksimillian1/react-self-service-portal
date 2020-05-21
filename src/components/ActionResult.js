import React from 'react';

export function ActionResult({number}) {
    return (
        <div className="action-window action-window--small">
            <h3>{number}</h3>
        </div>
    );
}