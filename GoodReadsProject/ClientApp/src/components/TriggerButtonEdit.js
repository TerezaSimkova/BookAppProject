import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'font-awesome/css/font-awesome.min.css';
import {
    faPencil,
    faTrash
} from '@fortawesome/free-solid-svg-icons'

const Trigger = ({ triggerText, buttonRef, showModal }) => {
    return (
        <div>
            <FontAwesomeIcon className="pencil" ref={buttonRef} onClick={showModal} icon={faPencil} size="sm" /> {triggerText}
        </div>

    );
};
export default Trigger;
