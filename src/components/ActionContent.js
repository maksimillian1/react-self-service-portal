import React, {cloneElement, useContext, useState} from 'react';
import {ModalContext} from '../contexts/ModalContext';
import { useRequestSubmit } from '../hooks/useRequestSubmit';
import Preloader from '../components/Preloader';
import {ActionResult} from '../components/ActionResult';

export function ActionContent() {
    const action = useContext(ModalContext);
    const {loading, errors, request} = useRequestSubmit();
    const [postResponse, setPostResponse] = useState(null);
    
    if(loading || errors){
        return <Preloader />;
    }

    const closeModal = (event) => {
        if([...event.target.classList].filter(item => item === 'action-container' || item === 'btn--close').length) {
            action.setModalOpen(false);
        }
    }
    
    return (
        <div className="action-container" onClick={(event) => closeModal(event)}>
            {!postResponse ? 
            <div className="action-window">
                <button onClick={()=> action.setModalOpen(false)} className="btn btn--close"></button>
                {cloneElement(action.modalContent, { setPostResponse: setPostResponse, request:request })}
            </div>:
                <ActionResult number={postResponse.number}/>
            }
        </div>
    );
}