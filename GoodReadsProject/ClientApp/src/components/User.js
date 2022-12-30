import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'font-awesome/css/font-awesome.min.css';
import {
    faUserCog
} from '@fortawesome/free-solid-svg-icons'

export class User extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            isLoaded: false,
            User: [],
        };
    }
    componentDidMount() {
        fetch("/api/User")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        User: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error: "Ooops something went wrong! Please wait..."
                    });
                }
            )
    }
    render() {
        const { error, isLoaded, User } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div className="loading">Loading...</div>;
        } else {
            return (
                <div className="container_pages_user">
                    <div className="container_content_user">
                        <div>
                            {User?.map((user) => (
                                <div key={user.userId}>
                                    <div className="external_content_user">
                                        <FontAwesomeIcon icon={faUserCog} size="3x" />
                                        <div className="content_user">
                                            <h4>Personal Information</h4>
                                            <h5>{user.name} {user.surname}</h5>
                                        </div>
                                    </div>
                                    <p>{user.personalDescription}</p>
                                    <p><b>Age:</b> {user.age}</p>
                                    <p><b>Date Of Birth:</b> {user.dateOfBirth}</p>
                                    <p><b>E-mail Address:</b> {user.emailAddress}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            );
        }

    }
}