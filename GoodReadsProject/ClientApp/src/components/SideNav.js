import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import { useEffect, useState } from 'react';
import { Outlet, Link } from "react-router-dom";
import './NavMenu.css';

//Icons
import 'font-awesome/css/font-awesome.min.css';
import {
    faHeart,
    faPlus,
    faInfo,
    faPhone,
    faListDots,
    faClose,
} from '@fortawesome/free-solid-svg-icons'


export class SideNav extends Component{

    constructor(props) {
        super(props);

        this.state = {
            add: null,
            info: null,
            contact: null,
            myList: null,
            show: false
        }
        
    }
    handleClick = () => {
        var a = document.querySelector('.side-nav-container .side-nav-menu .icon svg path')
        a.classList.toggle('pink');
    };
    openSideMenu = () => {

        this.setState({ add: 'Add' });
        this.setState({ info: 'Info' });
        this.setState({ contact: 'Contacts' });
        this.setState({ myList: 'Book List' });

        // toggle class on click
        var sideNavBtnClose = document.getElementById("hamburgerMenuSidenNav");
        sideNavBtnClose.classList.toggle('active');

        // add class on click
        var sideMenu = document.getElementById("sideMenuNav");
        sideMenu.classList.add('open-side-menu');

        var sideNavBtnClose = document.getElementById("sideMenuNavClose");
        sideNavBtnClose.style.display = "flex";

        const text = document.getElementsByClassName("side-nav-text");
        for (let i = 0; i < text.length; i++) {
            const t = text[i];
            t.style.display = "flex";
        }

        const divs = document.getElementsByClassName("icon");
        for (let i = 0; i < divs.length; i++) {
            const div = divs[i];
            div.classList.add('side-nav-div-items');
        }
        const anch = document.getElementsByClassName("anchor");
        for (let i = 0; i < anch.length; i++) {
            const anchor = anch[i];
            anchor.classList.add('side-nav-link');
        }

    }
    closeSideMenu = () => {

        this.setState({ add: null , info: null, contact: null, myList: null});

        var sideMenu = document.getElementById("sideMenuNav");
        sideMenu.classList.remove('open-side-menu');

        var sideNavBtnClose = document.getElementById("sideMenuNavClose");
        sideNavBtnClose.style.display = "none";

        var sideNavBtnClose = document.getElementById("hamburgerMenuSidenNav");
        sideNavBtnClose.classList.remove('active');

        const text = document.querySelectorAll("icon anchor span");
        for (let i = 0; i < text.length; i++) {
            const t = text[i];
            t.style.display = "none";
        }
    }
    render() {
        return (
            <div className="side-nav-container">
                <div className="menu-btn"><a onClick={this.openSideMenu} id="hamburgerMenuSidenNav"><FontAwesomeIcon className="side-nav-heart" icon={faListDots} size="lg" /></a></div>
                <button onClick={this.closeSideMenu} className="side-nav-close-btn" id="sideMenuNavClose"><FontAwesomeIcon icon={faClose} size="lg" /></button>
                <div className="side-nav-menu" id="sideMenuNav">
                    <Link className="icon anchor" to="/addBook">
                        {this.state.add}
                        <FontAwesomeIcon className="sideNavIcons" onClick={this.setShow} icon={faPlus} size="lg" />
                    </Link>
                    <Link className="icon anchor" to="/myBookList">
                        {this.state.myList}
                        <FontAwesomeIcon className="sideNavIcons" onClick={this.setShow} icon={faHeart} size="lg" />
                    </Link>
                    <Link className="icon anchor" to="/info">
                        {this.state.info}
                        <FontAwesomeIcon className="sideNavIcons" onClick={this.setShow} icon={faInfo} size="lg" />
                    </Link>
                    <Link className="icon anchor" to="/contacts">
                        {this.state.contact}
                        <FontAwesomeIcon className="sideNavIcons" onClick={this.setShow} icon={faPhone} size="lg" />
                    </Link>
                </div>
            </div>
        );

    }
   
}

