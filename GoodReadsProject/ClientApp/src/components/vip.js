import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'font-awesome/css/font-awesome.min.css';
import {
    faBookBookmark,
} from '@fortawesome/free-solid-svg-icons'
export class Vip extends Component {
    render() {
        return (
            <div className="container_pages">
                <div className="container_content_vip">
                    <div className="inner_vip">
                        <FontAwesomeIcon icon={faBookBookmark} size="4x" />
                        <h2 className="info_vip">Are you an author or a publisher?</h2>
                        <p>Gain access to a massive audience of book lovers. Goodreads is a great place to promote your books.</p>
                        <button className="vip_btn" type="submit">Gain Access</button>
                    </div>
                </div>
            </div>
        );
    }
}