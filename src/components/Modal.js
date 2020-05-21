// Modal.js
import {useEffect} from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

function Modal(props) {

    useEffect(() => {
        modalRoot.classList.toggle('u-display-none');

        return () => modalRoot.classList.toggle('u-display-none');
    })

    return createPortal( props.children, modalRoot );

}
export default Modal;