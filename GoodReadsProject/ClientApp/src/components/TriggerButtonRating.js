import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'font-awesome/css/font-awesome.min.css';
import {
    faPlus
} from '@fortawesome/free-solid-svg-icons'

const Trigger = ({ triggerText, buttonRef, showModal }) => {
    return (
        <div className="user_icon">
            <FontAwesomeIcon ref={buttonRef} onClick={showModal} icon={faPlus} size="sm" />{triggerText}
        </div>

    );
};
export default Trigger;
