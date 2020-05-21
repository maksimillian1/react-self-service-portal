import {createContext} from 'react';

export const ModalContext = createContext({
    actionId: '',
    setActionId: f => f,
    modalOpen: false,
    setModalOpen: f => f,
    modalContent: null,
    setModalContent: f=> f
});