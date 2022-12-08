import React, { Component } from 'react';
import { SideNav } from './SideNav';
import { Vip } from './vip';
import './form.css';

export class Register extends Component {
    constructor(props) {
        super(props);
        //ToDo - risolvere uncontrolled to controlled, vuol dire che dopo submit
        //vede i campi undefined non come string, deve essere string to string
        this.state = {
            name: '',
            surname: '',
            username: '',
            password:'',
            emailAddress: '',
            dateOfBirth: '',
            address: '',
            personalDescription: '',
            error: "Ooops something went wrong! Please wait...",
            success: false,
            message: '',
            userInfo: ''
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit = e => {
        e.preventDefault();
        console.log("on submit is fired");
        let userInfo = {
            Name: this.state.name,
            Surname: this.state.surname,
            Username: this.state.username,
            Password: this.state.password,
            EmailAddress: this.state.emailAddress,
            DateOfBirth: this.state.dateOfBirth,
            Address: this.state.address,
            PersonalDescription: this.state.personalDescription,

        };
        console.log(userInfo);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(userInfo)
        }
        var response = fetch('/api/User', requestOptions)
            .then(response => response.json())
            .then(data => this.setState({
                name: data.name,
                surname: data.surname,
                username: data.username,
                password: data.password,
                emailAddress: data.emailAddress,
                dateOfBirth: data.dateOfBirth,
                address: data.address,
                personalDescription: data.personalDescription,
            }));
        console.log(response);
        //dopo submit reindirizza alla pagina di login 
        if (response.ok) {
            this.setState({
                name: '',
                surname: '',
                username: '',
                password: '',
                emailAddress: '',
                dateOfBirth: '',
                address: '',
                personalDescription: '',
                success: true,
                message: "User Created Successfully!",
            });
        } else {
            //this.setState({ message: "Some error occured"});
        }

    }

    render() {
        const { name, surname, username, emailAddress, address, personalDescription, dateOfBirth, password } = this.state;
        return (
            <div className="container_pages" >
                <SideNav />
                <div className="container_content">
                    <h3 className="register_title">Create Your Account</h3>
                    <p className="information">* fields with this sign are mandatory</p>
                    <div className="register_form">
                        <form onSubmit={this.onSubmit}>
                            <div className="form_row">
                                <div className="inner_row">
                                    <label>Name*</label>
                                    <input type="text" name="name" value={name} onChange={this.onChange} />
                                </div>
                                <div className="inner_row">
                                    <label>Surname*</label>
                                    <input type="text" name="surname" value={surname} onChange={this.onChange} />
                                </div>
                            </div>
                            <div className="form_row">
                                <div className="inner_row">
                                    <label>Username*</label>
                                    <input type="text" name="username" value={username} onChange={this.onChange} />
                                </div>
                                <div className="inner_row">
                                    <label>E-mail Address*</label>
                                    <input type="text" name="emailAddress" value={emailAddress} onChange={this.onChange} />
                                </div>
                            </div>
                            <div className="form_row">
                                <div className="inner_row">
                                    <label>Date Of Birth*</label>
                                    <input placeholder="yyyy-mm-gg" type="text" name="dateOfBirth" value={dateOfBirth} onChange={this.onChange} />
                                </div>
                                <div className="inner_row">
                                    <label>Your Address*</label>
                                    <input type="text" name="address" value={address} onChange={this.onChange} />
                                </div>
                            </div>
                            <div className="form_row">
                                <div className="inner_row">
                                    <label>About you*</label>
                                    <input type="text" name="personalDescription" value={personalDescription} onChange={this.onChange} />
                                </div>
                                <div className="inner_row">
                                    <label>Your Password*</label>
                                    <input type="password" name="password" value={password} onChange={this.onChange} />
                                </div>                            
                            </div>
                            <button type="submit">Submit</button>
                            {/*<div className="message">{this.success ? <p>{this.state.message}</p> : null}</div>*/}
                        </form>
                    </div>
                </div>
                <Vip />
            </div>
        );
    };
}
