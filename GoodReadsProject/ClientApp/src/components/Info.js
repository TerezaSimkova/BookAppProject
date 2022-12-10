import { SideNav } from './SideNav';
import React, { Component } from 'react';
import { Breadcrumbs } from './Breadcrumbs';

export class Info extends Component {
    render() {
        return (
            <div className="container_pages">
                <Breadcrumbs />
                <SideNav />
                <div className="container_content">
                    <h1>Info Page</h1>
                </div>
            </div>
        );
    }
}