import React, {useContext} from "react";
import Modal from "../components/Modal";
import {AuthContext} from '../contexts/AuthContext';
import {actionToComponent} from '../utils/actionToComponent';
import {ModalContext} from '../contexts/ModalContext';
import {ActionContent} from '../components/ActionContent';

export default function RequestsPage() {
    const user = useContext(AuthContext);
    const action = useContext(ModalContext);


    const clickHandler = (item) => {
        action.setModalContent(actionToComponent[item.action_name]);
        action.setActionId(item.itemId);
        action.setModalOpen(true);
    }
    
    //document.querySelector('modal-root').addEventListener('onclick', () => action.setModalOpen(false));

    return (
        <div className="row">
            <h1 className="heading-primary">
                Welcome to requests page
            </h1>
            
            <div className="row row--flex">
                {user.actions && 
                <div className="action-panel">
    {user.actions.map(item => <div className="action-panel__item" key={item.itemId} onClick={() => clickHandler(item)}>{item.name}</div>)}
                </div>}

                <div className="flex-container">
                    <div className="incident-card">test</div>
                    <div className="incident-card">test</div>
                    <div className="incident-card">tset</div>
                    <div className="incident-card">etsd</div>
                    <div className="incident-card">stdf</div>
                </div>
            </div>

            {action.modalOpen ? <Modal><ActionContent /></Modal>:null}
      </div>
    );
}