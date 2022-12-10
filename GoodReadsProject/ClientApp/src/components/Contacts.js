import React, { Component } from 'react';
import { SideNav } from './SideNav';
import { Breadcrumbs } from './Breadcrumbs';

export class Contacts extends Component {
    render() {
        return (
            <div className="container_pages">
                <Breadcrumbs />
                <SideNav/>
                <div className="container_content">
                    <h1>Contact page</h1>
                </div>
            </div>
        );
    }
}