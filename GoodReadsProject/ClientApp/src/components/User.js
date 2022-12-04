import React, { Component } from 'react';
import Avatar from 'react-avatar';

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
            return <div>Loading...</div>;
        } else {
            return (
                <div className="container_pages">
                    <div className="container_content">
                        <div>
                            <ul>
                                {User?.map((user) => (
                                    <li key={user.userId}>
                                        <h3>Personal Information</h3>
                                        <h3>{user.name} {user.surname}</h3>
                                        <div className="user_foto"></div>
                                        <p>{user.personalDescription}</p>
                                        <p><b>Age:</b> {user.age}</p>
                                        <p><b>Date Of Birth:</b> {user.dateOfBirth}</p>
                                        <p><b>E-mail Address:</b> {user.emailAddress}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            );
        }

    }
}