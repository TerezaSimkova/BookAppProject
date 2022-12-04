import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import { Footer } from './Footer';
//import { SideNav } from './SideNav';

export class Layout extends Component {
    static displayName = Layout.name;

    render() {
        return (
            <div>
                <NavMenu />
                {/*<SideNav />*/}
                <Container>
                </Container>               
                <Footer />
            </div>
        );
    }
}
