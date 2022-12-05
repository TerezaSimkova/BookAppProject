import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SideNav } from './SideNav';
import { Vip } from './vip';
import './form.css';
import 'font-awesome/css/font-awesome.min.css';
import {
    faBookBookmark,
} from '@fortawesome/free-solid-svg-icons'
//import { useEffect, useState } from 'react';


export class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            surname: '',
            username: '',
            email: '',
            dateOfBirth: '',
            address: '',
            personalDescription: '',
            error: "Ooops something went wrong! Please wait...",
        };
    }
    handleSubmit = () => {
        let userInfo = {
            Name: this.refs.Name.value,
            Surname: this.refs.Surname.value,
            Username: this.refs.Username.value,
            Email: this.refs.Email.value,
            DateOfBirth: this.refs.DateOfBirth.value,
            Address: this.refs.Address.value,
            PersonalDescription: this.refs.PersonalDescription.value,

        };
        fetch('/api/User', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: userInfo
        }).then(r => r.json()).then(res => {
            if (res) {
                this.setState({ message: 'New Employee is Created Successfully' });
            }
        });

    }

    render() {
        return (
            <div className="container_pages" >
                <SideNav />
                <div className="container_content">
                    <h3 className="register_title">Create Your Account</h3>
                    <p className="information">* fields with this sign are mandatory</p>
                    <div className="register_form">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form_row">
                                <div className="inner_row">
                                    <label>Name*</label>
                                    <input type="text" ref="Name" />
                                </div>
                                <div className="inner_row">
                                    <label>Surname*</label>
                                    <input type="text" ref="Surname" />
                                </div>
                            </div>
                            <div className="form_row">
                                <div className="inner_row">
                                    <label>Username*</label>
                                    <input type="text" ref="Username" />
                                </div>
                                <div className="inner_row">
                                    <label>E-mail Address*</label>
                                    <input type="text" ref="Email" />
                                </div>
                            </div>
                            <div className="form_row">
                                <div className="inner_row">
                                    <label>Date Of Birth*</label>
                                    <input type="text" ref="DateOfBirth" />
                                </div>
                                <div className="inner_row">
                                    <label>Your Address*</label>
                                    <input type="text" ref="Address" />
                                </div>
                            </div>
                            <div className="form_row">
                                <div className="inner_row">
                                    <label>About you*</label>
                                    <input type="text" ref="PersonalDescription" />
                                </div>
                            </div>
                            <button type="submit">Submit</button>
                            <div className="message">{this.message ? <p>{this.message}</p> : null}</div>
                        </form>
                    </div>
                </div>
                <Vip />
            </div>
        );
    };
}
