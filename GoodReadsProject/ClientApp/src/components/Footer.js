import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//Icons
import 'font-awesome/css/font-awesome.min.css';
import {
    facebook,
} from '@fortawesome/free-solid-svg-icons'

export class Footer extends Component {

    render() {
        return (
            <div className="footer-bar">
                <div className="footer-content">
                    <div>
                        <p>Book Site ©2022</p>
                    </div>
                    <div className="footer-social">
                        <div className="twitter"></div>
                        <div className="pinterest"></div>
                        <div className="facebook"></div>
                        <div className="instagram"></div>
                    </div>
                    <div>
                        <span>Privacy</span>|
                        <span>Legal Notes</span>|
                        <span>Conditions</span>
                    </div>
                </div>
            </div>
        );
    }
}
