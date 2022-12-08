import React, { Component } from 'react';
import { Navigate } from "react-router-dom";

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emailAddress: "",
            password: "",
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange = e => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit = e => {
        console.log("Submit is fired.");
        let loginInfo = {
            EmailAddress: this.state.emailAddress,
            Password: this.state.password,
        };
        console.log(loginInfo);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(loginInfo)
        }
        var response = fetch('/api/user/login', requestOptions)
            .then(response => response.json())
            .then(data => this.setState({
                emailAddress: data.emailAddress,
                password: data.password,
            }));
        console.log(response);
        if (response.ok) {
            this.setState({
                emailAddress: '',
                password: '',
            });
            console.log("Response went well.");
        } else {
            //this.setState({ message: "Some error occured"});
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
                        <input placeholder="mario.rossi@gmail.com" type="text" name="emailAddress" value={emailAddress} onChange={this.onChange}/>
                        <label>Password</label>
                        <input placeholder="**********" type="password" name="password" value={password} onChange={this.onChange}/>
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