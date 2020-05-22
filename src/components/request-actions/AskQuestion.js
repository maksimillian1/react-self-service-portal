import React, {useContext, useState} from 'react';
import {ModalContext} from '../../contexts/ModalContext';


export default function AskQuestion({setPostResponse, request, className}) {
    const action = useContext(ModalContext);
    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');

    const onSubmit = async () => {
        let res = await request(`/api/x_elsr_react_app/em_request_api/create_request/${action.actionId}`, {short_description: subject, comments: body, urgency: 1})
        setPostResponse(res);
    }

    console.log(className);
    

    return (
        <form method="POST" onSubmit={onSubmit} className="action-form">
            <input required className="action-form__input" id="title" type="text" onChange={(e)=> setSubject(e.target.value)} placeholder="Subject"/>
            <label className="action-form__label" htmlFor="title">Subject</label>
            <textarea required className="action-form__input" id="body" cols="30" rows="3" onChange={(e)=> setBody(e.target.value)} placeholder="Your question"></textarea>
            <label className="action-form__label" htmlFor="body">Your question</label>
            <button className={`btn btn--submit ${className}`}>Submit</button>

        </form>            
    );
}

///api/x_elsr_react_app/em_request_api/create_request/{id}
