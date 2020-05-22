import React from 'react';

export function ActionResult({number, onClose}) {
    return (
        <div className="action-window action-window--small">
            <button className="btn btn--close"></button>
            <h2 className="action-window__header">Your request processed successfully!</h2>
            <p>Request number: {number}</p>
            <button className="btn btn--submit" onClick={onClose}>Got it!</button>
        </div>
    );
}