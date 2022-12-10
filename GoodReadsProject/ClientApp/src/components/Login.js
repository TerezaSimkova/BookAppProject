import React, { Component } from 'react';
import { Redirect, Navigate } from "react-router-dom";
import { Auth } from './Auth';

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emailAddress: "",
            password: "",
            isLoggedIn: false,
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange = e => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit = async (e) => {
        e.preventDefault();

        console.log("Submit is fired.");
        let userInfo = {
            EmailAddress: this.state.emailAddress,
            Password: this.state.password,
        };
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(userInfo)
        }
        let response = await fetch('/api/user/login', requestOptions);
        if (response) {
           
        }


    }

    render() {
        const { emailAddress, password } = this.state;
        return (         
            <div className="container_pages_login">
                <div className="container_content_login">
                    <h3>Login To Your Account</h3>
                    <form onSubmit={this.onSubmit}>
                        <label>E-mail Address</label>
                        <input placeholder="mario.rossi@gmail.com" type="text" name="emailAddress" value={emailAddress} onChange={this.onChange} />
                        <label>Password</label>
                        <input placeholder="**********" type="password" name="password" value={password} onChange={this.onChange} />
                        <button type="submit">Submit</button>
                        <div className="form_row">
                            <input className="login_checkbox" type="checkbox" />
                            <label className="label">Remember Me</label>
                        </div>
                        <a href="#">Forgot Password?</a>
                    </form>
                </div>
            </div>
        );
    }
}