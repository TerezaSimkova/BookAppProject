import React, { Component } from 'react';
import { SideNav } from './SideNav';

export class Home extends Component {
    static displayName = Home.name;

    render() {
        return (
            <div>
                <SideNav />
                <div className="main-body">
                </div>
            </div>
        );
    }
}
