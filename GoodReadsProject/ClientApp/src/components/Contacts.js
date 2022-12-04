import React, { Component } from 'react';
import { SideNav } from './SideNav';


export class Contacts extends Component {
    render() {
        return (
            <div className="container_pages">

                <SideNav/>
                <div className="container_content">
                    <h1>Contact page</h1>
                </div>
            </div>
        );
    }
}