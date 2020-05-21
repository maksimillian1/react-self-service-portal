import React, {useContext, useState} from 'react';
import {ModalContext} from '../../contexts/ModalContext';


export default function AskQuestion({setPostResponse, request}) {
    const action = useContext(ModalContext);
    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');

    const onSubmit = async () => {
        let res = await request(`/api/x_elsr_react_app/em_request_api/create_request/${action.actionId}`, {short_description: subject, comments: body, urgency: 1})
        setPostResponse(res);
    }

    return (
        <form method="POST" onSubmit={onSubmit} className="action-window__form">
            <label htmlFor="title">Subject</label>
            <input id="title" type="text" onChange={(e)=> setSubject(e.target.value)}/>
            <label htmlFor="body">Your question</label>
            <textarea  id="body" cols="30" rows="3" onChange={(e)=> setBody(e.target.value)} ></textarea>
            <button className="btn btn--submit">Submit</button>
        </form>            
    );
}

///api/x_elsr_react_app/em_request_api/create_request/{id}
