import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'font-awesome/css/font-awesome.min.css';
import {
    faTrash
} from '@fortawesome/free-solid-svg-icons'

const Trigger = ({ triggerText, buttonRef, showModalDelete }) => {
    return (
        <div>
            <FontAwesomeIcon className="bin" ref={buttonRef} onClick={showModalDelete} icon={faTrash} size="sm" />{triggerText}
        </div>

    );
};
export default Trigger;
