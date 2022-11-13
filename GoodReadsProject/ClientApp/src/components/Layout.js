import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import { SideNav } from './SideNav';
import { Body } from './MainBody';
import { Footer } from './Footer';


export class Layout extends Component {
    static displayName = Layout.name;

    render() {
        return (
            <div>
                <NavMenu />
                <Container>
                </Container>
                <Body />
                <SideNav />
                <Footer />
            </div>
        );
    }
}
