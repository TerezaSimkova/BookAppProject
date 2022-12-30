import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'font-awesome/css/font-awesome.min.css';
import {
    faUserCircle
} from '@fortawesome/free-solid-svg-icons'

const Trigger = ({ buttonRef, showModal }) => {
    return (
        <div className="user_icon">
            <FontAwesomeIcon ref={buttonRef} onClick={showModal} icon={faUserCircle} size="lg" />
        </div>

    );
};
export default Trigger;
