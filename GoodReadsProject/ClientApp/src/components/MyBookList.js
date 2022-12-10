import React, { Component } from 'react';
import { SideNav } from './SideNav';
import { User } from './User';
import { Breadcrumbs } from './Breadcrumbs';

export class BookList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            isLoaded: false,
            Books: [],
        };
    }
    componentDidMount() {
        fetch("/api/Books")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        Books: result
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
        const { error, isLoaded, Books } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div className="loading">Loading...</div>;
        } else {
            return (
                <div className="container_pages">
                    <Breadcrumbs />
                    <SideNav />
                    <User />
                    <div className="container_content">
                        <div className="books_row">
                            <ul>
                                {Books?.map((book) => (
                                    <li key={book.bookId}>
                                        <h3>{book.bookName}</h3>
                                        <h4>{book.author}</h4>
                                        <p>{book.bookDescription}</p>
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