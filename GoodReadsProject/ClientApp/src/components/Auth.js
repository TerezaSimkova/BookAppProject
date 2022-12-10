import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Breadcrumbs } from './Breadcrumbs';

export function Auth() {
    //redirect
    const history = useHistory();
    //Error handling ToDo
    const [errorMessages, setErrorMessages] = useState({});
    //Authentication ToDo
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [authenticated, setauthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated") || false));

    const [data, setData] = useState({
        emailAddress: "",
        password: ""
    });

    const { emailAddress, password } = data;
    const changeHandler = e => {

        setData({ ...data, [e.target.name]: [e.target.value] });

    }
    const errors = {
        emailAddress: "Invalid e-mail address",
        password: "Invalid password"
    };
    const onSubmit = async (e) => {
        e.preventDefault();

        console.log("Submit is fired.");
        let userInfo = {
            EmailAddress: emailAddress[0],
            Password: password[0],
        };

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(userInfo)
        }

        let response = await fetch('/api/user/login', requestOptions);
        if (response.ok) {
            history.push("/");
        }
        else {
            // user not found
            setErrorMessages({ name: "emailAddress", message: errors.emailAddress });
        }
    }
    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );

    const renderForm = (
        <div className="login_background_img">
            <div className="container_pages_login">
                <div className="container_content_login">
                    <form onSubmit={onSubmit}>
                        <h3>Login To Your Account</h3>
                        <div>
                            <label>Email address</label>
                            <input
                                type="email"
                                value={emailAddress}
                                onChange={changeHandler}
                                placeholder="mario.rossi@gmail.com"
                                name="emailAddress" required
                            />{renderErrorMessage("uname")}
                        </div>
                        <div>
                            <label>Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={changeHandler}
                                placeholder="**********"
                                name="password" required
                            />{renderErrorMessage("pass")}
                        </div>
                        <div>
                            <button type="submit">
                                Submit
                            </button>
                        </div>
                        <div className="form_row">
                            <input className="login_checkbox" type="checkbox" />
                            <label className="label">Remember Me</label>
                        </div>
                        <a href="#">Forgot Password?</a>
                    </form>
                </div>
            </div>
        </div>

    );
    return (
        <div className="app">
            <div>
                <Breadcrumbs />
            </div>
            <div className="login-form">
                {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
            </div>
        </div>
    );
}


