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
                    <div className="footer-text-part">
                        <div className="footer-logo">
                        </div>
                        <p>Book Site ©2022</p>
                    </div>
                    <div className="footer-social">
                        <a href="#" className="twitter"></a>
                        <a href="#" className="pinterest"></a>
                        <a href="#" className="facebook"></a>
                        <a href="#" className="instagram"></a>
                    </div>
                    <div className="footer-info-part">
                        <a href="#">Privacy |</a>
                        <a href="#"> Legal Notes |</a>
                        <a href="#"> Conditions</a>
                    </div>
                </div>
            </div>
        );
    }
}
