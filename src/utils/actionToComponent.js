import React from 'react';
import EmailRequest from '../components/request-actions/EmailRequest';
import CreateIncident from '../components/request-actions/CreateIncident';
import AskQuestion from '../components/request-actions/AskQuestion';

export const actionToComponent = {
    ask_question: <AskQuestion />,
    email_request: <EmailRequest />,
    create_incident: <CreateIncident />
};