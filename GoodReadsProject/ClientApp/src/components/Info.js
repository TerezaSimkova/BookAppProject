import { SideNav } from './SideNav';
import React, { Component } from 'react';

export class Info extends Component {
    render() {
        return (
            <div className="container_pages">
                <SideNav />
                <div className="container_content">
                    <h1>Info Page</h1>
                </div>
            </div>
        );
    }
}