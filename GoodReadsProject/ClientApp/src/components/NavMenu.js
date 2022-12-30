import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import './Popup.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import TriggerButtonUser from './TriggerButtonUser';
import { ModalUser } from './ModalUser';

export class NavMenu extends Component {
    static displayName = NavMenu.name;

    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true,
            isShown: 1
        };
    }
    showModal = () => {
        this.setState({ isShown: 0 });
        this.toggleScrollLock();
    };
    toggleScrollLock = () => {
        document.querySelector('html').classList.toggle('scroll-lock');
    };
    closeModal = () => {
        this.setState({ isShown: 1 });
        this.TriggerButton.focus();
        this.toggleScrollLock();
    };
    onClickOutside = (event) => {
        if (this.modal && this.modal.contains(event.target)) return;
        this.closeModal();
    };
    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        return (
            <header>
                <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
                    <Container>
                        <div className="Logo"></div>
                        <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                        <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
                            <ul className="navbar-nav flex-grow">
                                <NavItem>
                                    <NavLink tag={Link} className="text-dark" to="/"><FontAwesomeIcon icon={faHouse} size="lg" /></NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} id="login" className="nav-text" to="/login">Login</NavLink>
                                </NavItem>
                                <NavItem>
                                    <p>|</p>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} id="register" className="nav-text" to="/register">Register</NavLink>
                                </NavItem>
                            </ul>
                            <TriggerButtonUser
                                showModal={() => (this.showModal())}
                                buttonRef={(n) => (this.TriggerButton = n)}
                                triggerText={this.props.triggerText}
                            />
                            {this.state.isShown === 0 ? (
                                <ModalUser
                                    modalRef={(n) => (this.modal = n)}
                                    buttonRef={(n) => (this.closeButton = n)}
                                    closeModal={this.closeModal}
                                />
                            ) : null}
                        </Collapse>
                    </Container>
                </Navbar>
            </header>
        );
    }
}
